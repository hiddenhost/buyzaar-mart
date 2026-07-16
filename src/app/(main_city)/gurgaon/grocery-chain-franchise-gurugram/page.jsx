import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain Franchise in Gurugram | Buyzaar Mart Retail Network",
  description:
    "Join a growing grocery chain franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, brand network support & strong ROI. Apply now!",
  keywords: [
    "grocery chain franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "grocery chain business India",
    "retail chain franchise opportunity",
    "multi-outlet grocery brand",
    "low investment supermarket franchise in Lucknow",
    "grocery retail network Gurugram",
    "chain store franchise India",
    "expanding grocery brand",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/grocery-chain-franchise-gurugram",
  },
  openGraph: {
    title: "Grocery Chain Franchise in Gurugram | Buyzaar Mart Retail Network",
    description:
      "Join a growing grocery chain franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, brand network support & strong ROI. Apply now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/grocery-chain-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Chain Franchise in Gurugram | Buyzaar Mart Retail Network",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain Franchise in Gurugram | Buyzaar Mart Retail Network",
    description:
      "Join a growing grocery chain franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, brand network support & strong ROI. Apply now!",
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