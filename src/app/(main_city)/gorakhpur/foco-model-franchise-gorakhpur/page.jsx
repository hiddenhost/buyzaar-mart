import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Explore the FOCO model franchise in Gorakhpur from ₹15 Lakh. You invest and own; The Buyzaar Mart operates the store with POS & supply support. Apply now!",
  keywords: [
    "FOCO model franchise Gorakhpur",
    "FOCO franchise Gorakhpur",
    "FOCO model franchise",
    "Franchise Owned Company Operated",
    "FOCO model meaning",
    "FOCO vs FOCM",
    "FOCM vs FOCO Gorakhpur",
    "passive income franchise Gorakhpur",
    "hands-off franchise investment",
    "company operated franchise India",
    "Buyzaar Mart FOCO",
    "Buyzaar Mart franchise Gorakhpur",
    "revenue sharing franchise",
    "franchise for property owners",
    "grocery franchise Gorakhpur",
    "supermarket franchise Gorakhpur",
    "mini mart franchise Gorakhpur",
    "franchise from 15 lakh",
    "low investment franchise Gorakhpur",
    "passive investment franchise",
    "franchise investment Uttar Pradesh",
    "franchise business Gorakhpur",
    "FOCO franchise returns",
    "zero royalty franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/foco-model-franchise-gorakhpur",
  },
  openGraph: {
    title: "FOCO Model Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Explore the FOCO model franchise in Gorakhpur from ₹15 Lakh. You invest and own; The Buyzaar Mart operates the store with POS & supply support. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/foco-model-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Franchise in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Explore the FOCO model franchise in Gorakhpur from ₹15 Lakh. You invest and own; The Buyzaar Mart operates the store with POS & supply support. Apply now!",
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