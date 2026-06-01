import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Retail Store Franchise in Bareilly | Mini Mart & Super Mart | The Buyzaar Mart",
  description:
    "Start a retail store franchise in Bareilly with The Buyzaar Mart. Choose from Mini Mart or Super Mart formats starting at ₹15 Lakh. Full setup, supply chain, POS & ongoing support. Apply now at thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/retail-store-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "Retail Store Franchise in Bareilly | Mini Mart & Super Mart | The Buyzaar Mart",
    description:
      "Start a retail store franchise in Bareilly with The Buyzaar Mart. Choose from Mini Mart or Super Mart formats starting at ₹15 Lakh. Full setup, supply chain, POS & ongoing support. Apply now at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/bareilly/retail-store-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise in Bareilly | Mini Mart & Super Mart | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Store Franchise in Bareilly | Mini Mart & Super Mart | The Buyzaar Mart",
    description:
      "Start a retail store franchise in Bareilly with The Buyzaar Mart. Choose from Mini Mart or Super Mart formats starting at ₹15 Lakh. Full setup, supply chain, POS & ongoing support. Apply now at thebuyzaarmart.com.",
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