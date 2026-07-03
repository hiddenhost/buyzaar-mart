import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise with Low Entry Cost in Prayagraj | The Buyzaar Mart",
  description:
    "Start a mart franchise in Prayagraj with low entry cost. The Buyzaar Mart offers an affordable Mini Mart format with full supply chain and operational support.",
  keywords: [
    "mart franchise low entry cost Prayagraj",
    "low investment franchise Prayagraj",
    "affordable grocery franchise UP",
    "The Buyzaar Mart franchise",
    "low cost supermarket franchise",
    "budget franchise business Prayagraj",
    "small investment mart franchise",
    "FOCM low cost franchise",
    "cheap franchise opportunity Prayagraj",
    "Mini Mart franchise Prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/mart-franchise-with-low-entry-cost-prayagraj",
  },
  openGraph: {
    title: "Mart Franchise with Low Entry Cost in Prayagraj | The Buyzaar Mart",
    description:
      "Start a mart franchise in Prayagraj with low entry cost. The Buyzaar Mart offers an affordable Mini Mart format with full supply chain and operational support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/mart-franchise-with-low-entry-cost-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise with Low Entry Cost in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise with Low Entry Cost in Prayagraj | The Buyzaar Mart",
    description:
      "Start a mart franchise in Prayagraj with low entry cost. The Buyzaar Mart offers an affordable Mini Mart format with full supply chain and operational support.",
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