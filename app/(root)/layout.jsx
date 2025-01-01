import React from "react";
import Header from "@/components/header/Page";
import Footer from "@/components/footer/page";
import { CartProvider } from "@/context/CartProvider";
import { Toaster } from "sonner";

export default function Layout({ children }) {
  return (
    <CartProvider>
      <Header />
      {children}
      <Footer />
      <Toaster />
    </CartProvider>
  );
}
