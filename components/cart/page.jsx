import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartProvider";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {
    cart,
    getCartCount,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    isLoaded,
  } = useCart();

  if (!isLoaded) {
    return (
      <Image
        className="size-6 opacity-60 sm:size-7 lg:size-8"
        src="/assets/Cart.svg"
        alt="cart"
        width={30}
        height={30}
      />
    );
  }

  const handleCheckout = () => {
    setOpen(false);
    if (cart.length > 0) {
      router.push("/checkout");
    }
  };

  const cartTotal = getCartCount();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button onClick={() => setOpen(true)} className="relative">
          <Image
            className="size-6 opacity-60 sm:size-7 lg:size-8"
            src="/assets/Cart.svg"
            alt="cart"
            width={30}
            height={30}
          />

          {cart.length > 0 && (
            <span className="bg-button before:bg-button/80 absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-sm text-white before:absolute before:-z-10 before:size-6 before:animate-ping before:rounded-full">
              {cartTotal}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="border-accent/20 dark:bg-primary flex flex-col justify-between gap-y-4 overflow-y-auto border-l p-6">
        <SheetHeader>
          <SheetTitle className="text-white">Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="w-full">
          <div className="flex h-full flex-col">
            {cart.length === 0 ? (
              <p className="font-moranga-regular text-center text-[4rem]">
                Your cart is empty
              </p>
            ) : (
              <>
                <div className="flex flex-col gap-y-4">
                  {cart.map((plant) => (
                    <div
                      key={plant.id}
                      className="flex w-full gap-x-4 rounded-lg py-4"
                    >
                      <Image
                        className="size-24"
                        src={plant.image}
                        alt={plant.name}
                        width={100}
                        height={100}
                      />
                      <div className="flex w-full flex-col gap-y-4">
                        <div className="flex flex-col gap-y-1">
                          <h1 className="text-xl font-medium">{plant.name}</h1>
                          {plant.salePrice !== null ? (
                            <p className="flex items-center gap-x-2 text-xl">
                              <span>${plant.salePrice}</span>
                              <span className="line-through opacity-60">
                                ${plant.price}
                              </span>
                            </p>
                          ) : (
                            <p className="text-xl">${plant.price}</p>
                          )}
                        </div>

                        <div className="flex flex-row justify-between">
                          <div className="flex flex-row items-center gap-x-4">
                            <button
                              onClick={() =>
                                updateQuantity(plant.id, plant.quantity - 1)
                              }
                              className="bg-button/10 rounded-md px-2 py-2"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span>{plant.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(plant.id, plant.quantity + 1)
                              }
                              className="bg-button/10 rounded-md px-2 py-2"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button onClick={() => removeFromCart(plant.id)}>
                            <Trash2 className="size-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <SheetFooter>
          <div className="border-accent/20 mt-4 mb-8 w-full border-t">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-3xl">${getCartTotal().toFixed(2)}</span>
            </div>
            <button
              className="border-button bg-button hover:border-hover hover:bg-hover disabled:hover:border-button disabled:hover:bg-button mt-4 w-full rounded-md border-2 px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] md:py-2 md:text-base"
              onClick={handleCheckout}
              disabled={cart.length > 0 ? false : true}
            >
              Checkout
            </button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
