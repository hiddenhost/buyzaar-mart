import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Retail Franchise Opportunity in Delhi | Buyzaar Mart",
  description:
    "Explore an FMCG retail franchise opportunity in Delhi with Buyzaar Mart. Investment options from Mini Mart to Hyper Mart. Apply now!",
  keywords: [
        "FMCG retail franchise opportunity in Delhi",
    "FMCG retail franchise Delhi",
    "Buyzaar Mart franchise Delhi",
    "best FMCG franchise India",
    "FMCG franchise Delhi",
    "retail franchise opportunity Delhi",
    "grocery franchise Delhi",
    "supermarket franchise Delhi",
    "mini mart franchise Delhi",
    "mart franchise Delhi",
    "retail store franchise Delhi",
    "grocery store franchise Delhi",
    "Buyzaar Mart FMCG franchise Delhi",
    "Buyzaar Mart retail franchise Delhi",
    "FMCG business opportunity Delhi",
    "retail business opportunity Delhi",
    "franchise business Delhi",
    "low investment FMCG franchise Delhi",
    "best FMCG franchise Delhi",
    "profitable retail franchise Delhi",
    "organized retail franchise Delhi",
    "daily essentials franchise Delhi",
    "consumer goods franchise Delhi"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/fmcg-retail-franchise-opportunity-in-delhi",
  },
  openGraph: {
    title: "FMCG Retail Franchise Opportunity in Delhi | Buyzaar Mart",
    description:
      "Explore an FMCG retail franchise opportunity in Delhi with Buyzaar Mart. Investment options from Mini Mart to Hyper Mart. Apply now!",
    url: "https://www.thebuyzaarmart.com/delhi/fmcg-retail-franchise-opportunity-in-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Retail Franchise Opportunity in Delhi | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Retail Franchise Opportunity in Delhi | Buyzaar Mart",
    description:
      "Explore an FMCG retail franchise opportunity in Delhi with Buyzaar Mart. Investment options from Mini Mart to Hyper Mart. Apply now!",
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