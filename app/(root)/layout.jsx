import React from "react";
import Header from "@/components/header/Page";
import Footer from "@/components/footer/page";
import { CartProvider } from "@/context/CartProvider";
import { FormDataProvider } from "@/context/FormDataProvider";
import { Toaster } from "sonner";

export default function Layout({ children }) {
  return (
    <CartProvider>
      <FormDataProvider>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </FormDataProvider>
    </CartProvider>
  );
}
