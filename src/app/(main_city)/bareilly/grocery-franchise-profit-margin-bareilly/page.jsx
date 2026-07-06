import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Profit Margin in Bareilly | Buyzaar Mart",
  description:
    "Understand grocery franchise profit margins in Bareilly with Buyzaar Mart. Get insights on margin percentages, cost factors, investment, and tips to boost profitability.",
  keywords: [
    "grocery franchise profit margin Bareilly",
    "Buyzaar Mart profit margin",
    "grocery store margin India",
    "supermarket franchise profit Bareilly",
    "retail franchise investment Bareilly",
    "grocery business profitability",
    "franchise opportunities Bareilly",
    "mart franchise margin",
    "grocery franchise ROI",
    "retail store profit percentage",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/grocery-franchise-profit-margin-bareilly",
  },
  openGraph: {
    title: "Grocery Franchise Profit Margin in Bareilly | Buyzaar Mart",
    description:
      "Understand grocery franchise profit margins in Bareilly with Buyzaar Mart. Get insights on margin percentages, cost factors, investment, and tips to boost profitability.",
    url: "https://www.thebuyzaarmart.com/bareilly/grocery-franchise-profit-margin-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Profit Margin in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Profit Margin in Bareilly | Buyzaar Mart",
    description:
      "Understand grocery franchise profit margins in Bareilly with Buyzaar Mart. Get insights on margin percentages, cost factors, investment, and tips to boost profitability.",
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