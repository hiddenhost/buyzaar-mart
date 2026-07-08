import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Profit Margin in Prayagraj | Buyzaar Mart",
  description:
    "Understand mart franchise profit margins in Prayagraj with Buyzaar Mart. Learn what drives profitability and how to plan realistic financial expectations.",
  keywords: [
    "mart franchise profit margin Prayagraj",
    "Buyzaar Mart franchise",
    "grocery franchise profitability India",
    "retail franchise margin Prayagraj",
    "franchise ROI Prayagraj",
    "grocery store profit margin UP",
    "franchise business profitability India",
    "retail margin analysis Prayagraj",
    "franchise financial planning India",
    "mart business profit Prayagraj",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/mart-franchise-profit-margin-prayagraj",
  },
  openGraph: {
    title: "Mart Franchise Profit Margin in Prayagraj | Buyzaar Mart",
    description:
      "Understand mart franchise profit margins in Prayagraj with Buyzaar Mart. Learn what drives profitability and how to plan realistic financial expectations.",
    url: "https://www.thebuyzaarmart.com/prayagraj/mart-franchise-profit-margin-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Profit Margin in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Profit Margin in Prayagraj | Buyzaar Mart",
    description:
      "Understand mart franchise profit margins in Prayagraj with Buyzaar Mart. Learn what drives profitability and how to plan realistic financial expectations.",
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