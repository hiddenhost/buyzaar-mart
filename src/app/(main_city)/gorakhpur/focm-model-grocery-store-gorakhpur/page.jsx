import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Grocery Store in Gorakhpur | Buyzaar Mart",
  description:
    "Own a FOCM model grocery store in Gorakhpur from ₹15 Lakh. The Buyzaar Mart manages operations with POS & training. See costs, daily routine & apply.",
  keywords: [
    "FOCM model grocery store Gorakhpur",
    "FOCM grocery store",
    "FOCM model franchise Gorakhpur",
    "Franchise Owned Company Managed grocery store",
    "company managed grocery store",
    "grocery store franchise Gorakhpur",
    "grocery store investment Gorakhpur",
    "Buyzaar Mart FOCM",
    "Buyzaar Mart Gorakhpur",
    "FOCM vs FOCO",
    "mini mart FOCM",
    "grocery franchise cost Gorakhpur",
    "grocery store profit margin",
    "how to run a grocery store",
    "grocery store management tips",
    "supermarket franchise Gorakhpur",
    "low investment grocery franchise",
    "franchise from 15 lakh",
    "grocery franchise for first-time entrepreneurs",
    "POS billing grocery store",
    "zero royalty grocery franchise",
    "5 year franchise agreement",
    "franchise business Gorakhpur",
    "retail franchise Uttar Pradesh",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/focm-model-grocery-store-gorakhpur",
  },
  openGraph: {
    title: "FOCM Model Grocery Store in Gorakhpur | Buyzaar Mart",
    description:
      "Own a FOCM model grocery store in Gorakhpur from ₹15 Lakh. The Buyzaar Mart manages operations with POS & training. See costs, daily routine & apply.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/focm-model-grocery-store-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Grocery Store in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Grocery Store in Gorakhpur | Buyzaar Mart",
    description:
      "Own a FOCM model grocery store in Gorakhpur from ₹15 Lakh. The Buyzaar Mart manages operations with POS & training. See costs, daily routine & apply.",
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