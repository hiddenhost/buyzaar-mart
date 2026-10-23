import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity in Hapur | Buyzaar Mart",
  description:
    "Explore a grocery franchise opportunity in Hapur with The Buyzaar Mart. Wide range, POS billing, supply chain and full support. Total investment from ₹15 Lakh.",
  keywords: [
    "grocery franchise opportunity Hapur",
    "grocery franchise Hapur",
    "grocery store franchise Hapur",
    "grocery business opportunity Hapur",
    "Buyzaar Mart grocery franchise",
    "The Buyzaar Mart Hapur",
    "supermarket franchise Hapur",
    "retail franchise Hapur",
    "low investment grocery franchise Hapur",
    "grocery franchise from 15 lakh",
    "FMCG store franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "FOCM grocery franchise Hapur",
    "FOCO grocery franchise Hapur",
    "neighbourhood grocery franchise Hapur",
    "organised grocery franchise Hapur",
    "grocery franchise with full support",
    "grocery franchise with training",
    "grocery franchise Delhi NCR",
    "grocery franchise Uttar Pradesh",
    "how to start grocery store in Hapur",
    "franchise business opportunity Hapur",
    "supermarket franchise with POS and supply chain",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/grocery-franchise-opportunity-hapur",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity in Hapur | Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity in Hapur with The Buyzaar Mart. Wide range, POS billing, supply chain and full support. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/hapur/grocery-franchise-opportunity-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity in Hapur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity in Hapur | Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity in Hapur with The Buyzaar Mart. Wide range, POS billing, supply chain and full support. Total investment from ₹15 Lakh.",
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