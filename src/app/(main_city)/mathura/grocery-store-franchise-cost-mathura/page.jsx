import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Cost in Mathura | The Buyzaar Mart",
  description:
    "Get a complete grocery store franchise cost breakdown for Mathura with The Buyzaar Mart — franchise fee, setup, stock, and total investment from ₹13.5 lakh.",
  keywords: [
    "grocery store franchise cost Mathura",
    "franchise cost breakdown Mathura",
    "supermarket franchise cost UP",
    "Buyzaar Mart franchise cost",
    "grocery franchise price Mathura",
    "franchise investment cost India",
    "mini mart franchise cost",
    "super mart franchise cost",
    "hyper mart franchise cost",
    "grocery franchise setup cost",
    "franchise fee India",
    "grocery store investment cost Mathura",
    "low cost grocery franchise",
    "franchise cost Uttar Pradesh",
    "grocery franchise near Vrindavan",
    "franchise cost breakdown India",
    "POS franchise cost",
    "grocery franchise stock cost",
    "franchise cost calculator India",
    "franchise business cost Mathura",
    "how much does a grocery franchise cost",
    "grocery franchise total investment",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/grocery-store-franchise-cost-mathura",
  },
  openGraph: {
    title: "Grocery Store Franchise Cost in Mathura | The Buyzaar Mart",
    description:
      "Get a complete grocery store franchise cost breakdown for Mathura with The Buyzaar Mart — franchise fee, setup, stock, and total investment from ₹13.5 lakh.",
    url: "https://www.thebuyzaarmart.com/mathura/grocery-store-franchise-cost-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Cost in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Cost in Mathura | The Buyzaar Mart",
    description:
      "Get a complete grocery store franchise cost breakdown for Mathura with The Buyzaar Mart — franchise fee, setup, stock, and total investment from ₹13.5 lakh.",
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