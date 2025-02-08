"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartProvider";
import { getImageUrl } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useFormData } from "@/context/FormDataProvider";

export default function Checkout() {
  const { cart, getCartTotal, confirmOrder } = useCart();
  const { setFormData } = useFormData();
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [discountedTotal, setDiscountedTotal] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState("");
  const [loadingStates, setLoadingStates] = useState({
    countries: false,
    states: false,
    cities: false,
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const router = useRouter();

  const updateLoadingState = useCallback(
    (key, isLoading) => {
      setLoadingStates((prev) => ({ ...prev, [key]: isLoading }));
    },
    [setLoadingStates],
  );

  const getCheckoutSchema = (paymentMethod) => {
    const baseSchema = {
      fullName: z.string().min(3, "Full name must be at least 3 characters"),
      email: z.string().email("Please enter a valid email address"),
      phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^\d+$/, "Phone number must contain only digits"),
      country: z
        .string()
        .min(2, "Country must be at least 2 characters")
        .max(50, "Country must be less than 50 characters")
        .refine(
          (value) =>
            countries.some(
              (country) => country.name.toLowerCase() === value.toLowerCase(),
            ),
          { message: "Please select a valid country from the list" },
        ),
      state: z
        .string()
        .min(2, "State must be at least 2 characters")
        .max(50, "State must be less than 50 characters")
        .refine(
          (value) =>
            states.some(
              (state) => state.name.toLowerCase() === value.toLowerCase(),
            ),
          { message: "Please select a valid state from the list" },
        ),
      city: z
        .string()
        .min(2, "City must be at least 2 characters")
        .max(50, "City must be less than 50 characters")
        .refine(
          (value) =>
            cities.some(
              (city) => city.name.toLowerCase() === value.toLowerCase(),
            ),
          { message: "Please select a valid state from the list" },
        ),
      zipCode: z
        .string()
        .regex(
          /^(?=[A-Za-z0-9 -]{2,11}$)[A-Za-z0-9]+(?:[ -][A-Za-z0-9]+)?$/,
          "Enter a valid ZIP code",
        ),
      street: z
        .string()
        .min(5, "Address must be at least 5 characters")
        .max(100, "Address must be less than 100 characters"),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      discount: z.string(),
      shippingFee: z.string(),
    };

    if (paymentMethod === "credit") {
      return z.object({
        ...baseSchema,
        cardNumber: z
          .string()
          .regex(
            /(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)/,
            "Card number must be 16 digits",
          ),
        expiryDate: z
          .string()
          .regex(
            /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
            "Expiry date must be in MM/YY format",
          ),
        cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
      });
    }

    return z.object(baseSchema);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(getCheckoutSchema(paymentMethods)),
  });

  const shippingFee = 30;
  const subtotals = getCartTotal();
  const total = subtotals + shippingFee;

  const validateDiscount = (code) => {
    const checkDiscount = {
      SAVE5: 0.05,
      SAVE10: 0.1,
    };

    return checkDiscount[code] || null;
  };

  const handlePaymentMethod = useCallback(
    (method) => {
      setValue("paymentMethod", method);
      setPaymentMethods(method);
      const paymentStatus =
        method === "credit" || method === "paypal"
          ? "Paid"
          : "Cash on Delivery";
      setValue("paymentStatus", paymentStatus);
    },
    [setValue, setPaymentMethods],
  );

  useEffect(() => {
    handlePaymentMethod("credit");
  }, [handlePaymentMethod]);

  const handleApplyDiscount = (subtotals, discountCode) => {
    if (!subtotals) return;

    const discountValue = validateDiscount(discountCode);
    if (discountValue !== null) {
      const discountAmount = subtotals * discountValue;
      const discountedTotal = subtotals - discountAmount;
      const totalShippingFee = discountedTotal + shippingFee;
      setDiscount(discountAmount.toFixed(2));
      setValue("discount", discountAmount.toFixed(2));
      setDiscountedTotal(totalShippingFee);
    }
  };

  const apiKey = process.env.NEXT_PUBLIC_COUNTRY_STATE_CITY_API;

  const fetchCountries = useCallback(async () => {
    updateLoadingState("countries", true);
    try {
      const response = await fetch(
        "https://api.countrystatecity.in/v1/countries",
        {
          headers: {
            "X-CSCAPI-KEY": apiKey,
          },
        },
      );

      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      updateLoadingState("countries", false);
    }
  }, [apiKey, updateLoadingState, setCountries]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const fetchStates = async (ciso) => {
    if (!ciso) return;

    updateLoadingState("states", true);
    try {
      const response = await fetch(
        `https://api.countrystatecity.in/v1/countries/${ciso}/states`,
        {
          headers: {
            "X-CSCAPI-KEY": apiKey,
          },
        },
      );
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    } finally {
      updateLoadingState("states", false);
    }
  };

  const fetchCities = async (ciso, siso) => {
    if (!ciso || !siso) return;

    updateLoadingState("cities", true);
    try {
      const response = await fetch(
        `https://api.countrystatecity.in/v1/countries/${ciso}/states/${siso}/cities`,
        {
          headers: {
            "X-CSCAPI-KEY": apiKey,
          },
        },
      );
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      updateLoadingState("cities", false);
    }
  };

  const handleCountryChange = (e) => {
    const selectedValue = Array.from(e.target.list.options).find(
      (country) => country.value.toLowerCase() === e.target.value.toLowerCase(),
    );
    if (selectedValue) {
      const iso2 = selectedValue.getAttribute("data-iso2");
      setSelectedCountry(iso2);
      fetchStates(iso2);
    }
  };

  const handleStateChange = (e) => {
    const selectedValue = Array.from(e.target.list.options).find(
      (state) => state.value.toLowerCase() === e.target.value.toLowerCase(),
    );
    if (selectedValue) {
      const iso2 = selectedValue.getAttribute("data-iso2");
      fetchCities(selectedCountry, iso2);
    }
  };

  const onSubmit = (userData) => {
    setFormData(userData);
    confirmOrder();

    router.push("/thank-you?");
  };

  return (
    <div className="container mx-auto max-w-[1280px] px-8 pb-16 pt-20 md:px-16 md:pb-[5rem] md:pt-[7rem] lg:pb-[7rem] lg:pt-[11rem]">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col gap-y-16 sm:px-12 md:px-16 lg:w-[60%] lg:px-0">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                Delivery Information
              </h1>

              <div className="grid grid-cols-1 gap-4 rounded-lg bg-button/10 p-8 md:grid-cols-2">
                <div className="flex flex-col gap-y-1 md:col-span-2">
                  <label
                    className="text-sm md:text-base lg:text-lg xl:text-xl"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                    type="text"
                    id="fullName"
                    name="fullName"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    className="text-sm md:text-base lg:text-lg xl:text-xl"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                    type="text"
                    id="email"
                    name="email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    className="text-sm md:text-base lg:text-lg xl:text-xl"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                    type="text"
                    id="phone"
                    name="phone"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    className="text-sm md:text-base lg:text-lg xl:text-xl"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    {...register("country")}
                    className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                    type="text"
                    id="country"
                    list="countries"
                    name="country"
                    placeholder={loadingStates.countries ? "Loading..." : ""}
                    onChange={(e) => handleCountryChange(e)}
                  />
                  <datalist id="countries">
                    {countries.map((country) => (
                      <option
                        key={country.iso2}
                        value={country.name}
                        data-iso2={country.iso2}
                        className="text-sm focus:bg-accent/10 focus:text-white/100 md:text-base lg:text-lg xl:text-xl"
                      />
                    ))}
                  </datalist>
                  {errors.country && (
                    <p className="text-sm text-red-500">
                      {errors.country.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-y-1">
                  <label
                    className="text-sm md:text-base lg:text-lg xl:text-xl"
                    htmlFor="state"
                  >
                    State/Province
                  </label>
                  <input
                    {...register("state")}
                    className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                    type="text"
                    id="state"
                    list="states"
                    name="state"
                    placeholder={loadingStates.states ? "Loading..." : ""}
                    onChange={(e) => handleStateChange(e)}
                  />
                  <datalist id="states">
                    {states.map((state) => (
                      <option
                        key={state.iso2}
                        data-iso2={state.iso2}
                        value={state.name}
                      />
                    ))}
                  </datalist>
                  {errors.state && (
                    <p className="text-sm text-red-500">
                      {errors.state.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-y-1">
                  <label
                    className="text-sm md:text-base lg:text-lg xl:text-xl"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    {...register("city")}
                    className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                    type="text"
                    id="city"
                    list="cities"
                    name="city"
                    placeholder={loadingStates.cities ? "Loading..." : ""}
                  />
                  <datalist id="cities">
                    {cities.map((city) => (
                      <option key={city.name} value={city.name} />
                    ))}
                  </datalist>
                  {errors.city && (
                    <p className="text-sm text-red-500">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-y-1">
                  <label
                    className="text-sm md:text-base lg:text-lg xl:text-xl"
                    htmlFor="zipCode"
                  >
                    ZIP Code
                  </label>
                  <input
                    {...register("zipCode")}
                    className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                    type="text"
                    id="zipCode"
                    name="zipCode"
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-red-500">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1 md:col-span-2">
                  <label
                    className="text-sm md:text-base lg:text-lg xl:text-xl"
                    htmlFor="street"
                  >
                    Street/Building/House No.
                  </label>
                  <input
                    {...register("street")}
                    className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                    type="text"
                    id="street"
                    name="street"
                  />
                  {errors.street && (
                    <p className="text-sm text-red-500">
                      {errors.street.message}
                    </p>
                  )}
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
                    defaultValue={"credit"}
                    onValueChange={handlePaymentMethod}
                    name="paymentMethod"
                    className="flex flex-col gap-y-8"
                  >
                    <div>
                      <div className="mb-4 flex items-center space-x-2">
                        <RadioGroupItem
                          {...register("paymentMethod")}
                          id="credit"
                          value="credit"
                          name="paymentMethod"
                          className={`border-0 bg-primary focus:bg-primary ${paymentMethods === "credit" ? "border border-button" : ""}`}
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
                            {...register("cardNumber")}
                            className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                            type="text"
                            id="card"
                          />
                          {errors.cardNumber && (
                            <p className="text-sm text-red-500">
                              {errors.cardNumber.message}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col gap-y-1">
                          <label
                            className="text-sm md:text-base lg:text-lg xl:text-xl"
                            htmlFor="expiryDate"
                          >
                            Expiry Date
                          </label>
                          <input
                            {...register("expiryDate")}
                            className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                            type="text"
                            id="expiryDate"
                          />
                          {errors.expiryDate && (
                            <p className="text-sm text-red-500">
                              {errors.expiryDate.message}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <label
                            className="text-sm md:text-base lg:text-lg xl:text-xl"
                            htmlFor="cvv"
                          >
                            CVV
                          </label>
                          <input
                            {...register("cvv")}
                            className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                            type="text"
                            id="cvv"
                          />
                          {errors.cvv && (
                            <p className="text-sm text-red-500">
                              {errors.cvv.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        {...register("paymentMethod")}
                        id="paypal"
                        value="paypal"
                        name="paymentMethod"
                        className={`border-0 bg-primary focus:bg-primary ${paymentMethods === "paypal" ? "border border-button" : ""}`}
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
                        {...register("paymentMethod")}
                        id="cash"
                        value="cash"
                        name="paymentMethod"
                        className={`border-0 bg-primary focus:bg-primary ${paymentMethods === "cash" ? "border border-button" : ""}`}
                      />
                      <label
                        htmlFor="cash"
                        className="text-sm md:text-base lg:text-lg xl:text-xl"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </RadioGroup>
                  <input type="hidden" {...register("paymentStatus")} />
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
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex gap-x-4">
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
                      <div>
                        {item.salePrice !== null ? (
                          <p className="text-xl">
                            ${(item.salePrice * item.quantity).toFixed(2)}
                          </p>
                        ) : (
                          <p className="text-xl">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <h1 className="text-sm md:text-base lg:text-lg xl:text-xl">
                    Your cart is empty!
                  </h1>
                )}

                <div className="flex flex-col gap-y-4 border-t-2 border-dashed border-white/40 pt-4">
                  <div className="flex flex-col gap-y-1">
                    <label
                      htmlFor="discount"
                      className="flex items-center justify-between text-sm md:text-base lg:text-lg xl:text-xl"
                    >
                      <span>Discount Code</span>
                      <span className="text-sm opacity-60">
                        SAVE5 or SAVE10
                      </span>
                    </label>
                    <div className="flex gap-x-2">
                      <input
                        className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                        type="text"
                        id="discount"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          handleApplyDiscount(subtotals, discountCode);
                        }}
                        disabled={cart.length > 0 ? false : true}
                        className="rounded-md border-2 border-button bg-button px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] hover:border-hover hover:bg-hover disabled:hover:border-button disabled:hover:bg-button md:py-2 md:text-base"
                      >
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
                  <div className="mb-2 flex justify-between text-sm md:text-base lg:text-lg xl:text-xl">
                    <span>Subtotal</span>
                    <span>${subtotals}</span>
                  </div>
                  <div className="mb-2 flex justify-between text-sm md:text-base lg:text-lg xl:text-xl">
                    <span>Shipping Fee (Standard)</span>
                    <input
                      type="hidden"
                      value={shippingFee}
                      {...register("shippingFee")}
                    />
                    <span>${shippingFee}</span>
                  </div>
                  <div className="mb-2 flex justify-between text-sm md:text-base lg:text-lg xl:text-xl">
                    <span>Discount</span>
                    <input
                      type="hidden"
                      name="discount"
                      {...register("discount")}
                    />
                    <span>${discount}</span>
                  </div>
                  <div className="mb-4 mt-6 flex justify-between text-sm font-bold md:text-base lg:text-lg xl:text-xl">
                    <span>Total</span>
                    <span>
                      ${discountedTotal !== null ? discountedTotal : total}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md border-2 border-button bg-button px-3 py-1 text-[0.75rem] font-bold text-white/[0.87] hover:border-hover hover:bg-hover disabled:hover:border-button disabled:hover:bg-button md:py-2 md:text-base"
                    disabled={cart.length > 0 ? false : true}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
