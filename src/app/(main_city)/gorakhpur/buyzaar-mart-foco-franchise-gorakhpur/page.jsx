import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCO Franchise Gorakhpur | Invest from ₹15L",
  description:
    "Own a Buyzaar Mart FOCO franchise in Gorakhpur. Franchise Owned, Company Operated model with POS billing, supply chain and launch support. Investment from ₹15 lakh.",
  keywords: [
    "Buyzaar Mart FOCO franchise Gorakhpur",
    "FOCO franchise Gorakhpur",
    "FOCO franchise India",
    "franchise owned company operated",
    "The Buyzaar Mart",
    "Buyzaar Mart franchise Gorakhpur",
    "grocery franchise in Gorakhpur",
    "supermarket franchise Gorakhpur",
    "FOCM franchise India",
    "franchise owned company managed",
    "grocery franchise Uttar Pradesh",
    "grocery franchise 15 lakh",
    "low investment grocery franchise India",
    "company operated grocery franchise",
    "managed grocery franchise India",
    "Mini Mart franchise Gorakhpur",
    "Super Mart franchise Gorakhpur",
    "Hyper Mart franchise Gorakhpur",
    "retail franchise Gorakhpur",
    "FMCG store franchise",
    "passive income franchise India",
    "supermarket franchise cost India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-foco-franchise-gorakhpur",
  },
  openGraph: {
    title: "Buyzaar Mart FOCO Franchise Gorakhpur | Invest from ₹15L",
    description:
      "Own a Buyzaar Mart FOCO franchise in Gorakhpur. Franchise Owned, Company Operated model with POS billing, supply chain and launch support. Investment from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-foco-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Franchise Gorakhpur | Invest from ₹15L",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCO Franchise Gorakhpur | Invest from ₹15L",
    description:
      "Own a Buyzaar Mart FOCO franchise in Gorakhpur. Franchise Owned, Company Operated model with POS billing, supply chain and launch support. Investment from ₹15 lakh.",
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