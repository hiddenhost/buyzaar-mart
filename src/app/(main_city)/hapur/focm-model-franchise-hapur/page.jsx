import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Franchise in Hapur | The Buyzaar Mart",
  description:
    "Learn how the FOCM model works for a Buyzaar Mart franchise in Hapur, including ownership structure, investment, returns, store formats, and how to apply.",
  keywords: [
    "FOCM model franchise Hapur",
    "Buyzaar Mart FOCM Hapur",
    "franchise owned company managed Hapur",
    "FOCM grocery franchise Hapur",
    "active ownership franchise Hapur",
    "owner operated franchise Hapur",
    "FOCO franchise Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "best FOCM franchise Hapur",
    "supermarket franchise Hapur",
    "franchise investment Hapur",
    "franchise fee grocery Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "first time entrepreneur franchise Hapur",
    "neighbourhood store franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/focm-model-franchise-hapur",
  },
  openGraph: {
    title: "FOCM Model Franchise in Hapur | The Buyzaar Mart",
    description:
      "Learn how the FOCM model works for a Buyzaar Mart franchise in Hapur, including ownership structure, investment, returns, store formats, and how to apply.",
    url: "https://www.thebuyzaarmart.com/hapur/focm-model-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Franchise in Hapur | The Buyzaar Mart",
    description:
      "Learn how the FOCM model works for a Buyzaar Mart franchise in Hapur, including ownership structure, investment, returns, store formats, and how to apply.",
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