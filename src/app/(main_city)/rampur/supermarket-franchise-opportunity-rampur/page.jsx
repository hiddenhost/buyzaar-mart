import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Supermarket Franchise Opportunity in Rampur | The Buyzaar Mart",
  description:
    "Start a supermarket franchise in Rampur with The Buyzaar Mart from ₹15 lakh total investment. FOCM and FOCO models, POS, training, supply chain and full support. Apply today.",
  keywords: [
    "supermarket franchise opportunity rampur",
    "supermarket franchise in rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart",
    "grocery franchise rampur",
    "mart franchise rampur",
    "retail franchise rampur",
    "supermarket franchise uttar pradesh",
    "supermarket franchise in india",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "mini mart franchise rampur",
    "super mart franchise rampur",
    "hyper mart franchise rampur",
    "grocery franchise 15 lakh",
    "low investment supermarket franchise",
    "franchise business opportunity rampur",
    "organised retail franchise rampur",
    "neighbourhood supermarket franchise",
    "supermarket franchise with full support",
    "best franchise to open in rampur",
    "FMCG store franchise india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/supermarket-franchise-opportunity-rampur",
  },
  openGraph: {
    title: "Supermarket Franchise Opportunity in Rampur | The Buyzaar Mart",
    description:
      "Start a supermarket franchise in Rampur with The Buyzaar Mart from ₹15 lakh total investment. FOCM and FOCO models, POS, training, supply chain and full support. Apply today.",
    url: "https://www.thebuyzaarmart.com/rampur/supermarket-franchise-opportunity-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity in Rampur | The Buyzaar Mart",
    description:
      "Start a supermarket franchise in Rampur with The Buyzaar Mart from ₹15 lakh total investment. FOCM and FOCO models, POS, training, supply chain and full support. Apply today.",
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