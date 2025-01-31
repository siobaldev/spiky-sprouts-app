"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartProvider";
import { getImageUrl } from "@/lib/utils";
import { useFormData } from "@/context/FormDataProvider";

export default function ThankYou() {
  const { formData } = useFormData();
  const { confirmedOrders } = useCart();

  const discount = 10;
  const shippingFee = 50;

  const subtotals = confirmedOrders.map((item) => item.price * item.quantity);
  const sumOfSubtotals = subtotals.reduce(
    (total, subtotal) => total + subtotal,
    0,
  );
  const totalAfterDiscount = sumOfSubtotals - discount;
  const total = totalAfterDiscount + shippingFee;

  return (
    <div className="container mx-auto flex max-w-[1280px] flex-col gap-x-8 px-8 pb-16 pt-20 md:px-16 md:pb-[5rem] md:pt-[7rem] lg:flex-row lg:pb-[7rem] lg:pt-[11rem]">
      <div className="lg:w-[60%]">
        <h1 className="font-morangaBlack text-sm text-accent md:text-base lg:text-lg xl:text-xl">
          Thank you!
        </h1>
        <p className="text-xl font-black opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
          Your plant is on the way!
        </p>
        <p className="mb-16 text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
          We've received your order and are now processing it.
        </p>
        <p className="flex flex-col text-sm md:text-base lg:text-lg xl:text-xl">
          <span className="mb-2">Order Number</span>
          <span className="opacity-60">123sdfdfq234sdgqawh</span>
        </p>

        <div className="mx-auto mb-16 mt-16 flex w-full max-w-[46rem] flex-wrap justify-center gap-x-4 gap-y-4">
          {confirmedOrders.map((item) => (
            <div
              key={item.id}
              className="relative flex h-[14rem] w-[9rem] flex-col items-center justify-center gap-y-2 rounded-2xl border-2 border-white/[0.05] bg-white/[0.02] shadow-itemCard md:h-[18rem] md:w-[12rem]"
            >
              <Image
                src={getImageUrl(item.image)}
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

      <div className="rounded-xl bg-button/10 p-14 lg:w-[40%]">
        <div>
          <h2 className="mb-4 text-sm md:text-base lg:text-lg xl:text-xl">
            Shipping Address
          </h2>
          <div className="mb-4 text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
            <p>{formData.fullName}</p>
            <p>{formData.street}</p>
            <p>{`${formData.city}, ${formData.state}, ${formData.country}, ${formData.zipCode}`}</p>
          </div>
          <hr className="rounded-full border-button" />
          <div className="py-4 text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
            <div className="flex items-center justify-between">
              <h3>Payment Method</h3>
              <p className="text-md uppercase">{formData.paymentMethod}</p>
            </div>
            <div className="flex items-center justify-between">
              <h4>Payment Status</h4>
              <p className="text-md uppercase">{formData.paymentStatus}</p>
            </div>
          </div>

          <hr className="mb-4 rounded-full border-button" />
          <div className="flex flex-col gap-y-2 text-sm md:text-base lg:text-lg xl:text-xl">
            <p className="inline-flex justify-between">
              <span>Subtotal</span>
              <span>${sumOfSubtotals}</span>
            </p>
            <p className="inline-flex justify-between">
              <span>Discount</span>
              <span>-${discount}</span>
            </p>
            <p className="inline-flex justify-between">
              <span>Shipping Fee</span>
              <span>${shippingFee}</span>
            </p>
            <p className="mt-2 inline-flex items-center justify-between border-t border-button pt-4">
              <span>Total</span>
              <span className="text-4xl font-bold">${total}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
