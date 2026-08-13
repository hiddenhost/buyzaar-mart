import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Affordable Grocery Store in Noida | The Buyzaar Mart",

  description:
    "Looking for an affordable grocery store in Noida? Discover value-conscious pricing, fresh quality & smart savings tips with The Buyzaar Mart.",

  keywords: [
    "affordable grocery store in Noida",
    "cheap grocery store Noida",
    "budget grocery shopping Noida",
    "value grocery mart Noida",
    "low price supermarket Noida",
    "The Buyzaar Mart",
    "affordable daily essentials Noida",
    "grocery savings Noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/affordable-grocery-store-in-noida",
  },

  openGraph: {
    title: "Affordable Grocery Store in Noida | The Buyzaar Mart",

    description:
      "Looking for an affordable grocery store in Noida? Discover value-conscious pricing, fresh quality & smart savings tips with The Buyzaar Mart.",

    url: "https://www.thebuyzaarmart.com/cities/noida/affordable-grocery-store-in-noida",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Affordable Grocery Store in Noida | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Affordable Grocery Store in Noida | The Buyzaar Mart",

    description:
      "Looking for an affordable grocery store in Noida? Discover value-conscious pricing, fresh quality & smart savings tips with The Buyzaar Mart.",

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