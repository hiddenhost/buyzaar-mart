import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Mini Mart Franchise Cost | Investment Breakdown",
  description:
    "Discover the complete Buyzaar Mart Mini Mart franchise cost, starting at ₹15,25,000. Explore the investment breakdown, benefits, and application process.",
  keywords: [
    "Buyzaar Mart Mini Mart franchise cost",
    "Mini Mart franchise investment",
    "Buyzaar Mart franchise price",
    "small grocery franchise cost India",
    "Mini Mart store franchise",
    "Buyzaar Mart investment breakdown",
    "low investment retail franchise India",
    "Buyzaar Mart franchise formats",
    "mini supermarket franchise cost",
    "budget grocery franchise India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi-ncr/buyzaar-mart-mini-mart-franchise-cost",
  },
  openGraph: {
    title: "Buyzaar Mart Mini Mart Franchise Cost | Investment Breakdown",
    description:
      "Discover the complete Buyzaar Mart Mini Mart franchise cost, starting at ₹15,25,000. Explore the investment breakdown, benefits, and application process.",
    url: "https://www.thebuyzaarmart.com/delhi-ncr/buyzaar-mart-mini-mart-franchise-cost",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Mini Mart Franchise Cost | Investment Breakdown",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Mini Mart Franchise Cost | Investment Breakdown",
    description:
      "Discover the complete Buyzaar Mart Mini Mart franchise cost, starting at ₹15,25,000. Explore the investment breakdown, benefits, and application process.",
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