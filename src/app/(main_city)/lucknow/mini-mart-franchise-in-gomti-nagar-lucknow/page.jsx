import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mini Mart Franchise in Gomti Nagar Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
  description:
    "Looking to open a Mini Mart franchise in Gomti Nagar, Lucknow? Partner with The Buyzaar Mart under the FOCM model. Full brand support, POS system, training & supply chain included. Apply today.",
  keywords: [
    "mini mart franchise in Gomti Nagar Lucknow",
    "mini mart franchise Gomti Nagar Lucknow",
    "Gomti Nagar mini mart franchise",
    "The Buyzaar Mart Gomti Nagar Lucknow",
    "The Buyzaar Mart franchise",
    "small grocery franchise in Gomti Nagar Lucknow",
    "grocery store franchise in Gomti Nagar Lucknow",
    "mini supermarket franchise Gomti Nagar Lucknow",
    "neighborhood mart franchise Gomti Nagar Lucknow",
    "convenience store franchise Gomti Nagar Lucknow",
    "daily needs mart franchise Gomti Nagar Lucknow",
    "organized retail franchise Gomti Nagar Lucknow",
    "retail franchise opportunity Gomti Nagar Lucknow",
    "low investment mini mart franchise Gomti Nagar Lucknow",
    "affordable grocery franchise Gomti Nagar Lucknow",
    "profitable mini mart franchise Gomti Nagar Lucknow",
    "best mini mart franchise Gomti Nagar Lucknow",
    "top grocery franchise Gomti Nagar Lucknow",
    "franchise grocery store Gomti Nagar Lucknow",
    "daily essentials franchise Gomti Nagar Lucknow",
    "mini mart investment Gomti Nagar Lucknow",
    "mini mart franchise with support",
    "mini mart franchise with training",
    "mini mart franchise with inventory support",
    "FOCO franchise model",
    "FOCM franchise model",
    "organized grocery retail Gomti Nagar Lucknow",
    "franchise mart Gomti Nagar Lucknow",
    "mini grocery store franchise Gomti Nagar Lucknow",
    "branded mini mart Gomti Nagar Lucknow",
    "The Buyzaar Mart mini mart franchise"
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/mini-mart-franchise-in-gomti-nagar-lucknow",
  },
  openGraph: {
    title:
      "Mini Mart Franchise in Gomti Nagar Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Looking to open a Mini Mart franchise in Gomti Nagar, Lucknow? Partner with The Buyzaar Mart under the FOCM model. Full brand support, POS system, training & supply chain included. Apply today.",
    url: "https://www.thebuyzaarmart.com/lucknow/mini-mart-franchise-in-gomti-nagar-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Mart Franchise in Gomti Nagar Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mini Mart Franchise in Gomti Nagar Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Looking to open a Mini Mart franchise in Gomti Nagar, Lucknow? Partner with The Buyzaar Mart under the FOCM model. Full brand support, POS system, training & supply chain included. Apply today.",
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