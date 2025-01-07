import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartProvider";
import { getImageUrl } from "@/lib/utils";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet/page";

export default function Cart() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <Image
            className="size-6 opacity-60 sm:size-7 lg:size-8"
            src="/assets/Cart.svg"
            alt="cart"
            width={30}
            height={30}
          />

          {cart.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-button text-sm text-white before:absolute before:-z-10 before:size-6 before:animate-ping before:rounded-full before:bg-button/80">
              {cart.length}
            </span>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between gap-y-4 overflow-y-auto border-l border-accent/20 bg-primary p-6">
        <SheetHeader>
          <SheetTitle className="text-white">Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="w-full">
          <div className="flex h-full flex-col">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
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
                        src={getImageUrl(plant.image)}
                        alt={plant.image}
                        width={100}
                        height={100}
                      />
                      <div className="flex w-full flex-col gap-y-4">
                        <div className="flex flex-col gap-y-1">
                          <h1 className="text-xl font-medium">{plant.name}</h1>
                          <p className="text-xl">${plant.price}</p>
                        </div>

                        <div className="flex flex-row justify-between">
                          <div className="flex flex-row items-center gap-x-4">
                            <button
                              onClick={() =>
                                updateQuantity(plant.id, plant.quantity - 1)
                              }
                              className="rounded-md bg-button/10 px-2 py-2"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span>{plant.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(plant.id, plant.quantity + 1)
                              }
                              className="rounded-md bg-button/10 px-2 py-2"
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
          <div className="mb-8 mt-4 w-full border-t border-accent/20">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-3xl">${getCartTotal().toFixed(2)}</span>
            </div>
            <button
              className="mt-4 w-full rounded-md border-2 border-button bg-button px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] hover:border-hover hover:bg-hover md:py-2 md:text-base"
              onClick={() => router.push("/checkout")}
            >
              Checkout
            </button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
