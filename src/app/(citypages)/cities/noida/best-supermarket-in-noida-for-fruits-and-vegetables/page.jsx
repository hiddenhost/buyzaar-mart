import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket in Noida for Fruits and Vegetables | The Buyzaar Mart",
  description:
    "Looking for the best supermarket in Noida for fruits and vegetables? The Buyzaar Mart offers fresh, quality-checked produce with easy in-store & online access.",
  keywords: [
    "best supermarket in Noida for fruits and vegetables",
    "fresh fruits and vegetables Noida",
    "fruits and vegetables store Noida",
    "supermarket fresh produce Noida",
    "buy fruits vegetables online Noida",
    "fresh vegetable shop Noida",
    "F&V supermarket Noida",
    "The Buyzaar Mart fruits vegetables",
    "fresh produce delivery Noida",
    "organic fruits vegetables Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-in-noida-for-fruits-and-vegetables",
  },
  openGraph: {
    title: "Best Supermarket in Noida for Fruits and Vegetables | The Buyzaar Mart",
    description:
      "Looking for the best supermarket in Noida for fruits and vegetables? The Buyzaar Mart offers fresh, quality-checked produce with easy in-store & online access.",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-in-noida-for-fruits-and-vegetables",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Supermarket in Noida for Fruits and Vegetables | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Supermarket in Noida for Fruits and Vegetables | The Buyzaar Mart",
    description:
      "Looking for the best supermarket in Noida for fruits and vegetables? The Buyzaar Mart offers fresh, quality-checked produce with easy in-store & online access.",
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