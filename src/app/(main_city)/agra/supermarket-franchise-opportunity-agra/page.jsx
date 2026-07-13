import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity in Agra | Buyzaar Mart",
  description:
    "Discover the supermarket franchise opportunity in Agra with Buyzaar Mart — market potential, store formats, investment, and application process.",
  keywords: [
    "supermarket franchise Agra",
    "supermarket business opportunity Agra",
    "Buyzaar Mart Agra",
    "organized retail Agra",
    "Super Mart franchise India",
    "retail franchise Uttar Pradesh",
    "supermarket investment Agra",
    "Buyzaar Mart franchise cost",
    "Tier 2 city supermarket franchise",
    "Buyzaar Mart Agra opportunity",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/supermarket-franchise-opportunity-in-agra",
  },
  openGraph: {
    title: "Supermarket Franchise Opportunity in Agra | Buyzaar Mart",
    description:
      "Discover the supermarket franchise opportunity in Agra with Buyzaar Mart — market potential, store formats, investment, and application process.",
    url: "https://www.thebuyzaarmart.com/agra/supermarket-franchise-opportunity-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity in Agra | Buyzaar Mart",
    description:
      "Discover the supermarket franchise opportunity in Agra with Buyzaar Mart — market potential, store formats, investment, and application process.",
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