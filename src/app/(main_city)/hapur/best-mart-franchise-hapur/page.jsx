import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Mart Franchise in Hapur | The Buyzaar Mart",
  description:
    "Looking for the best mart franchise in Hapur? Open a Buyzaar Mart with POS billing, supply chain and full support. Total investment from ₹15 Lakh. Apply now.",
  keywords: [
    "best mart franchise Hapur",
    "best mart franchise in Hapur",
    "top mart franchise Hapur",
    "mart franchise Hapur",
    "supermarket franchise Hapur",
    "Buyzaar Mart franchise Hapur",
    "The Buyzaar Mart Hapur",
    "grocery mart franchise Hapur",
    "retail mart franchise Hapur",
    "low investment mart franchise",
    "mart franchise from 15 lakh",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "FOCM mart franchise Hapur",
    "FOCO mart franchise Hapur",
    "organised mart franchise Hapur",
    "branded mart franchise Hapur",
    "neighbourhood mart franchise Hapur",
    "mart franchise with full support",
    "mart franchise with training",
    "mart franchise Delhi NCR",
    "mart franchise Uttar Pradesh",
    "franchise business opportunity Hapur",
    "FMCG mart franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/best-mart-franchise-hapur",
  },
  openGraph: {
    title: "Best Mart Franchise in Hapur | The Buyzaar Mart",
    description:
      "Looking for the best mart franchise in Hapur? Open a Buyzaar Mart with POS billing, supply chain and full support. Total investment from ₹15 Lakh. Apply now.",
    url: "https://www.thebuyzaarmart.com/hapur/best-mart-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mart Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mart Franchise in Hapur | The Buyzaar Mart",
    description:
      "Looking for the best mart franchise in Hapur? Open a Buyzaar Mart with POS billing, supply chain and full support. Total investment from ₹15 Lakh. Apply now.",
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