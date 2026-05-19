import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Top Franchise Opportunity in Kanpur | The Buyzaar Mart FOCM Model",
  description:
    "Looking for the best franchise opportunity in Kanpur? The Buyzaar Mart offers a proven FOCM grocery supermarket franchise starting from ₹15 Lakh. Full setup, supply chain, POS & ongoing support included. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-chain-franchise-kanpur",
  },
  openGraph: {
    title:
      "Top Franchise Opportunity in Kanpur | The Buyzaar Mart FOCM Model",
    description:
      "Looking for the best franchise opportunity in Kanpur? The Buyzaar Mart offers a proven FOCM grocery supermarket franchise starting from ₹15 Lakh. Full setup, supply chain, POS & ongoing support included. Apply now.",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-chain-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Top Franchise Opportunity in Kanpur | The Buyzaar Mart FOCM Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Franchise Opportunity in Kanpur | The Buyzaar Mart FOCM Model",
    description:
      "Looking for the best franchise opportunity in Kanpur? The Buyzaar Mart offers a proven FOCM grocery supermarket franchise starting from ₹15 Lakh. Full setup, supply chain, POS & ongoing support included. Apply now.",
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