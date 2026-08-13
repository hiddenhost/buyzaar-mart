import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Best Online Grocery Store in Noida for Fruits and Vegetables | The Buyzaar Mart",

  description:
    "Discover why The Buyzaar Mart is the best online grocery store in Noida for fresh fruits and vegetables, offering quality produce, fast delivery, and easy ordering.",

  keywords: [
    "best online grocery store in Noida",
    "online fruits and vegetables Noida",
    "fresh vegetables delivery Noida",
    "online grocery shopping Noida",
    "The Buyzaar Mart Noida",
    "buy fruits online Noida",
    "vegetable delivery app Noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-online-grocery-store-in-noida-for-fruits-and-vegetables",
  },

  openGraph: {
    title:
      "Best Online Grocery Store in Noida for Fruits and Vegetables | The Buyzaar Mart",

    description:
      "Discover why The Buyzaar Mart is the best online grocery store in Noida for fresh fruits and vegetables, offering quality produce, fast delivery, and easy ordering.",

    url: "https://www.thebuyzaarmart.com/cities/noida/best-online-grocery-store-in-noida-for-fruits-and-vegetables",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt:
          "Best Online Grocery Store in Noida for Fruits and Vegetables | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Best Online Grocery Store in Noida for Fruits and Vegetables | The Buyzaar Mart",

    description:
      "Discover why The Buyzaar Mart is the best online grocery store in Noida for fresh fruits and vegetables, offering quality produce, fast delivery, and easy ordering.",

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