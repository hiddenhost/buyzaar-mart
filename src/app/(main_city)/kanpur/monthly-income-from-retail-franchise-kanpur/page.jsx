import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Monthly Income from Retail Franchise in Kanpur | The Buyzaar Mart",
  description:
    "Want a steady monthly income from a retail franchise in Kanpur? The Buyzaar Mart offers up to ₹3,00,000+ per month through its FOCO model with 10% revenue sharing. No operational hassle, full brand support. Start at thebuyzaarmart.com today.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/monthly-income-from-retail-franchise-kanpur",
  },
  openGraph: {
    title:
      "Monthly Income from Retail Franchise in Kanpur | The Buyzaar Mart",
    description:
      "Want a steady monthly income from a retail franchise in Kanpur? The Buyzaar Mart offers up to ₹3,00,000+ per month through its FOCO model with 10% revenue sharing. No operational hassle, full brand support. Start at thebuyzaarmart.com today.",
    url: "https://www.thebuyzaarmart.com/kanpur/monthly-income-from-retail-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Monthly Income from Retail Franchise in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Monthly Income from Retail Franchise in Kanpur | The Buyzaar Mart",
    description:
      "Want a steady monthly income from a retail franchise in Kanpur? The Buyzaar Mart offers up to ₹3,00,000+ per month through its FOCO model with 10% revenue sharing. No operational hassle, full brand support. Start at thebuyzaarmart.com today.",
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