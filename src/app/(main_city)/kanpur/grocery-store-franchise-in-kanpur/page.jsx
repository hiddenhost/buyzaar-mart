import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise in Kanpur | The Buyzaar Mart — Invest from ₹15 Lakh",
  description:
    "Start your own grocery store franchise in Kanpur with The Buyzaar Mart. Trusted FOCM model, ₹15 Lakh investment, full setup support, supply chain & marketing included. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/grocery-store-franchise-in-kanpur",
  },
  openGraph: {
    title: "Grocery Store Franchise in Kanpur | The Buyzaar Mart — Invest from ₹15 Lakh",
    description:
      "Start your own grocery store franchise in Kanpur with The Buyzaar Mart. Trusted FOCM model, ₹15 Lakh investment, full setup support, supply chain & marketing included. Apply now!",
    url: "https://www.thebuyzaarmart.com/kanpur/grocery-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise in Kanpur | The Buyzaar Mart — Invest from ₹15 Lakh",
    description:
      "Start your own grocery store franchise in Kanpur with The Buyzaar Mart. Trusted FOCM model, ₹15 Lakh investment, full setup support, supply chain & marketing included. Apply now!",
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