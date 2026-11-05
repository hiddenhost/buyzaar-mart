import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FOCM Franchise Opportunity in Rampur | The Buyzaar Mart",
  description:
    "Explore the FOCM franchise opportunity in Rampur with The Buyzaar Mart. Own your store, with company-managed systems, training and launch support. Total investment from ₹15 Lakh.",
  keywords: [
    "focm franchise opportunity rampur",
    "focm franchise rampur",
    "focm model rampur",
    "franchise owned company managed rampur",
    "Buyzaar Mart rampur",
    "The Buyzaar Mart franchise",
    "franchise opportunity in rampur",
    "grocery franchise rampur",
    "supermarket franchise rampur",
    "mart franchise rampur",
    "retail franchise rampur",
    "grocery franchise 15 lakh",
    "low investment franchise rampur",
    "Mini Mart franchise rampur",
    "Super Mart franchise rampur",
    "Hyper Mart franchise rampur",
    "supermarket franchise Uttar Pradesh",
    "supermarket franchise UP",
    "managed grocery franchise India",
    "grocery franchise 18-20% margin",
    "600 sq ft grocery franchise",
    "grocery franchise with full support",
    "Buyzaar Mart franchise apply",
    "FMCG store franchise rampur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/focm-franchise-opportunity-rampur",
  },
  openGraph: {
    title: "FOCM Franchise Opportunity in Rampur | The Buyzaar Mart",
    description:
      "Explore the FOCM franchise opportunity in Rampur with The Buyzaar Mart. Own your store, with company-managed systems, training and launch support. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/rampur/focm-franchise-opportunity-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Opportunity in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Opportunity in Rampur | The Buyzaar Mart",
    description:
      "Explore the FOCM franchise opportunity in Rampur with The Buyzaar Mart. Own your store, with company-managed systems, training and launch support. Total investment from ₹15 Lakh.",
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