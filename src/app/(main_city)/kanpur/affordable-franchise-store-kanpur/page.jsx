import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Affordable Franchise Store Kanpur | The Buyzaar Mart",
  description:
    "Looking for an affordable franchise store in Kanpur? Join The Buyzaar Mart and start your own supermarket business from just ₹15 Lakh with full setup, supply chain, POS & ongoing support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/affordable-franchise-store-kanpur",
  },
  openGraph: {
    title: "Affordable Franchise Store Kanpur | The Buyzaar Mart",
    description:
      "Looking for an affordable franchise store in Kanpur? Join The Buyzaar Mart and start your own supermarket business from just ₹15 Lakh with full setup, supply chain, POS & ongoing support. Apply now!",
    url: "https://www.thebuyzaarmart.com/kanpur/affordable-franchise-store-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Affordable Franchise Store Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Franchise Store Kanpur | The Buyzaar Mart",
    description:
      "Looking for an affordable franchise store in Kanpur? Join The Buyzaar Mart and start your own supermarket business from just ₹15 Lakh with full setup, supply chain, POS & ongoing support. Apply now!",
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