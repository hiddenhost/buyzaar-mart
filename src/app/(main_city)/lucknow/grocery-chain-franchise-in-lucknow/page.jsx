import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain Franchise in Lucknow | The Buyzaar Mart Multi-Store Opportunity",
  description:
    "Build a grocery chain franchise in Lucknow with The Buyzaar Mart. Scalable FOCO and FOCM models, 3 store formats, centralized supply chain and full support.",
  keywords: [
    "grocery chain franchise Lucknow",
    "multi-store franchise Lucknow",
    "supermarket chain franchise Lucknow",
    "The Buyzaar Mart franchise",
    "grocery franchise expansion Lucknow",
    "FMCG chain franchise UP",
    "retail chain business Lucknow",
    "multi-outlet franchise investment India",
    "grocery franchise scale up Lucknow",
    "retail chain expansion UP",
    "multiple store franchise owner Lucknow",
    "grocery franchise network India",
    "chain store business opportunity Lucknow",
    "franchise portfolio expansion UP",
    "second store franchise Lucknow",
    "retail chain investor Lucknow",
    "grocery brand expansion UP",
    "franchise multi-location model",
    "supermarket chain business India",
    "growing franchise network Lucknow",
    "multi-city franchise opportunity UP",
    "Buyzaar Mart franchise network",
    "franchise scalability Lucknow",
    "retail chain ownership India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/grocery-chain-franchise-in-lucknow",
  },
  openGraph: {
    title: "Grocery Chain Franchise in Lucknow | The Buyzaar Mart Multi-Store Opportunity",
    description:
      "Build a grocery chain franchise in Lucknow with The Buyzaar Mart. Scalable FOCO and FOCM models, 3 store formats, centralized supply chain and full support.",
    url: "https://www.thebuyzaarmart.com/lucknow/grocery-chain-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Chain Franchise in Lucknow | The Buyzaar Mart Multi-Store Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain Franchise in Lucknow | The Buyzaar Mart Multi-Store Opportunity",
    description:
      "Build a grocery chain franchise in Lucknow with The Buyzaar Mart. Scalable FOCO and FOCM models, 3 store formats, centralized supply chain and full support.",
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