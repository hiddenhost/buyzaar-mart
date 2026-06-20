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
    "mini mart franchise in Gomti Nagar",
    "Gomti Nagar franchise opportunity",
    "Lucknow mini mart franchise",
    "The Buyzaar Mart Gomti Nagar",
    "The Buyzaar Mart franchise",
    "FOCM franchise model",
    "retail franchise in Gomti Nagar",
    "daily needs store franchise in Lucknow",
    "grocery franchise in Gomti Nagar",
    "organized retail franchise in Lucknow",
    "mini supermarket franchise in Lucknow",
    "neighborhood store franchise in Gomti Nagar",
    "start franchise in Gomti Nagar Lucknow",
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