import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Investment in Hapur | The Buyzaar Mart",
  description:
    "Explore retail franchise investment options in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, expected margins, and the complete application process.",
  keywords: [
    "retail franchise investment Hapur",
    "Buyzaar Mart franchise Hapur",
    "grocery franchise investment Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "best retail franchise Hapur",
    "supermarket franchise Hapur",
    "franchise fee grocery Hapur",
    "franchise profit margin Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "low investment franchise Hapur",
    "high return franchise Hapur",
    "retail business opportunity Hapur",
    "neighbourhood store franchise Hapur",
    "franchise investment breakdown Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/retail-franchise-investment-hapur",
  },
  openGraph: {
    title: "Retail Franchise Investment in Hapur | The Buyzaar Mart",
    description:
      "Explore retail franchise investment options in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, expected margins, and the complete application process.",
    url: "https://www.thebuyzaarmart.com/hapur/retail-franchise-investment-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Investment in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Investment in Hapur | The Buyzaar Mart",
    description:
      "Explore retail franchise investment options in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, expected margins, and the complete application process.",
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