import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Household Store Franchise Kanpur | Start with The Buyzaar Mart from ₹15 Lakh",
  description:
    "Looking for a household store franchise in Kanpur? Join The Buyzaar Mart — India's trusted FOCM supermarket franchise with full setup, supply chain, POS & ongoing support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/household-store-franchise-in-kanpur",
  },
  openGraph: {
    title:
      "Household Store Franchise Kanpur | Start with The Buyzaar Mart from ₹15 Lakh",
    description:
      "Looking for a household store franchise in Kanpur? Join The Buyzaar Mart — India's trusted FOCM supermarket franchise with full setup, supply chain, POS & ongoing support. Apply now!",
    url: "https://www.thebuyzaarmart.com/kanpur/household-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Household Store Franchise Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Household Store Franchise Kanpur | Start with The Buyzaar Mart from ₹15 Lakh",
    description:
      "Looking for a household store franchise in Kanpur? Join The Buyzaar Mart — India's trusted FOCM supermarket franchise with full setup, supply chain, POS & ongoing support. Apply now!",
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