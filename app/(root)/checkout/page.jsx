"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartProvider";
import { getImageUrl } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Checkout() {
  const { cart, getCartTotal } = useCart();
  const [isRadioActive, setIsRadioActive] = useState("credit");

  const handleActiveRadio = (radio) => {
    setIsRadioActive(radio);
  };

  // const apiKey = process.env.COUNTRY_STATE_CITY_API;

  return (
    <div className="container mx-auto max-w-[1280px] px-8 pb-16 pt-20 md:px-16 md:pb-[5rem] md:pt-[7rem] lg:pb-[7rem] lg:pt-[11rem]">
      <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
        <div className="flex w-full flex-col gap-y-16 sm:px-12 md:px-16 lg:w-[60%] lg:px-0">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm font-medium md:text-base lg:text-lg xl:text-xl">
              Delivery Information
            </h1>
            <div className="grid gap-4 rounded-lg bg-button/10 p-8 md:grid-cols-2">
              <div className="flex flex-col gap-y-1">
                <label
                  className="text-sm md:text-base lg:text-lg xl:text-xl"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label
                  className="text-sm md:text-base lg:text-lg xl:text-xl"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                  type="text"
                  id="email"
                  inputMode="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label
                  className="text-sm md:text-base lg:text-lg xl:text-xl"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                  type="text"
                  id="phone"
                  inputMode="tel"
                  required
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label
                  className="text-sm md:text-base lg:text-lg xl:text-xl"
                  htmlFor="country"
                >
                  Country
                </label>
                <Select>
                  <SelectTrigger className="h-[50px] w-full border-2 border-white/[0.05] bg-white/[0.02] text-sm placeholder:text-white/38 focus:border-button focus:ring-0 focus:ring-offset-0 md:text-base lg:text-lg xl:text-xl">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent className="border-accent/10 bg-primary text-white/87 focus:ring-0">
                    <SelectGroup>
                      <SelectItem
                        className="text-sm focus:bg-accent/10 focus:text-white/100 md:text-base lg:text-lg xl:text-xl"
                        value="apple"
                      >
                        Apple
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-y-1 md:col-span-2">
                <label
                  className="text-sm md:text-base lg:text-lg xl:text-xl"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                  type="text"
                  id="address"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label
                  className="text-sm md:text-base lg:text-lg xl:text-xl"
                  htmlFor="address"
                >
                  State
                </label>
                <input
                  className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                  type="text"
                  id="search"
                  name="search"
                  inputMode="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label
                  className="text-sm md:text-base lg:text-lg xl:text-xl"
                  htmlFor="address"
                >
                  ZIP Code
                </label>
                <input
                  className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                  type="text"
                  id="search"
                  name="search"
                  inputMode="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm font-medium md:text-base lg:text-lg xl:text-xl">
              Payment
            </h1>
            <div className="rounded-lg bg-button/10 p-8">
              <div className="flex w-full flex-col gap-y-4">
                <label className="text-sm md:text-base lg:text-lg xl:text-xl">
                  Select payment method
                </label>
                <RadioGroup
                  defaultValue="credit"
                  className="flex flex-col gap-y-8"
                >
                  <div>
                    <div className="mb-4 flex items-center space-x-2">
                      <RadioGroupItem
                        id="credit"
                        value="credit"
                        onClick={() => handleActiveRadio("credit")}
                        className={`border-0 bg-primary focus:bg-primary ${isRadioActive === "credit" ? "border border-button" : ""}`}
                      />
                      <label
                        htmlFor="credit"
                        className="text-sm md:text-base lg:text-lg xl:text-xl"
                      >
                        Credit Card
                      </label>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-8">
                      <div className="flex flex-col gap-y-1 md:col-span-2">
                        <label
                          className="text-sm md:text-base lg:text-lg xl:text-xl"
                          htmlFor="card"
                        >
                          Card Number
                        </label>
                        <input
                          className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                          type="text"
                          id="card"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-y-1">
                        <label
                          className="text-sm md:text-base lg:text-lg xl:text-xl"
                          htmlFor="expiryDate"
                        >
                          Expiry Date
                        </label>
                        <input
                          className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                          type="text"
                          id="expiryDate"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <label
                          className="text-sm md:text-base lg:text-lg xl:text-xl"
                          htmlFor="cvv"
                        >
                          CVV
                        </label>
                        <input
                          className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                          type="text"
                          id="cvv"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id="paypal"
                      value="paypal"
                      onClick={() => handleActiveRadio("paypal")}
                      className={`border-0 bg-primary focus:bg-primary ${isRadioActive === "paypal" ? "border border-button" : ""}`}
                    />
                    <label
                      htmlFor="paypal"
                      className="text-sm md:text-base lg:text-lg xl:text-xl"
                    >
                      Paypal
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id="cashOnDelivery"
                      value="CashOnDelivery"
                      onClick={() => handleActiveRadio("CashOnDelivery")}
                      className={`border-0 bg-primary focus:bg-primary ${isRadioActive === "CashOnDelivery" ? "border border-button" : ""}`}
                    />
                    <label
                      htmlFor="cashOnDelivery"
                      className="text-sm md:text-base lg:text-lg xl:text-xl"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-2 sm:px-10 md:px-16 lg:w-[40%] lg:px-0">
          <h1 className="text-sm font-medium md:text-base lg:text-lg xl:text-xl">
            Order Summary
          </h1>
          <div className="rounded-lg bg-button/10 p-8">
            <div className="w-full space-y-12">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex gap-x-2">
                    <Image
                      src={getImageUrl(item.image)}
                      height={100}
                      width={100}
                      alt={item.name}
                      className="size-16"
                    />
                    <div className="flex flex-col text-sm md:text-base lg:text-lg xl:text-xl">
                      <span>{item.name}</span>
                      <span>x{item.quantity}</span>
                    </div>
                  </div>
                  <span className="text-sm md:text-base lg:text-lg xl:text-xl">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="flex flex-col gap-y-4 border-t-2 border-dashed border-white/40 pt-4">
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="discount"
                    className="text-sm md:text-base lg:text-lg xl:text-xl"
                  >
                    Discount Code
                  </label>
                  <div className="flex gap-x-2">
                    <input
                      className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                      type="text"
                      id="discount"
                      required
                    />
                    <button className="rounded-md border-2 border-button bg-button px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] hover:border-hover hover:bg-hover md:py-2 md:text-base">
                      Apply
                    </button>
                  </div>
                </div>

                <p className="text-sm text-white/38 md:text-base lg:text-lg xl:text-xl">
                  New Customer? <span className="underline">Sign up</span> to
                  get better offer
                </p>
              </div>

              <div className="border-t-2 border-dashed border-white/40 pt-4">
                <div className="flex justify-between text-sm md:text-base lg:text-lg xl:text-xl">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base lg:text-lg xl:text-xl">
                  <span>Shipping Fee</span>
                  <span>$0</span>
                </div>
                <div className="mb-4 mt-4 flex justify-between text-sm font-bold md:text-base lg:text-lg xl:text-xl">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <button className="w-full rounded-md border-2 border-button bg-button px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] hover:border-hover hover:bg-hover md:py-2 md:text-base">
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
