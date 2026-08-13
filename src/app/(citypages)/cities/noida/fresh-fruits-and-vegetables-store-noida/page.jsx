import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Fresh Fruits and Vegetables Store in Noida | The Buyzaar Mart",

  description:
    "Looking for a fresh fruits and vegetables store in Noida? Discover farm-sourced, quality produce with fair pricing and fast delivery at The Buyzaar Mart.",

  keywords: [
    "fresh fruits and vegetables store Noida",
    "fresh vegetables Noida",
    "fresh fruits Noida",
    "farm fresh produce Noida",
    "best vegetable store Noida",
    "fruits and vegetables delivery Noida",
    "The Buyzaar Mart",
    "organic vegetables Noida",
    "fresh produce store near me Noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/fresh-fruits-and-vegetables-store-in-noida",
  },

  openGraph: {
    title: "Fresh Fruits and Vegetables Store in Noida | The Buyzaar Mart",

    description:
      "Looking for a fresh fruits and vegetables store in Noida? Discover farm-sourced, quality produce with fair pricing and fast delivery at The Buyzaar Mart.",

    url: "https://www.thebuyzaarmart.com/cities/noida/fresh-fruits-and-vegetables-store-in-noida",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Fresh Fruits and Vegetables Store in Noida | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Fresh Fruits and Vegetables Store in Noida | The Buyzaar Mart",

    description:
      "Looking for a fresh fruits and vegetables store in Noida? Discover farm-sourced, quality produce with fair pricing and fast delivery at The Buyzaar Mart.",

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