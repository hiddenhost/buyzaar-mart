import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Cost in Bulandshahr | The Buyzaar Mart",
  description:
    "Get a transparent grocery store franchise cost breakdown for Bulandshahr with The Buyzaar Mart, covering Mini Mart, Super Mart, and Hyper Mart formats.",
  keywords: [
    "grocery store franchise cost Bulandshahr",
    "franchise cost Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "franchise investment Bulandshahr",
    "mini mart franchise cost",
    "super mart franchise cost",
    "hyper mart franchise cost",
    "Buyzaar Mart Bulandshahr",
    "franchise opportunity Bulandshahr",
    "FOCO franchise model",
    "FOCM franchise model",
    "best franchise Bulandshahr",
    "supermarket franchise UP",
    "organized retail Bulandshahr",
    "franchise apply Bulandshahr",
    "how much does a franchise cost",
    "franchise near Delhi NCR",
    "grocery business cost UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/grocery-store-franchise-cost-bulandshahr",
  },
  openGraph: {
    title: "Grocery Store Franchise Cost in Bulandshahr | The Buyzaar Mart",
    description:
      "Get a transparent grocery store franchise cost breakdown for Bulandshahr with The Buyzaar Mart, covering Mini Mart, Super Mart, and Hyper Mart formats.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/grocery-store-franchise-cost-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Cost in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Cost in Bulandshahr | The Buyzaar Mart",
    description:
      "Get a transparent grocery store franchise cost breakdown for Bulandshahr with The Buyzaar Mart, covering Mini Mart, Super Mart, and Hyper Mart formats.",
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