import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Franchise Opportunity in Hapur | Buyzaar Mart",
  description:
    "Explore the FOCO franchise opportunity in Hapur with The Buyzaar Mart. You provide the capital and space; the company operates the store. Apply today.",
  keywords: [
    "FOCO franchise opportunity Hapur",
    "FOCO franchise Hapur",
    "franchise owned company operated Hapur",
    "FOCO mart franchise Hapur",
    "Buyzaar Mart Hapur",
    "The Buyzaar Mart franchise",
    "supermarket franchise Hapur",
    "grocery franchise Hapur",
    "passive income franchise Hapur",
    "hands-off retail franchise Hapur",
    "company operated supermarket Hapur",
    "revenue share franchise Hapur",
    "10 year franchise agreement retail",
    "organised retail franchise Hapur",
    "retail investment opportunity Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "FMCG store franchise Hapur",
    "supermarket franchise Delhi NCR",
    "grocery franchise Uttar Pradesh",
    "supermarket franchise Uttar Pradesh",
    "best franchise to invest in Hapur",
    "franchise business opportunity Hapur",
    "retail franchise Hapur",
    "supermarket on rent franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/foco-franchise-opportunity-hapur",
  },
  openGraph: {
    title: "FOCO Franchise Opportunity in Hapur | Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Hapur with The Buyzaar Mart. You provide the capital and space; the company operates the store. Apply today.",
    url: "https://www.thebuyzaarmart.com/hapur/foco-franchise-opportunity-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Opportunity in Hapur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Opportunity in Hapur | Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Hapur with The Buyzaar Mart. You provide the capital and space; the company operates the store. Apply today.",
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