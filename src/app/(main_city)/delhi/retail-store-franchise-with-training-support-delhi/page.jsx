import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Store Franchise with Training Support in Delhi | Buyzaar Mart",
  description:
    "Start a retail store franchise in Delhi with full training support from Buyzaar Mart. Explore benefits, investment options, and the application process.",
  keywords: [
    "retail store franchise training support Delhi",
    "Buyzaar Mart franchise training",
    "grocery franchise Delhi training support",
    "retail franchise opportunity Delhi",
    "supermarket franchise training India",
    "organised retail franchise Delhi",
    "franchise with support Delhi",
    "Buyzaar Mart Delhi franchise",
    "retail business training franchise",
    "franchise store setup support Delhi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/retail-store-franchise-with-training-support-in-delhi",
  },
  openGraph: {
    title: "Retail Store Franchise with Training Support in Delhi | Buyzaar Mart",
    description:
      "Start a retail store franchise in Delhi with full training support from Buyzaar Mart. Explore benefits, investment options, and the application process.",
    url: "https://www.thebuyzaarmart.com/delhi/retail-store-franchise-with-training-support-in-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise with Training Support in Delhi | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Store Franchise with Training Support in Delhi | Buyzaar Mart",
    description:
      "Start a retail store franchise in Delhi with full training support from Buyzaar Mart. Explore benefits, investment options, and the application process.",
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