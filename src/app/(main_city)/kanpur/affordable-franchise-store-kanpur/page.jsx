import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Affordable Franchise Store Kanpur | The Buyzaar Mart",
  description:
    "Looking for an affordable franchise store in Kanpur? Join The Buyzaar Mart and start your own supermarket business from just ₹15 Lakh with full setup, supply chain, POS & ongoing support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/local-mart-franchise-kanpur",
  },
  openGraph: {
    title: "Affordable Franchise Store Kanpur | The Buyzaar Mart",
    description:
      "Looking for an affordable franchise store in Kanpur? Join The Buyzaar Mart and start your own supermarket business from just ₹15 Lakh with full setup, supply chain, POS & ongoing support. Apply now!",
    url: "https://www.thebuyzaarmart.com/kanpur/local-mart-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Affordable Franchise Store Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Franchise Store Kanpur | The Buyzaar Mart",
    description:
      "Looking for an affordable franchise store in Kanpur? Join The Buyzaar Mart and start your own supermarket business from just ₹15 Lakh with full setup, supply chain, POS & ongoing support. Apply now!",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Services />
    </>
  );
}




"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-[400px] md:w-full h-[300px] sm:h-[400px] md:h-[570px] overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dt8wjpf9e/image/upload/q_auto/f_auto/v1776671502/buyzaar-mart_ti8h8h.png"
            alt="how to open retail store franchise Kanpur"
            className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/50" />
      </div>
      
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-5xl mt-18">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-medium tracking-wide capitalize mb-4 md:mb-6 leading-tight">
         How to Open Retail Store Franchise Kanpur
            </h1>
        </div>
      </div>
    </section>
  );
}