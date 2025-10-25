"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartProvider";
import { useFormData } from "@/context/FormDataProvider";
import Link from "next/link";

export default function ThankYou() {
  const { formData } = useFormData();
  const { confirmedOrders, getOrderTotal } = useCart();

  if (!formData) {
    return (
      <div className="container mx-auto flex h-160 w-full flex-col items-center justify-center gap-y-4 px-6">
        <h1 className="font-morangaBlack text-[1.6rem] lg:text-[2.488rem] xl:text-[2.986rem]">
          No Order Data found.
        </h1>
        <p className="text-center text-base lg:text-xl">
          Please complete the checkout process.
        </p>
        <Link href="/">
          <button className="group border-button bg-button hover:border-hover hover:bg-hover flex h-11 items-center gap-x-4 rounded-md border-2 px-5 text-sm font-bold text-white/[0.87] uppercase xl:text-base">
            Return to Home
          </button>
        </Link>
      </div>
    );
  }
  const discount = Number(formData.discount);
  const shippingFee = Number(formData.shippingFee);

  const subtotals = getOrderTotal();
  const totalAfterDiscount = subtotals - discount;
  const total = totalAfterDiscount + shippingFee;

  return (
    <div className="container mx-auto flex max-w-7xl flex-col gap-x-8 px-8 pt-20 pb-16 md:px-16 md:pt-28 md:pb-20 lg:flex-row lg:pt-44 lg:pb-28">
      <div className="lg:w-[60%]">
        <h1 className="font-moranga-black text-accent text-sm md:text-base lg:text-lg xl:text-xl">
          Thank you!
        </h1>
        <p className="text-xl font-black opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
          Your plant is on the way!
        </p>
        <p className="mb-16 text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
          We&apos;ve received your order and are now processing it.
        </p>
        <p className="flex flex-col text-sm md:text-base lg:text-lg xl:text-xl">
          <span className="mb-2">Order Number</span>
          <span className="opacity-60">123sdfdfq234sdgqawh</span>
        </p>

        <div className="mx-auto mt-16 mb-16 flex w-full max-w-184 flex-wrap justify-center gap-x-4 gap-y-4">
          {confirmedOrders.map((item) => (
            <div
              key={item.id}
              className="shadow-itemCard relative flex h-56 w-36 flex-col items-center justify-center gap-y-2 rounded-2xl border-2 border-white/5 bg-white/2 md:h-72 md:w-48"
            >
              <Image
                src={item.image}
                height={100}
                width={100}
                alt={item.name}
                className="size-24 md:size-32"
              />
              <div className="flex w-full flex-col gap-y-1 px-4">
                <div className="flex flex-col items-center text-sm md:text-base lg:text-lg xl:text-xl">
                  <span>{item.name}</span>

                  <span className="opacity-60">x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
              <span className="text-sm md:text-base lg:text-lg xl:text-xl"></span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-button/10 rounded-xl p-14 lg:w-[40%]">
        <div>
          <h2 className="mb-4 text-sm md:text-base lg:text-lg xl:text-xl">
            Shipping Address
          </h2>
          <div className="mb-4 text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
            <p>{formData.fullName}</p>
            <p>{formData.street}</p>
            <p>{`${formData.city}, ${formData.state}, ${formData.country}, ${formData.zipCode}`}</p>
          </div>
          <hr className="border-button rounded-full" />
          <div className="py-4 text-sm md:text-base lg:text-lg xl:text-xl">
            <h3 className="mb-4">Payment</h3>
            <div className="flex items-center justify-between opacity-60">
              <h3>Method</h3>
              <p className="text-md uppercase">{formData.paymentMethod}</p>
            </div>
            <div className="flex items-center justify-between opacity-60">
              <h4>Status</h4>
              <p className="text-md uppercase">{formData.paymentStatus}</p>
            </div>
          </div>

          <hr className="border-button mb-4 rounded-full" />
          <div className="flex flex-col gap-y-2 text-sm md:text-base lg:text-lg xl:text-xl">
            <p className="inline-flex justify-between">
              <span>Subtotal</span>
              <span>${subtotals}</span>
            </p>
            <p className="inline-flex justify-between">
              <span>Shipping Fee(Standard)</span>
              <span>${shippingFee}</span>
            </p>
            <p className="inline-flex justify-between">
              <span>Discount</span>
              <span>${discount}</span>
            </p>
            <p className="border-button mt-2 inline-flex items-center justify-between border-t pt-4">
              <span>Total</span>
              <span className="text-4xl font-bold">${total}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
