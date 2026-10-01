import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Retail Partner Gorakhpur | From ₹15 Lakh",
  description:
    "Become a Buyzaar Mart retail partner in Gorakhpur. Own a branded supermarket with FOCM/FOCO models, POS billing, supply chain and launch support. Apply now.",
  keywords: [
    "Buyzaar Mart retail partner Gorakhpur",
    "become retail partner Gorakhpur",
    "The Buyzaar Mart",
    "Buyzaar Mart franchise Gorakhpur",
    "retail partner program India",
    "grocery franchise in Gorakhpur",
    "supermarket franchise Gorakhpur",
    "grocery retail partner",
    "grocery franchise Uttar Pradesh",
    "grocery franchise 15 lakh",
    "low investment grocery franchise India",
    "FOCM franchise India",
    "FOCO franchise India",
    "franchise owned company managed",
    "franchise owned company operated",
    "Mini Mart franchise Gorakhpur",
    "Super Mart franchise Gorakhpur",
    "Hyper Mart franchise Gorakhpur",
    "FMCG store franchise",
    "neighborhood supermarket franchise",
    "retail franchise Gorakhpur",
    "supermarket franchise cost India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-retail-partner-gorakhpur",
  },
  openGraph: {
    title: "Buyzaar Mart Retail Partner Gorakhpur | From ₹15 Lakh",
    description:
      "Become a Buyzaar Mart retail partner in Gorakhpur. Own a branded supermarket with FOCM/FOCO models, POS billing, supply chain and launch support. Apply now.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-retail-partner-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Partner Gorakhpur | From ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Retail Partner Gorakhpur | From ₹15 Lakh",
    description:
      "Become a Buyzaar Mart retail partner in Gorakhpur. Own a branded supermarket with FOCM/FOCO models, POS billing, supply chain and launch support. Apply now.",
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