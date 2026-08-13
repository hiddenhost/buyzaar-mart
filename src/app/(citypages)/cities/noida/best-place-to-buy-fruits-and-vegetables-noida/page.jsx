import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Place to Buy Fruits and Vegetables in Noida | The Buyzaar Mart",

  description:
    "Looking for the best place to buy fruits and vegetables in Noida? The Buyzaar Mart offers fresh, hygienically sourced produce, wide variety, and doorstep delivery.",

  keywords: [
    "best place to buy fruits and vegetables in noida",
    "fresh vegetables noida",
    "fresh fruits noida",
    "buy vegetables online noida",
    "fruit and vegetable shop noida",
    "buyzaar mart noida",
    "fresh produce noida",
    "grocery store noida",
    "vegetable delivery noida",
    "fruit shop near me noida",
    "organic vegetables noida",
    "daily fresh produce noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-place-to-buy-fruits-and-vegetables-in-noida",
  },

  openGraph: {
    title: "Best Place to Buy Fruits and Vegetables in Noida | The Buyzaar Mart",

    description:
      "Looking for the best place to buy fruits and vegetables in Noida? The Buyzaar Mart offers fresh, hygienically sourced produce, wide variety, and doorstep delivery.",

    url: "https://www.thebuyzaarmart.com/cities/noida/best-place-to-buy-fruits-and-vegetables-in-noida",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Place to Buy Fruits and Vegetables in Noida | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Place to Buy Fruits and Vegetables in Noida | The Buyzaar Mart",

    description:
      "Looking for the best place to buy fruits and vegetables in Noida? The Buyzaar Mart offers fresh, hygienically sourced produce, wide variety, and doorstep delivery.",

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