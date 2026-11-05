import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Franchise Opportunity in Rampur | The Buyzaar Mart",
  description:
    "Start a grocery franchise in Rampur with The Buyzaar Mart. Choose FOCM or FOCO, with POS billing, training and launch support. Total investment from ₹15 Lakh.",
  keywords: [
    "grocery franchise opportunity rampur",
    "grocery franchise rampur",
    "grocery store franchise rampur",
    "grocery business opportunity rampur",
    "supermarket franchise rampur",
    "mart franchise rampur",
    "retail franchise rampur",
    "franchise opportunity in rampur",
    "Buyzaar Mart rampur",
    "The Buyzaar Mart franchise",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "Mini Mart franchise rampur",
    "Super Mart franchise rampur",
    "Hyper Mart franchise rampur",
    "grocery franchise 15 lakh",
    "low investment grocery franchise rampur",
    "grocery franchise Uttar Pradesh",
    "supermarket franchise UP",
    "FMCG store franchise rampur",
    "branded grocery store franchise",
    "grocery franchise with full support",
    "grocery franchise 18-20% margin",
    "Buyzaar Mart franchise apply",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/grocery-franchise-opportunity-rampur",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity in Rampur | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Rampur with The Buyzaar Mart. Choose FOCM or FOCO, with POS billing, training and launch support. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/rampur/grocery-franchise-opportunity-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity in Rampur | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Rampur with The Buyzaar Mart. Choose FOCM or FOCO, with POS billing, training and launch support. Total investment from ₹15 Lakh.",
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