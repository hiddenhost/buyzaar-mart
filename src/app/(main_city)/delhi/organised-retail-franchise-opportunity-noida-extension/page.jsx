import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Retail Franchise Opportunity in Noida Extension | The Buyzaar Mart",
  description:
    "The Buyzaar Mart offers organised retail franchise opportunities in Noida Extension (Greater Noida West) with Mini Mart, Super Mart, and Hyper Mart formats, FOCM/FOCO support, centralized procurement, technology-enabled operations, and full franchise partner support.",
  keywords: [
    "organised retail franchise opportunity Noida Extension",
    "Buyzaar Mart franchise",
    "retail franchise opportunity Noida",
    "supermarket franchise Greater Noida West",
    "grocery store franchise NCR",
    "retail business opportunity Noida Extension",
    "franchise investment retail India",
    "Buyzaar Mart Noida Extension",
    "organised retail business NCR",
    "franchise store setup Noida",
    "organized retail franchise Noida Extension",
    "The Buyzaar Mart Noida Extension",
    "The Buyzaar Mart franchise",
    "retail franchise Noida Extension",
    "grocery franchise Noida Extension",
    "supermarket franchise Noida Extension",
    "mini mart franchise Noida Extension",
    "super mart franchise Noida Extension",
    "grocery store franchise Noida Extension",
    "FMCG franchise Noida Extension",
    "modern retail franchise Noida Extension",
    "branded retail franchise Noida Extension",
    "daily needs franchise Noida Extension",
    "retail franchise opportunity Noida",
    "grocery franchise Noida",
    "supermarket franchise Greater Noida West",
    "mini mart franchise Noida",
    "Buyzaar Mart franchise Noida Extension",
    "Buyzaar Mart retail franchise Noida",
    "Buyzaar Mart grocery franchise Greater Noida West",
    "grocery store franchise Noida",
    "mart franchise Greater Noida West",
    "retail business opportunity Noida",
    "grocery business opportunity Noida",
    "low investment retail franchise Noida",
    "best retail franchise Noida",
    "organized grocery retail Noida Extension",
    "daily essentials franchise Noida Extension",
    "retail startup Noida Extension",
    "small retail franchise Noida Extension",
    "franchise mart Noida Extension",
    "FOCO franchise model",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/organised-retail-franchise-opportunity-noida-extension",
  },
  openGraph: {
    title: "Organised Retail Franchise Opportunity in Noida Extension | The Buyzaar Mart",
    description:
      "Explore an organised retail franchise opportunity with Buyzaar Mart in Noida Extension. Learn about benefits, investment, store setup, and how to apply today.",
    url: "https://www.thebuyzaarmart.com/delhi/organised-retail-franchise-opportunity-noida-extension",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Retail Franchise Opportunity in Noida Extension | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Retail Franchise Opportunity in Noida Extension | The Buyzaar Mart",
    description:
      "The Buyzaar Mart offers organised retail franchise opportunities in Noida Extension (Greater Noida West) with Mini Mart, Super Mart, and Hyper Mart formats, FOCM/FOCO support, centralized procurement, technology-enabled operations, and full franchise partner support.",
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