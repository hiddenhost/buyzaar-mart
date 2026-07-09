import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Grocery Store Franchise in Noida | Buyzaar Mart",
  description:
    "Start a neighbourhood grocery store franchise in Noida with Buyzaar Mart. Low investment, brand support, and steady local demand. Apply today!",
  keywords: [
    "neighbourhood grocery store franchise Noida",
    "Buyzaar Mart franchise Noida",
    "local grocery franchise Noida",
    "small grocery store franchise",
    "Mini Mart franchise Noida",
    "retail franchise Noida",
    "affordable franchise Noida",
    "residential grocery franchise",
    "Buyzaar Mart Noida",
    "franchise business Noida",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi-ncr/neighbourhood-grocery-store-franchise-in-noida",
  },
  openGraph: {
    title: "Neighbourhood Grocery Store Franchise in Noida | Buyzaar Mart",
    description:
      "Start a neighbourhood grocery store franchise in Noida with Buyzaar Mart. Low investment, brand support, and steady local demand. Apply today!",
    url: "https://www.thebuyzaarmart.com/delhi-ncr/neighbourhood-grocery-store-franchise-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Grocery Store Franchise in Noida | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Grocery Store Franchise in Noida | Buyzaar Mart",
    description:
      "Start a neighbourhood grocery store franchise in Noida with Buyzaar Mart. Low investment, brand support, and steady local demand. Apply today!",
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