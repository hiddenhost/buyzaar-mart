import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Chain Franchise Kanpur | The Buyzaar Mart",
  description:
    "Looking for a profitable retail chain franchise in Kanpur? Join The Buyzaar Mart — India's trusted grocery & supermarket franchise with full setup support, supply chain, POS, and low investment starting ₹15 Lakh. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-chain-franchise-in-kanpur",
  },
  openGraph: {
    title: "Retail Chain Franchise Kanpur | The Buyzaar Mart",
    description:
      "Looking for a profitable retail chain franchise in Kanpur? Join The Buyzaar Mart — India's trusted grocery & supermarket franchise with full setup support, supply chain, POS, and low investment starting ₹15 Lakh. Apply now.",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-chain-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Chain Franchise Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Chain Franchise Kanpur | The Buyzaar Mart",
    description:
      "Looking for a profitable retail chain franchise in Kanpur? Join The Buyzaar Mart — India's trusted grocery & supermarket franchise with full setup support, supply chain, POS, and low investment starting ₹15 Lakh. Apply now.",
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