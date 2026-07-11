import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Profit in Lucknow | The Buyzaar Mart",
  description:
    "Understand grocery franchise profit potential in Lucknow with The Buyzaar Mart. Learn how location, format, and FOCO and FOCM models affect your margins.",
  keywords: [
    "grocery franchise profit Lucknow",
    "franchise profit margin Lucknow",
    "The Buyzaar Mart profit",
    "grocery franchise ROI Lucknow",
    "FOCO FOCM profit comparison",
    "retail franchise earnings Lucknow",
    "supermarket franchise profit UP",
    "grocery franchise break even Lucknow",
    "franchise revenue sharing Lucknow",
    "Mini Mart profit margin",
    "Super Mart profit potential",
    "franchise investment return India",
    "monthly earnings grocery franchise",
    "FMCG franchise profitability",
    "retail franchise income Lucknow",
    "franchise profit calculator India",
    "passive income franchise profit",
    "grocery store profit margin India",
    "franchise business returns UP",
    "high ROI franchise Lucknow",
    "grocery franchise cash flow",
    "franchise profit vs investment ratio",
    "retail franchise earning potential Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/grocery-franchise-profit-in-lucknow",
  },
  openGraph: {
    title: "Grocery Franchise Profit in Lucknow | The Buyzaar Mart",
    description:
      "Understand grocery franchise profit potential in Lucknow with The Buyzaar Mart. Learn how location, format, and FOCO and FOCM models affect your margins.",
    url: "https://www.thebuyzaarmart.com/lucknow/grocery-franchise-profit-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Profit in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Profit in Lucknow | The Buyzaar Mart",
    description:
      "Understand grocery franchise profit potential in Lucknow with The Buyzaar Mart. Learn how location, format, and FOCO and FOCM models affect your margins.",
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