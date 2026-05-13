import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Retail Franchise Delhi-NCR | Grocery & Supermarket Franchise Opportunity – The Buyzaar Mart",
  description:
    "Looking for a retail franchise in Delhi-NCR? The Buyzaar Mart offers a proven grocery & supermarket franchise model starting from ₹15 Lakh. FOCM model, full support, POS & supply chain included. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi-ncr/retail-franchise-delhi-ncr",
  },
  openGraph: {
    title:
      "Retail Franchise Delhi-NCR | Grocery & Supermarket Franchise Opportunity – The Buyzaar Mart",
    description:
      "Looking for a retail franchise in Delhi-NCR? The Buyzaar Mart offers a proven grocery & supermarket franchise model starting from ₹15 Lakh. FOCM model, full support, POS & supply chain included. Apply now!",
    url: "https://www.thebuyzaarmart.com/delhi-ncr/retail-franchise-delhi-ncr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Delhi-NCR | Grocery & Supermarket Franchise Opportunity – The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Franchise Delhi-NCR | Grocery & Supermarket Franchise Opportunity – The Buyzaar Mart",
    description:
      "Looking for a retail franchise in Delhi-NCR? The Buyzaar Mart offers a proven grocery & supermarket franchise model starting from ₹15 Lakh. FOCM model, full support, POS & supply chain included. Apply now!",
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