import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Grocery Store Franchise in Bareilly | Buyzaar Mart",
  description:
    "Start a branded grocery store franchise in Bareilly with Buyzaar Mart. Trusted brand, standardized systems, strong local demand. Enquire now!",
  keywords: [
    "branded grocery store franchise Bareilly",
    "Buyzaar Mart branded franchise",
    "organized retail Bareilly",
    "branded supermarket franchise UP",
    "trusted grocery brand Bareilly",
    "retail franchise investment Bareilly",
    "branded retail business India",
    "grocery franchise brand support",
    "Buyzaar Mart franchise cost",
    "branded store setup Bareilly",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/bareilly/branded-grocery-store-franchise-in-bareilly",
  },
  openGraph: {
    title: "Branded Grocery Store Franchise in Bareilly | Buyzaar Mart",
    description:
      "Start a branded grocery store franchise in Bareilly with Buyzaar Mart. Trusted brand, standardized systems, strong local demand. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/branded-grocery-store-franchise-in-bareilly",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Grocery Store Franchise in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Grocery Store Franchise in Bareilly | Buyzaar Mart",
    description:
      "Start a branded grocery store franchise in Bareilly with Buyzaar Mart. Trusted brand, standardized systems, strong local demand. Enquire now!",
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