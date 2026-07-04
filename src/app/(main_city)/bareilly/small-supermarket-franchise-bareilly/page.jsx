import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Small Supermarket Franchise in Bareilly | Buyzaar Mart",
  description:
    "Start a small supermarket franchise in Bareilly with Buyzaar Mart. Compact format, low investment, brand support & strong growth potential. Enquire now!",
  keywords: [
    "small supermarket franchise Bareilly",
    "Buyzaar Mart small franchise",
    "compact supermarket franchise",
    "mini supermarket franchise Bareilly",
    "low investment supermarket",
    "grocery franchise Bareilly",
    "small retail business Bareilly",
    "budget supermarket franchise India",
    "Mini Mart franchise Buyzaar",
    "small format retail Bareilly",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/small-supermarket-franchise-bareilly",
  },
  openGraph: {
    title: "Small Supermarket Franchise in Bareilly | Buyzaar Mart",
    description:
      "Start a small supermarket franchise in Bareilly with Buyzaar Mart. Compact format, low investment, brand support & strong growth potential. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/small-supermarket-franchise-bareilly",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Small Supermarket Franchise in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Supermarket Franchise in Bareilly | Buyzaar Mart",
    description:
      "Start a small supermarket franchise in Bareilly with Buyzaar Mart. Compact format, low investment, brand support & strong growth potential. Enquire now!",
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