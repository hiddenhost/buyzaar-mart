import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Mathura | Grocery & Supermarket Business Opportunity",
  description:
    "Explore The Buyzaar Mart franchise opportunity in Mathura — FOCM/FOFO models, investment from ₹15 Lakh, store formats, brand support & how to get started.",
  keywords: [
    "Buyzaar Mart franchise Mathura",
    "grocery franchise opportunity Mathura",
    "supermarket franchise Mathura",
    "FOCM franchise Mathura",
    "FOFO franchise Mathura",
    "grocery franchise investment Mathura",
    "Buyzaar Mart business model",
    "retail franchise Uttar Pradesh",
    "franchise opportunity Mathura",
    "low investment grocery franchise India",
    "supermarket franchise cost Mathura",
    "grocery store franchise Mathura",
    "Buyzaar Mart Mini Mart Super Mart Hyper Mart",
    "franchise ready business Mathura",
    "organized retail franchise Mathura",
    "grocery franchise with brand support",
    "FMCG store franchise Mathura",
    "Buyzaar Mart franchise benefits",
    "neighborhood supermarket franchise Mathura",
    "grocery franchise ROI Mathura",
    "how to start grocery franchise Mathura",
    "Buyzaar Mart franchise network India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-franchise-mathura",
  },
  openGraph: {
    title:
      "Buyzaar Mart Franchise in Mathura | Grocery & Supermarket Business Opportunity",
    description:
      "Explore The Buyzaar Mart franchise opportunity in Mathura — FOCM/FOCO models, investment from ₹15 Lakh, store formats, brand support & how to get started.",
    url: "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Mathura | Grocery & Supermarket Business Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Franchise in Mathura | Grocery & Supermarket Business Opportunity",
    description:
      "Explore The Buyzaar Mart franchise opportunity in Mathura — FOCM/FOCO models, investment from ₹15 Lakh, store formats, brand support & how to get started.",
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