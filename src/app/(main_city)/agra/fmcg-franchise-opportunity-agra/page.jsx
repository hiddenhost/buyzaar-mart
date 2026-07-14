import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Franchise Opportunity in Agra | Buyzaar Mart Investment Guide",
  description:
    "Explore the FMCG franchise opportunity in Agra with Buyzaar Mart — product categories, store formats, investment, and application process.",
  keywords: [
    "fmcg franchise opportunity agra",
  "fmcg franchise agra",
  "fmcg distribution franchise agra",
  "fmcg retail franchise agra",
  "fmcg business opportunity agra",
  "grocery franchise agra",
  "grocery store franchise agra",
  "supermarket franchise agra",
  "mini mart franchise agra",
  "small supermarket franchise agra",
  "retail franchise agra",
  "organised retail franchise agra",
  "consumer goods franchise agra",
  "daily essentials franchise agra",
  "food and grocery franchise agra",
  "household products franchise agra",
  "branded grocery franchise agra",
  "low investment fmcg franchise agra",
  "best fmcg franchise agra",
  "profitable fmcg franchise agra",
  "retail business opportunity agra",
  "franchise business agra",
  "grocery business franchise agra",
  "convenience store franchise agra",
  "neighbourhood mart franchise agra",
  "grocery retail franchise agra",
  "modern retail franchise agra",
  "Buyzaar Mart franchise agra",
  "Buyzaar Mart fmcg franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/fmcg-franchise-opportunity-agra",
  },
  openGraph: {
    title: "FMCG Franchise Opportunity in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the FMCG franchise opportunity in Agra with Buyzaar Mart — product categories, store formats, investment, and application process.",
    url: "https://www.thebuyzaarmart.com/agra/fmcg-franchise-opportunity-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Franchise Opportunity in Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Franchise Opportunity in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the FMCG franchise opportunity in Agra with Buyzaar Mart — product categories, store formats, investment, and application process.",
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