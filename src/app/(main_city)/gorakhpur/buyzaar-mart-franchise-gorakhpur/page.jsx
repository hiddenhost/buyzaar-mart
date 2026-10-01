import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Gorakhpur | Grocery Franchise ₹15L",
  description:
    "Start a Buyzaar Mart franchise in Gorakhpur from ₹15 lakh. FOCM & FOCO models, POS billing, supply chain and launch support included. Apply today.",
  keywords: [
    "Buyzaar Mart franchise Gorakhpur",
    "The Buyzaar Mart",
    "Buyzaar Mart Gorakhpur",
    "grocery franchise in Gorakhpur",
    "supermarket franchise Gorakhpur",
    "grocery store franchise Gorakhpur",
    "grocery franchise Uttar Pradesh",
    "grocery franchise 15 lakh",
    "low investment grocery franchise India",
    "affordable supermarket franchise India",
    "FOCM franchise India",
    "FOCO franchise India",
    "franchise owned company managed",
    "franchise owned company operated",
    "Mini Mart franchise Gorakhpur",
    "Super Mart franchise Gorakhpur",
    "Hyper Mart franchise Gorakhpur",
    "retail franchise Gorakhpur",
    "FMCG store franchise",
    "neighborhood supermarket franchise",
    "supermarket franchise cost India",
    "Purvanchal retail franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-franchise-gorakhpur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Gorakhpur | Grocery Franchise ₹15L",
    description:
      "Start a Buyzaar Mart franchise in Gorakhpur from ₹15 lakh. FOCM & FOCO models, POS billing, supply chain and launch support included. Apply today.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Gorakhpur | Grocery Franchise ₹15L",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Gorakhpur | Grocery Franchise ₹15L",
    description:
      "Start a Buyzaar Mart franchise in Gorakhpur from ₹15 lakh. FOCM & FOCO models, POS billing, supply chain and launch support included. Apply today.",
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