import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Retail Franchise Investment in Agra | Buyzaar Mart",
  description:
    "Explore a grocery retail franchise investment in Agra with Buyzaar Mart — stable returns, POS billing, inventory support & full brand backing. Enquire now!",
  keywords: [
    "grocery retail franchise investment Agra",
    "supermarket franchise investment Agra",
    "low investment grocery franchise UP",
    "Buyzaar Mart franchise investment",
    "retail franchise ROI Agra",
    "mini mart franchise Agra",
    "FOCM grocery franchise India",
    "organized retail investment Agra",
    "franchise opportunity Agra UP",
    "grocery business investment India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/grocery-retail-franchise-investment-in-agra",
  },
  openGraph: {
    title: "Grocery Retail Franchise Investment in Agra | Buyzaar Mart",
    description:
      "Explore a grocery retail franchise investment in Agra with Buyzaar Mart — stable returns, POS billing, inventory support & full brand backing. Enquire now!",
    url: "https://www.thebuyzaarmart.com/agra/grocery-retail-franchise-investment-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Retail Franchise Investment in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Retail Franchise Investment in Agra | Buyzaar Mart",
    description:
      "Explore a grocery retail franchise investment in Agra with Buyzaar Mart — stable returns, POS billing, inventory support & full brand backing. Enquire now!",
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