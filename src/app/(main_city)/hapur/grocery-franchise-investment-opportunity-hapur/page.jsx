import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment Opportunity in Hapur | The Buyzaar Mart",
  description:
    "Discover the grocery franchise investment opportunity in Hapur with The Buyzaar Mart. Learn why the market is ready, store formats, models, and how to get started.",
  keywords: [
    "grocery franchise investment opportunity Hapur",
    "Buyzaar Mart franchise opportunity Hapur",
    "grocery business opportunity Hapur",
    "retail franchise opportunity Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "best grocery franchise Hapur",
    "supermarket franchise opportunity Hapur",
    "franchise fee grocery Hapur",
    "franchise profit margin Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "low investment franchise opportunity Hapur",
    "first mover retail opportunity Hapur",
    "neighbourhood store franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/grocery-franchise-investment-opportunity-hapur",
  },
  openGraph: {
    title: "Grocery Franchise Investment Opportunity in Hapur | The Buyzaar Mart",
    description:
      "Discover the grocery franchise investment opportunity in Hapur with The Buyzaar Mart. Learn why the market is ready, store formats, models, and how to get started.",
    url: "https://www.thebuyzaarmart.com/hapur/grocery-franchise-investment-opportunity-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment Opportunity in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment Opportunity in Hapur | The Buyzaar Mart",
    description:
      "Discover the grocery franchise investment opportunity in Hapur with The Buyzaar Mart. Learn why the market is ready, store formats, models, and how to get started.",
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