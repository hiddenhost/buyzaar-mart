import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Retail Store in Gorakhpur | Buyzaar Mart",
  description:
    "Own a FOCO model retail store in Gorakhpur from ₹15 Lakh. The Buyzaar Mart runs daily operations, POS billing & stock. Check store formats, returns & apply.",
  keywords: [
    "FOCO model retail store Gorakhpur",
    "FOCO retail store",
    "FOCO model franchise Gorakhpur",
    "Franchise Owned Company Operated store",
    "company operated retail store",
    "company operated grocery store Gorakhpur",
    "FOCO vs FOCM",
    "Buyzaar Mart FOCO store",
    "Buyzaar Mart Gorakhpur",
    "retail store investment Gorakhpur",
    "passive retail investment",
    "own a retail store without running it",
    "grocery store investment Gorakhpur",
    "supermarket store franchise Gorakhpur",
    "mini mart FOCO",
    "super mart FOCO",
    "hyper mart franchise Gorakhpur",
    "franchise from 15 lakh",
    "retail store for property owners",
    "revenue sharing retail store",
    "hands-off retail business",
    "POS enabled retail store",
    "franchise business Gorakhpur",
    "retail franchise Uttar Pradesh",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/foco-model-retail-store-gorakhpur",
  },
  openGraph: {
    title: "FOCO Model Retail Store in Gorakhpur | Buyzaar Mart",
    description:
      "Own a FOCO model retail store in Gorakhpur from ₹15 Lakh. The Buyzaar Mart runs daily operations, POS billing & stock. Check store formats, returns & apply.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/foco-model-retail-store-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Retail Store in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Retail Store in Gorakhpur | Buyzaar Mart",
    description:
      "Own a FOCO model retail store in Gorakhpur from ₹15 Lakh. The Buyzaar Mart runs daily operations, POS billing & stock. Check store formats, returns & apply.",
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