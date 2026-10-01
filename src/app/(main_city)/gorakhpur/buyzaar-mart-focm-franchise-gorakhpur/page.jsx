import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCM Franchise Gorakhpur | Invest from ₹15L",
  description:
    "Own a Buyzaar Mart FOCM franchise in Gorakhpur. Franchise Owned, Company Managed model with full setup, supply chain, POS and support. Investment from ₹15 lakh.",
  keywords: [
    "Buyzaar Mart FOCM franchise Gorakhpur",
    "FOCM franchise Gorakhpur",
    "FOCM franchise India",
    "franchise owned company managed",
    "The Buyzaar Mart",
    "Buyzaar Mart franchise Gorakhpur",
    "managed grocery franchise India",
    "company managed grocery franchise",
    "grocery franchise in Gorakhpur",
    "supermarket franchise Gorakhpur",
    "grocery franchise Uttar Pradesh",
    "grocery franchise 15 lakh",
    "low investment grocery franchise India",
    "grocery franchise with full support",
    "FOCO franchise India",
    "Mini Mart franchise Gorakhpur",
    "Super Mart franchise Gorakhpur",
    "Hyper Mart franchise Gorakhpur",
    "retail franchise Gorakhpur",
    "FMCG store franchise",
    "neighborhood supermarket franchise",
    "supermarket franchise cost India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-focm-franchise-gorakhpur",
  },
  openGraph: {
    title: "Buyzaar Mart FOCM Franchise Gorakhpur | Invest from ₹15L",
    description:
      "Own a Buyzaar Mart FOCM franchise in Gorakhpur. Franchise Owned, Company Managed model with full setup, supply chain, POS and support. Investment from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-focm-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCM Franchise Gorakhpur | Invest from ₹15L",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCM Franchise Gorakhpur | Invest from ₹15L",
    description:
      "Own a Buyzaar Mart FOCM franchise in Gorakhpur. Franchise Owned, Company Managed model with full setup, supply chain, POS and support. Investment from ₹15 lakh.",
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