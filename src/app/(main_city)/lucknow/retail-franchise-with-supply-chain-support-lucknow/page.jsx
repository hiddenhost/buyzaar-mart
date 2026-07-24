import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise with Supply Chain Support in Lucknow | The Buyzaar Mart",
  description:
    "Open a retail franchise in Lucknow with The Buyzaar Mart's centralized supply chain support. Reliable sourcing, bulk pricing, FOCO and FOCM models and full support.",
  keywords: [
    "retail franchise with supply chain support Lucknow",
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
    "supply chain supported retail franchise Lucknow",
    "grocery franchise with supply chain support Lucknow",
    "supermarket franchise with supply chain support Lucknow",
    "mini mart franchise with supply chain support Lucknow",
    "Buyzaar Mart supply chain support Lucknow",
    "Buyzaar Mart retail franchise Lucknow",
    "Buyzaar Mart grocery franchise Lucknow",
    "grocery store franchise Lucknow",
    "retail franchise Lucknow",
    "supermarket franchise Lucknow",
    "mini mart franchise Lucknow",
    "organized retail franchise Lucknow",
    "grocery chain franchise Lucknow",
    "FMCG retail franchise Lucknow",
    "daily essentials franchise Lucknow",
    "low investment retail franchise Lucknow",
    "best retail franchise Lucknow",
    "profitable grocery franchise Lucknow",
    "retail business opportunity Lucknow",
    "grocery business opportunity Lucknow",
    "franchise with inventory support Lucknow",
    "end to end supply chain franchise Lucknow"
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