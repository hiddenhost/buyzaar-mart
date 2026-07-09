import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Profit Margin in India | Buyzaar Mart",
  description:
    "Understand supermarket franchise profit margins in India with Buyzaar Mart. Learn about margin factors, investment options, and tips to boost profitability.",
  keywords: [
    "supermarket franchise profit margin India",
    "Buyzaar Mart franchise profit",
    "retail franchise profitability India",
    "grocery store profit margin India",
    "supermarket business profit India",
    "franchise investment ROI India",
    "organised retail profit margin",
    "Buyzaar Mart franchise cost",
    "supermarket franchise opportunity India",
    "grocery franchise profit analysis",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi-ncr/supermarket-franchise-profit-margin-india",
  },
  openGraph: {
    title: "Supermarket Franchise Profit Margin in India | Buyzaar Mart",
    description:
      "Understand supermarket franchise profit margins in India with Buyzaar Mart. Learn about margin factors, investment options, and tips to boost profitability.",
    url: "https://www.thebuyzaarmart.com/delhi-ncr/supermarket-franchise-profit-margin-india ",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Profit Margin in India | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Profit Margin in India | Buyzaar Mart",
    description:
      "Understand supermarket franchise profit margins in India with Buyzaar Mart. Learn about margin factors, investment options, and tips to boost profitability.",
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