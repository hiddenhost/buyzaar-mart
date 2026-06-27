import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise with Supply Chain Support in Varanasi | The Buyzaar Mart",
  description:
    "Explore a grocery franchise with supply chain support in Varanasi. The Buyzaar Mart offers reliable sourcing, inventory systems, and POS billing for retail success.",
  keywords: [
    "grocery franchise supply chain Varanasi",
    "The Buyzaar Mart Varanasi",
    "grocery franchise with logistics support",
    "supply chain backed franchise",
    "retail franchise Varanasi",
    "grocery distribution franchise",
    "FMCG supply chain franchise",
    "organized retail Varanasi",
    "grocery business support UP",
    "vendor managed grocery franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-with-supply-chain-support-varanasi",
  },
  openGraph: {
    title: "Grocery Franchise with Supply Chain Support in Varanasi | The Buyzaar Mart",
    description:
      "Explore a grocery franchise with supply chain support in Varanasi. The Buyzaar Mart offers reliable sourcing, inventory systems, and POS billing for retail success.",
    url: "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-with-supply-chain-support-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise with Supply Chain Support in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise with Supply Chain Support in Varanasi | The Buyzaar Mart",
    description:
      "Explore a grocery franchise with supply chain support in Varanasi. The Buyzaar Mart offers reliable sourcing, inventory systems, and POS billing for retail success.",
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