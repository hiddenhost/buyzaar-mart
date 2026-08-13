import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store in Noida with Home Delivery | The Buyzaar Mart",

  description:
    "Need a grocery store in Noida with home delivery? The Buyzaar Mart delivers fresh groceries & daily essentials to your doorstep across Noida sectors. Order now!",

  keywords: [
    "grocery store in Noida with home delivery",
    "grocery delivery Noida",
    "Noida grocery home delivery service",
    "grocery store near me Noida",
    "online grocery order Noida",
    "doorstep grocery Noida",
    "home delivery kirana Noida",
    "The Buyzaar Mart delivery",
    "grocery shop delivery service Noida",
    "daily essentials delivery Noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/grocery-store-in-noida-with-home-delivery",
  },

  openGraph: {
    title: "Grocery Store in Noida with Home Delivery | The Buyzaar Mart",

    description:
      "Need a grocery store in Noida with home delivery? The Buyzaar Mart delivers fresh groceries & daily essentials to your doorstep across Noida sectors. Order now!",

    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-store-in-noida-with-home-delivery",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store in Noida with Home Delivery | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Grocery Store in Noida with Home Delivery | The Buyzaar Mart",

    description:
      "Need a grocery store in Noida with home delivery? The Buyzaar Mart delivers fresh groceries & daily essentials to your doorstep across Noida sectors. Order now!",

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