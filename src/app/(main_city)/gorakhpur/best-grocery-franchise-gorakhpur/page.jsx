import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Looking for the best grocery franchise in Gorakhpur? Compare what matters and see why The Buyzaar Mart offers 18–20% gross margin from ₹15 Lakh. Apply now!",
  keywords: [
    "best grocery franchise gorakhpur",
    "best grocery franchise in gorakhpur",
    "grocery franchise gorakhpur",
    "top grocery franchise gorakhpur",
    "grocery store franchise gorakhpur",
    "supermarket franchise gorakhpur",
    "mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "grocery franchise opportunity gorakhpur",
    "retail franchise gorakhpur",
    "franchise business in gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "focm grocery franchise gorakhpur",
    "fofo grocery franchise gorakhpur",
    "low investment grocery franchise gorakhpur",
    "profitable grocery franchise gorakhpur",
    "fmcg franchise gorakhpur",
    "open grocery store in gorakhpur",
    "grocery franchise uttar pradesh",
    "best grocery franchise in india",
    "supermarket franchise india",
    "buyzaar mart dealership",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/best-grocery-franchise-gorakhpur",
  },
  openGraph: {
    title: "Best Grocery Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Gorakhpur? Compare what matters and see why The Buyzaar Mart offers 18–20% gross margin from ₹15 Lakh. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/best-grocery-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Gorakhpur? Compare what matters and see why The Buyzaar Mart offers 18–20% gross margin from ₹15 Lakh. Apply now!",
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