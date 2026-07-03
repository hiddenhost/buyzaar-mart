import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Grocery Retail Franchise in Prayagraj | The Buyzaar Mart",
  description:
    "Bring organised grocery retail to Prayagraj with The Buyzaar Mart franchise. Branded stores, centralized supply chain, and modern systems replacing unorganized kirana retail.",
  keywords: [
    "organised grocery retail franchise Prayagraj",
    "organized retail Prayagraj",
    "modern grocery store franchise UP",
    "The Buyzaar Mart franchise",
    "branded supermarket franchise Prayagraj",
    "organized retail vs kirana",
    "FMCG retail franchise Prayagraj",
    "structured grocery business UP",
    "organized retail investment",
    "supermarket chain franchise Prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/organised-grocery-retail-franchise-prayagraj",
  },
  openGraph: {
    title: "Organised Grocery Retail Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Bring organised grocery retail to Prayagraj with The Buyzaar Mart franchise. Branded stores, centralized supply chain, and modern systems replacing unorganized kirana retail.",
    url: "https://www.thebuyzaarmart.com/prayagraj/organised-grocery-retail-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Grocery Retail Franchise in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Grocery Retail Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Bring organised grocery retail to Prayagraj with The Buyzaar Mart franchise. Branded stores, centralized supply chain, and modern systems replacing unorganized kirana retail.",
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