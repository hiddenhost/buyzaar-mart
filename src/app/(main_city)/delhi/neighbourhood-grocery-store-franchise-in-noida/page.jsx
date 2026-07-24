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
    "neighbourhood grocery store franchise in Noida",
    "neighbourhood grocery franchise Noida",
    "grocery store franchise Noida",
    "mini mart franchise Noida",
    "supermarket franchise Noida",
    "Buyzaar Mart neighbourhood store Noida",
    "Buyzaar Mart grocery franchise Noida",
    "Buyzaar Mart mini mart Noida",
    "mart franchise Noida",
    "retail franchise Noida",
    "convenience store franchise Noida",
    "daily essentials franchise Noida",
    "organized retail franchise Noida",
    "grocery chain franchise Noida",
    "small supermarket franchise Noida",
    "best grocery franchise Noida",
    "low investment grocery franchise Noida",
    "franchise business Noida",
    "retail business opportunity Noida",
    "grocery business opportunity Noida"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/neighbourhood-grocery-store-franchise-in-noida",
  },
  openGraph: {
    title: "Neighbourhood Grocery Store Franchise in Noida | Buyzaar Mart",
    description:
      "Start a neighbourhood grocery store franchise in Noida with Buyzaar Mart. Low investment, brand support, and steady local demand. Apply today!",
    url: "https://www.thebuyzaarmart.com/delhi/neighbourhood-grocery-store-franchise-in-noida",
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