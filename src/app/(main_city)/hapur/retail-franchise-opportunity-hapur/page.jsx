import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Opportunity in Hapur | Buyzaar Mart",
  description:
    "Explore a retail franchise opportunity in Hapur with The Buyzaar Mart. Branded supermarket with POS, supply chain and full support. Total investment from ₹15 Lakh.",
  keywords: [
    "retail franchise opportunity Hapur",
    "retail franchise Hapur",
    "retail franchise business Hapur",
    "retail business opportunity Hapur",
    "supermarket franchise Hapur",
    "grocery franchise Hapur",
    "Buyzaar Mart retail franchise",
    "The Buyzaar Mart Hapur",
    "franchise opportunity in Hapur",
    "low investment retail franchise",
    "retail franchise from 15 lakh",
    "FMCG retail franchise Hapur",
    "organised retail franchise Hapur",
    "branded retail franchise Hapur",
    "FOCM retail franchise Hapur",
    "FOCO retail franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "retail franchise with full support",
    "retail franchise with training",
    "retail franchise Delhi NCR",
    "retail franchise Uttar Pradesh",
    "neighbourhood supermarket franchise",
    "best retail franchise in Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/retail-franchise-opportunity-hapur",
  },
  openGraph: {
    title: "Retail Franchise Opportunity in Hapur | Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Hapur with The Buyzaar Mart. Branded supermarket with POS, supply chain and full support. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/hapur/retail-franchise-opportunity-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Opportunity in Hapur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Opportunity in Hapur | Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Hapur with The Buyzaar Mart. Branded supermarket with POS, supply chain and full support. Total investment from ₹15 Lakh.",
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