import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Retail Store Franchise in Prayagraj | The Buyzaar Mart",
  description:
    "Understand the FOCO model retail store franchise in Prayagraj with The Buyzaar Mart. Own the store, let the company operate it — passive income with full operational support.",
  keywords: [
    "FOCO model retail store Prayagraj",
    "FOCO franchise model UP",
    "franchise owned company operated Prayagraj",
    "The Buyzaar Mart FOCO",
    "passive income retail franchise",
    "FOCO grocery store Prayagraj",
    "retail franchise model explained",
    "FOCO vs FOFO franchise",
    "asset backed franchise Prayagraj",
    "supermarket FOCO franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/foco-model-retail-store-prayagraj",
  },
  openGraph: {
    title: "FOCO Model Retail Store Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Understand the FOCO model retail store franchise in Prayagraj with The Buyzaar Mart. Own the store, let the company operate it — passive income with full operational support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/foco-model-retail-store-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Retail Store Franchise in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Retail Store Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Understand the FOCO model retail store franchise in Prayagraj with The Buyzaar Mart. Own the store, let the company operate it — passive income with full operational support.",
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