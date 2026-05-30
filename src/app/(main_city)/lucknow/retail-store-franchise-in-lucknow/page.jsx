import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Retail Store Franchise in Lucknow | Grocery & Supermarket Franchise Opportunity 2025",
  description:
    "Looking for a retail store franchise in Lucknow? Join The Buyzaar Mart and start your own supermarket business from ₹15 Lakh with FOCM & FOCO models, full brand support, POS systems, and guaranteed inventory backing. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/retail-store-franchise-in-lucknow",
  },
  openGraph: {
    title:
      "Retail Store Franchise in Lucknow | Grocery & Supermarket Franchise Opportunity 2025",
    description:
      "Looking for a retail store franchise in Lucknow? Join The Buyzaar Mart and start your own supermarket business from ₹15 Lakh with FOCM & FOCO models, full brand support, POS systems, and guaranteed inventory backing. Apply now.",
    url: "https://www.thebuyzaarmart.com/lucknow/retail-store-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise in Lucknow | Grocery & Supermarket Franchise Opportunity 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Store Franchise in Lucknow | Grocery & Supermarket Franchise Opportunity 2025",
    description:
      "Looking for a retail store franchise in Lucknow? Join The Buyzaar Mart and start your own supermarket business from ₹15 Lakh with FOCM & FOCO models, full brand support, POS systems, and guaranteed inventory backing. Apply now.",
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