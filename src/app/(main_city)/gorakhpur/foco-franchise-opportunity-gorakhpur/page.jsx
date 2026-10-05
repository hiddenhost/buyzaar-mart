import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Franchise Opportunity in Gorakhpur | Buyzaar Mart",
  description:
    "Explore the FOCO franchise opportunity in Gorakhpur from ₹15 Lakh. Own the store, let The Buyzaar Mart operate it. See who it suits, returns & how to apply.",
  keywords: [
    "FOCO franchise opportunity Gorakhpur",
    "FOCO franchise Gorakhpur",
    "FOCO model franchise",
    "Franchise Owned Company Operated opportunity",
    "Buyzaar Mart FOCO franchise",
    "Buyzaar Mart franchise Gorakhpur",
    "passive franchise opportunity",
    "passive income business Gorakhpur",
    "hands-off franchise investment",
    "company operated franchise India",
    "franchise for property owners",
    "franchise for working professionals",
    "franchise for out-of-town investors",
    "revenue sharing franchise opportunity",
    "grocery franchise opportunity Gorakhpur",
    "supermarket franchise opportunity Gorakhpur",
    "retail franchise Gorakhpur",
    "franchise from 15 lakh",
    "low investment franchise opportunity",
    "FOCO vs FOCM",
    "franchise business Gorakhpur",
    "franchise opportunity Uttar Pradesh",
    "mini mart franchise Gorakhpur",
    "zero royalty franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/foco-franchise-opportunity-gorakhpur",
  },
  openGraph: {
    title: "FOCO Franchise Opportunity in Gorakhpur | Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Gorakhpur from ₹15 Lakh. Own the store, let The Buyzaar Mart operate it. See who it suits, returns & how to apply.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/foco-franchise-opportunity-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Opportunity in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Opportunity in Gorakhpur | Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Gorakhpur from ₹15 Lakh. Own the store, let The Buyzaar Mart operate it. See who it suits, returns & how to apply.",
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