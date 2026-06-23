import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Retail Franchise in Lucknow – Partner with The Buyzaar Mart",
  description:
    "Looking for an FMCG retail franchise in Lucknow? The Buyzaar Mart offers proven franchise models with strong margins, supply chain support, and brand backing. Explore now.",
  keywords: [
    "FMCG retail franchise Lucknow",
    "FMCG franchise opportunity Lucknow",
    "retail franchise business Lucknow",
    "grocery FMCG franchise UP",
    "The Buyzaar Mart franchise Lucknow",
    "FMCG store franchise investment",
    "best retail franchise Lucknow",
    "franchise FMCG brand India"
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/fmcg-retail-franchise-lucknow"
  },
  openGraph: {
    title: "FMCG Retail Franchise in Lucknow – Partner with The Buyzaar Mart",
    description:
      "Looking for an FMCG retail franchise in Lucknow? The Buyzaar Mart offers proven franchise models with strong margins, supply chain support, and brand backing. Explore now.",
    url: "https://www.thebuyzaarmart.com/lucknow/fmcg-retail-franchise-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Retail Franchise in Lucknow – Partner with The Buyzaar Mart"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Retail Franchise in Lucknow – Partner with The Buyzaar Mart",
    description:
      "Looking for an FMCG retail franchise in Lucknow? The Buyzaar Mart offers proven franchise models with strong margins, supply chain support, and brand backing. Explore now.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"]
  },
  icons: {
    icon: "/images/buyzaar-logo.png"
  }
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