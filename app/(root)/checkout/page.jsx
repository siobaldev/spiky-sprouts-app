"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartProvider";
import { getImageUrl } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { z } from "zod";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const { cart, getCartTotal } = useCart();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [loadingStates, setLoadingStates] = useState({
    countries: false,
    states: false,
    cities: false,
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const router = useRouter();

  const updateLoadingState = (key, isLoading) => {
    setLoadingStates((prev) => ({ ...prev, [key]: isLoading }));
  };

  const handleActiveRadio = (radio) => {
    setPaymentMethod(radio);
  };

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
      zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code"),
      street: z
        .string()
        .min(5, "Address must be at least 5 characters")
        .max(100, "Address must be less than 100 characters"),
    };

    if (paymentMethod === "credit") {
      return z.object({
        ...baseSchema,
        cardNumber: z
          .string()
          .regex(/^\d{16}$/, "Card number must be 16 digits"),
        expiryDate: z
          .string()
          .regex(
            /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
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
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(getCheckoutSchema(paymentMethod)),
  });

  const onSubmit = () => {
    router.push("/thank-you");
  };
  const apiKey = process.env.NEXT_PUBLIC_COUNTRY_STATE_CITY_API;
  const fetchCountries = async () => {
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
  };

  useEffect(() => {
    fetchCountries();
  }, []);

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
      (country) => country.value === e.target.value,
    );
    if (selectedValue) {
      const iso2 = selectedValue.getAttribute("data-iso2");
      console.log(iso2);
      setSelectedCountry(iso2);
      fetchStates(iso2);
    }
  };

  const handleStateChange = (e) => {
    const selectedValue = Array.from(e.target.list.options).find(
      (state) => state.value === e.target.value,
    );
    if (selectedValue) {
      const iso2 = selectedValue.getAttribute("data-iso2");
      console.log(iso2);
      fetchCities(selectedCountry, iso2);
    }
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

              <div className="grid gap-4 rounded-lg bg-button/10 p-8 md:grid-cols-2">
                <div className="col-span-2 flex flex-col gap-y-1">
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
                    placeholder={loadingStates.countries ? "Loading..." : ""}
                    onChange={(e) => handleCountryChange(e)}
                  />

                  {/* // TODO : add thank you page! */}

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
                    defaultValue="credit"
                    className="flex flex-col gap-y-8"
                  >
                    <div>
                      <div className="mb-4 flex items-center space-x-2">
                        <RadioGroupItem
                          id="credit"
                          value="credit"
                          onClick={() => handleActiveRadio("credit")}
                          className={`border-0 bg-primary focus:bg-primary ${paymentMethod === "credit" ? "border border-button" : ""}`}
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
                        id="paypal"
                        value="paypal"
                        onClick={() => handleActiveRadio("paypal")}
                        className={`border-0 bg-primary focus:bg-primary ${paymentMethod === "paypal" ? "border border-button" : ""}`}
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
                        className={`border-0 bg-primary focus:bg-primary ${paymentMethod === "CashOnDelivery" ? "border border-button" : ""}`}
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
                {cart.length > 0 ? (
                  cart.map((item) => (
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
                      className="text-sm md:text-base lg:text-lg xl:text-xl"
                    >
                      Discount Code
                    </label>
                    <div className="flex gap-x-2">
                      <input
                        className="h-[50px] w-full rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                        type="text"
                        id="discount"
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
                  <div className="mb-2 flex justify-between text-sm md:text-base lg:text-lg xl:text-xl">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="mb-2 flex justify-between text-sm md:text-base lg:text-lg xl:text-xl">
                    <span>Shipping Fee</span>
                    <span>$0</span>
                  </div>
                  <div className="mb-2 flex justify-between text-sm md:text-base lg:text-lg xl:text-xl">
                    <span>Discount</span>
                    <span>-$0</span>
                  </div>
                  <div className="mb-4 mt-6 flex justify-between text-sm font-bold md:text-base lg:text-lg xl:text-xl">
                    <span>Total</span>
                    <span>${getCartTotal().toFixed(2)}</span>
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

{
  /* <Controller
name="country"
control={control}
render={({ field }) => (
  <div className="flex flex-col gap-y-1">
    <label
      className="text-sm md:text-base lg:text-lg xl:text-xl"
      htmlFor="country"
    >
      Country
    </label>
    <Select
      onValueChange={(value) => {
        field.onChange(value);
        setSelectedCountry(value);
        fetchStates(value);
      }}
      value={field.value}
    >
      <SelectTrigger className="h-[50px] w-full border-2 border-white/[0.05] bg-white/[0.02] text-sm placeholder:text-white/38 focus:border-button focus:ring-0 focus:ring-offset-0 md:text-base lg:text-lg xl:text-xl">
        <SelectValue
          placeholder={
            isLoading ? "Loading..." : "Select Country"
          }
        />
      </SelectTrigger>
      <SelectContent className="border-accent/10 bg-primary text-white/87 focus:ring-0">
        <SelectGroup>
          {countries.map((country) => (
            <SelectItem
              key={country.iso2}
              className="text-sm focus:bg-accent/10 focus:text-white/100 md:text-base lg:text-lg xl:text-xl"
              value={country.iso2}
            >
              {country.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    {errors.country && (
      <p className="text-sm text-red-500">
        {errors.country.message}
      </p>
    )}
  </div>
)}
/>

 */
}

{
  /* <Controller
name="state"
control={control}
render={({ field }) => (
  <div className="flex flex-col gap-y-1">
    <label
      className="text-sm md:text-base lg:text-lg xl:text-xl"
      htmlFor="state"
    >
      State/Province
    </label>
    <Select
      onValueChange={(value) => {
        field.onChange(value);
        fetchCities(selectedCountry, value);
      }}
      value={field.value}
    >
      <SelectTrigger className="h-[50px] w-full border-2 border-white/[0.05] bg-white/[0.02] text-sm placeholder:text-white/38 focus:border-button focus:ring-0 focus:ring-offset-0 md:text-base lg:text-lg xl:text-xl">
        <SelectValue
          placeholder={
            isLoading ? "Loading..." : "Select state"
          }
        />
      // className="text-sm focus:bg-accent/10 focus:text-white/100 md:text-base lg:text-lg xl:text-xl"
      </SelectTrigger>
      <SelectContent className="border-accent/10 bg-primary text-white/87 focus:ring-0">
        <SelectGroup>
          {states.length > 0 ? (
            states.map((state) => (
              <SelectItem key={state.iso2} value={state.iso2}>
                {state.name}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="0" disabled>
              No states found
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
    {errors.states && (
      <p className="text-sm text-red-500">
        {errors.states.message}
      </p>
    )}
  </div>
)}
/>

<Controller
name="city"
control={control}
render={({ field }) => (
  <div className="flex flex-col gap-y-1">
    <label
      className="text-sm md:text-base lg:text-lg xl:text-xl"
      htmlFor="city"
    >
      City
    </label>
    <Select
      onValueChange={(value) => {
        field.onChange(value);
      }}
      value={field.value}
    >
      <SelectTrigger className="h-[50px] w-full border-2 border-white/[0.05] bg-white/[0.02] text-sm placeholder:text-white/38 focus:border-button focus:ring-0 focus:ring-offset-0 md:text-base lg:text-lg xl:text-xl">
        <SelectValue
          placeholder={
            isLoading ? "Loading..." : "Select state"
          }
        />

      </SelectTrigger>
      <SelectContent className="border-accent/10 bg-primary text-white/87 focus:ring-0">
        <SelectGroup>
          {cities.length > 0 ? (
            cities.map((city) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="0" disabled>
              No cities found
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
    {errors.cities && (
      <p className="text-sm text-red-500">
        {errors.cities.message}
      </p>
    )}
  </div>
)}
/> */
}
