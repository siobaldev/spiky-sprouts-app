import React from "react";
import Header from "@/components/header/Page";
import Footer from "@/components/footer/page";
import { Toaster } from "sonner";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
}
