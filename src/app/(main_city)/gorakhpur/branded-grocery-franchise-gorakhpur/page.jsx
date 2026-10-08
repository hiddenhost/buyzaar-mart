import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Grocery Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Start a branded grocery franchise in Gorakhpur with The Buyzaar Mart. Trusted brand, POS billing and stock take-back, from ₹15 Lakh. Apply today!",
  keywords: [
    "branded grocery franchise gorakhpur",
    "branded grocery franchise in gorakhpur",
    "branded franchise gorakhpur",
    "branded mart franchise gorakhpur",
    "branded supermarket franchise gorakhpur",
    "grocery franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "trusted grocery franchise gorakhpur",
    "mart franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "retail franchise gorakhpur",
    "franchise business in gorakhpur",
    "franchise opportunity gorakhpur",
    "low investment grocery franchise gorakhpur",
    "focm grocery franchise gorakhpur",
    "fofo grocery franchise gorakhpur",
    "branded grocery franchise uttar pradesh",
    "branded grocery franchise india",
    "supermarket franchise india",
    "grocery franchise brand india",
    "buyzaar mart dealership",
    "apna bazaar bachat ka saath",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/branded-grocery-franchise-gorakhpur",
  },
  openGraph: {
    title: "Branded Grocery Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Gorakhpur with The Buyzaar Mart. Trusted brand, POS billing and stock take-back, from ₹15 Lakh. Apply today!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/branded-grocery-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Grocery Franchise in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Grocery Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Gorakhpur with The Buyzaar Mart. Trusted brand, POS billing and stock take-back, from ₹15 Lakh. Apply today!",
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