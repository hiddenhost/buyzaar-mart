import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Opportunity in Hapur | The Buyzaar Mart",
  description:
    "Explore a franchise opportunity in Hapur with The Buyzaar Mart. Supermarket franchise with POS, supply chain and full support. Total investment from ₹15 Lakh.",
  keywords: [
    "franchise opportunity in Hapur",
    "franchise opportunity Hapur",
    "franchise business opportunity Hapur",
    "retail franchise opportunity Hapur",
    "supermarket franchise opportunity Hapur",
    "grocery franchise opportunity Hapur",
    "Buyzaar Mart franchise Hapur",
    "The Buyzaar Mart Hapur",
    "franchise in Hapur",
    "best franchise in Hapur",
    "low investment franchise Hapur",
    "franchise from 15 lakh",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "FMCG franchise Hapur",
    "organised retail franchise Hapur",
    "franchise with full support",
    "franchise with training and support",
    "supermarket franchise Delhi NCR",
    "supermarket franchise Uttar Pradesh",
    "retail business opportunity Hapur",
    "neighbourhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/franchise-opportunity-in-hapur",
  },
  openGraph: {
    title: "Franchise Opportunity in Hapur | The Buyzaar Mart",
    description:
      "Explore a franchise opportunity in Hapur with The Buyzaar Mart. Supermarket franchise with POS, supply chain and full support. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/hapur/franchise-opportunity-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Opportunity in Hapur | The Buyzaar Mart",
    description:
      "Explore a franchise opportunity in Hapur with The Buyzaar Mart. Supermarket franchise with POS, supply chain and full support. Total investment from ₹15 Lakh.",
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