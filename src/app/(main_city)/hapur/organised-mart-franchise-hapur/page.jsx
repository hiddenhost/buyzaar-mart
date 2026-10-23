import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Mart Franchise Hapur | The Buyzaar Mart",
  description:
    "Open an organised mart franchise in Hapur with The Buyzaar Mart. POS billing, uniform store design, trained support, no retail experience needed. Total investment from ₹15 lakh.",
  keywords: [
    "organised mart franchise hapur",
    "organized mart franchise hapur",
    "organised retail franchise hapur",
    "supermarket franchise hapur",
    "mart franchise in hapur",
    "grocery franchise hapur",
    "buyzaar mart franchise hapur",
    "the buyzaar mart",
    "modern retail franchise hapur",
    "branded mart franchise hapur",
    "mini mart franchise hapur",
    "super mart franchise hapur",
    "hyper mart franchise hapur",
    "FOCM franchise hapur",
    "FOCO franchise hapur",
    "low investment mart franchise",
    "mart franchise without experience",
    "supermarket franchise uttar pradesh",
    "mart franchise NCR",
    "organised retail business india",
    "POS enabled supermarket franchise",
    "franchise business in hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/organised-mart-franchise-hapur",
  },
  openGraph: {
    title: "Organised Mart Franchise Hapur | The Buyzaar Mart",
    description:
      "Open an organised mart franchise in Hapur with The Buyzaar Mart. POS billing, uniform store design, trained support, no retail experience needed. Total investment from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/hapur/organised-mart-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise Hapur | The Buyzaar Mart",
    description:
      "Open an organised mart franchise in Hapur with The Buyzaar Mart. POS billing, uniform store design, trained support, no retail experience needed. Total investment from ₹15 lakh.",
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