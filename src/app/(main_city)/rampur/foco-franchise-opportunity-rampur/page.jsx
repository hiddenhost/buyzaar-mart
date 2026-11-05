import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FOCO Franchise Opportunity in Rampur | The Buyzaar Mart",
  description:
    "Explore the FOCO franchise opportunity in Rampur with The Buyzaar Mart. Invest in a full-scale supermarket that the company operates, under a 10-year agreement.",
  keywords: [
    "foco franchise opportunity rampur",
    "foco franchise rampur",
    "foco model rampur",
    "franchise owned company operated rampur",
    "Buyzaar Mart rampur",
    "The Buyzaar Mart franchise",
    "supermarket franchise rampur",
    "grocery franchise rampur",
    "mart franchise rampur",
    "retail franchise rampur",
    "franchise opportunity in rampur",
    "company operated supermarket franchise",
    "passive investment retail franchise",
    "Super Mart franchise rampur",
    "Hyper Mart franchise rampur",
    "supermarket franchise Uttar Pradesh",
    "supermarket franchise UP",
    "2000 sq ft supermarket franchise",
    "10 year franchise agreement India",
    "FOCO vs FOCM franchise",
    "grocery franchise with full support",
    "retail investment opportunity rampur",
    "Buyzaar Mart franchise apply",
    "FMCG store franchise rampur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/foco-franchise-opportunity-rampur",
  },
  openGraph: {
    title: "FOCO Franchise Opportunity in Rampur | The Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Rampur with The Buyzaar Mart. Invest in a full-scale supermarket that the company operates, under a 10-year agreement.",
    url: "https://www.thebuyzaarmart.com/rampur/foco-franchise-opportunity-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Opportunity in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Opportunity in Rampur | The Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Rampur with The Buyzaar Mart. Invest in a full-scale supermarket that the company operates, under a 10-year agreement.",
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