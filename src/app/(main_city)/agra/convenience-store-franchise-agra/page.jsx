import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Store Franchise in Agra | Buyzaar Mart",
  description:
    "Start a convenience store franchise in Agra with Buyzaar Mart's zero-royalty, Company-Managed model. Explore the Mini Mart format, investment, and process.",
  keywords: [
    "convenience store franchise agra",
  "convenience mart franchise agra",
  "neighbourhood convenience store agra",
  "mini convenience store franchise agra",
  "local convenience store franchise agra",
  "daily needs store franchise agra",
  "daily essentials franchise agra",
  "grocery convenience franchise agra",
  "grocery store franchise agra",
  "mini mart franchise agra",
  "small supermarket franchise agra",
  "supermarket franchise agra",
  "neighbourhood mart franchise agra",
  "retail store franchise agra",
  "organised retail franchise agra",
  "grocery retail franchise agra",
  "fmcg franchise agra",
  "food and grocery franchise agra",
  "branded grocery franchise agra",
  "low investment grocery franchise agra",
  "best grocery franchise agra",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/convenience-store-franchise-in-agra",
  },
  openGraph: {
    title: "Convenience Store Franchise in Agra | Buyzaar Mart",
    description:
      "Start a convenience store franchise in Agra with Buyzaar Mart's zero-royalty, Company-Managed model. Explore the Mini Mart format, investment, and process.",
    url: "https://www.thebuyzaarmart.com/agra/convenience-store-franchise-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Store Franchise in Agra | Buyzaar Mart",
    description:
      "Start a convenience store franchise in Agra with Buyzaar Mart's zero-royalty, Company-Managed model. Explore the Mini Mart format, investment, and process.",
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