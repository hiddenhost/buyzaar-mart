import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Grocery Retail Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Partner with The Buyzaar Mart for an organised grocery retail franchise in Varanasi. Structured systems, POS billing, and brand-backed retail support.",
  keywords: [
    "organised grocery retail franchise Varanasi",
    "The Buyzaar Mart Varanasi",
    "organized retail business UP",
    "structured grocery franchise",
    "branded grocery store Varanasi",
    "modern retail franchise opportunity",
    "POS billing organised retail",
    "grocery franchise systemized model",
    "retail franchise investment Varanasi",
    "kirana to organised retail",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/organised-grocery-retail-franchise-varanasi",
  },
  openGraph: {
    title: "Organised Grocery Retail Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Partner with The Buyzaar Mart for an organised grocery retail franchise in Varanasi. Structured systems, POS billing, and brand-backed retail support.",
    url: "https://www.thebuyzaarmart.com/varanasi/organised-grocery-retail-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Grocery Retail Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Grocery Retail Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Partner with The Buyzaar Mart for an organised grocery retail franchise in Varanasi. Structured systems, POS billing, and brand-backed retail support.",
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