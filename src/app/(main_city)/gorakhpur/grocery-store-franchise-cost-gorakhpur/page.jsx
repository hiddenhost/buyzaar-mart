import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Cost in Gorakhpur | The Buyzaar Mart",
  description:
    "Know the grocery store franchise cost in Gorakhpur. The Buyzaar Mart Mini Mart starts from ₹15 Lakh. See cost breakup, margin, payback & how to apply.",
  keywords: [
    "grocery store franchise cost Gorakhpur",
    "grocery franchise cost in Gorakhpur",
    "supermarket franchise cost Gorakhpur",
    "mini mart franchise cost",
    "mini mart franchise investment",
    "super mart franchise cost",
    "hyper mart franchise cost",
    "grocery franchise investment Gorakhpur",
    "Buyzaar Mart franchise cost",
    "franchise fee grocery store",
    "grocery store setup cost",
    "grocery franchise profit margin",
    "grocery franchise ROI",
    "grocery franchise payback period",
    "low investment grocery franchise",
    "franchise from 15 lakh",
    "grocery store franchise UP",
    "FOCM franchise cost",
    "FOCO franchise investment",
    "zero royalty grocery franchise",
    "interior cost per sq ft supermarket",
    "opening stock cost grocery",
    "grocery franchise Gorakhpur",
    "franchise business Gorakhpur",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/grocery-store-franchise-cost-gorakhpur",
  },
  openGraph: {
    title: "Grocery Store Franchise Cost in Gorakhpur | The Buyzaar Mart",
    description:
      "Know the grocery store franchise cost in Gorakhpur. The Buyzaar Mart Mini Mart starts from ₹15 Lakh. See cost breakup, margin, payback & how to apply.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/grocery-store-franchise-cost-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Cost in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Cost in Gorakhpur | The Buyzaar Mart",
    description:
      "Know the grocery store franchise cost in Gorakhpur. The Buyzaar Mart Mini Mart starts from ₹15 Lakh. See cost breakup, margin, payback & how to apply.",
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