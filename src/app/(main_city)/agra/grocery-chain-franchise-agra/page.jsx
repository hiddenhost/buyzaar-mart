import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain Franchise in Agra – Buyzaar Mart Investment Opportunity",
  description:
    "Explore the opportunity to start a grocery chain franchise in Agra with Buyzaar Mart — market potential, store formats, investment, and application process.",
  keywords: [
    "grocery chain franchise Agra",
    "Buyzaar Mart Agra",
    "supermarket franchise Agra",
    "retail franchise Uttar Pradesh",
    "grocery store franchise Agra",
    "Buyzaar Mart franchise cost Agra",
    "organized retail Agra",
    "franchise business Agra",
    "Tier 2 city grocery franchise",
    "Buyzaar Mart Agra investment",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/grocery-chain-franchise-agra",
  },
  openGraph: {
    title: "Grocery Chain Franchise in Agra – Buyzaar Mart Investment Opportunity",
    description:
      "Explore the opportunity to start a grocery chain franchise in Agra with Buyzaar Mart — market potential, store formats, investment, and application process.",
    url: "https://www.thebuyzaarmart.com/agra/grocery-chain-franchise-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Chain Franchise in Agra – Buyzaar Mart Investment Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain Franchise in Agra – Buyzaar Mart Investment Opportunity",
    description:
      "Explore the opportunity to start a grocery chain franchise in Agra with Buyzaar Mart — market potential, store formats, investment, and application process.",
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