import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity in Mathura | Buyzaar Mart",
  description:
    "Start a supermarket franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, supply chain, training and full support.",
  keywords: [
    "supermarket franchise opportunity Mathura",
    "supermarket franchise Mathura",
    "supermarket franchise business Mathura",
    "Buyzaar Mart franchise Mathura",
    "The Buyzaar Mart",
    "super mart franchise Mathura",
    "hyper mart franchise Mathura",
    "mini mart franchise Mathura",
    "grocery franchise Mathura",
    "mart franchise Mathura",
    "retail franchise Mathura",
    "low investment supermarket franchise",
    "supermarket franchise cost India",
    "supermarket franchise under 20 lakh",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "supermarket franchise Uttar Pradesh",
    "organised retail franchise Mathura",
    "branded supermarket franchise Mathura",
    "neighbourhood supermarket franchise",
    "supermarket franchise with full support",
    "supermarket franchise with training",
    "FMCG supermarket franchise Mathura",
    "profitable supermarket franchise Mathura",
    "how to start a supermarket franchise in Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/supermarket-franchise-opportunity-mathura",
  },
  openGraph: {
    title: "Supermarket Franchise Opportunity in Mathura | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, supply chain, training and full support.",
    url: "https://www.thebuyzaarmart.com/mathura/supermarket-franchise-opportunity-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity in Mathura | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity in Mathura | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, supply chain, training and full support.",
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