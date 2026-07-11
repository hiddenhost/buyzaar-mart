import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise with Supply Chain Support in Lucknow | The Buyzaar Mart",
  description:
    "Open a retail franchise in Lucknow with The Buyzaar Mart's centralized supply chain support. Reliable sourcing, bulk pricing, FOCO and FOCM models and full support.",
  keywords: [
    "retail franchise supply chain Lucknow",
    "grocery franchise supply chain support",
    "The Buyzaar Mart supply chain",
    "centralized procurement franchise Lucknow",
    "FMCG franchise supply chain UP",
    "retail franchise opportunity Lucknow",
    "supermarket franchise Lucknow",
    "franchise vendor management Lucknow",
    "grocery franchise stock sourcing",
    "centralized warehouse franchise India",
    "franchise inventory replenishment Lucknow",
    "bulk procurement grocery franchise",
    "franchise logistics support UP",
    "supply chain backed retail franchise",
    "FMCG distribution franchise Lucknow",
    "franchise stock availability India",
    "grocery franchise sourcing system",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/retail-franchise-with-supply-chain-support-lucknow",
  },
  openGraph: {
    title: "Retail Franchise with Supply Chain Support in Lucknow | The Buyzaar Mart",
    description:
      "Open a retail franchise in Lucknow with The Buyzaar Mart's centralized supply chain support. Reliable sourcing, bulk pricing, FOCO and FOCM models and full support.",
    url: "https://www.thebuyzaarmart.com/lucknow/retail-franchise-with-supply-chain-support-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise with Supply Chain Support in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise with Supply Chain Support in Lucknow | The Buyzaar Mart",
    description:
      "Open a retail franchise in Lucknow with The Buyzaar Mart's centralized supply chain support. Reliable sourcing, bulk pricing, FOCO and FOCM models and full support.",
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