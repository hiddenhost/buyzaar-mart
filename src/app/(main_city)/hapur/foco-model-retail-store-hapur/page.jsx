import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Retail Store in Hapur | The Buyzaar Mart",
  description:
    "Discover how a FOCO model retail store operates in Hapur with The Buyzaar Mart, covering setup, daily operations, staffing, technology, and investment details.",
  keywords: [
    "FOCO model retail store Hapur",
    "Buyzaar Mart FOCO Hapur",
    "franchise owned company operated store Hapur",
    "managed retail store Hapur",
    "FOCO grocery store Hapur",
    "passive retail store investment Hapur",
    "retail store operations Hapur",
    "Mini Mart retail store Hapur",
    "Super Mart retail store Hapur",
    "Hyper Mart retail store Hapur",
    "best FOCO retail store Hapur",
    "supermarket retail store Hapur",
    "franchise retail store Hapur",
    "franchise fee grocery Hapur",
    "organised retail store Hapur",
    "daily needs retail store Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "HNI investor retail store Hapur",
    "neighbourhood retail store Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/foco-model-retail-store-hapur",
  },
  openGraph: {
    title: "FOCO Model Retail Store in Hapur | The Buyzaar Mart",
    description:
      "Discover how a FOCO model retail store operates in Hapur with The Buyzaar Mart, covering setup, daily operations, staffing, technology, and investment details.",
    url: "https://www.thebuyzaarmart.com/hapur/foco-model-retail-store-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Retail Store in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Retail Store in Hapur | The Buyzaar Mart",
    description:
      "Discover how a FOCO model retail store operates in Hapur with The Buyzaar Mart, covering setup, daily operations, staffing, technology, and investment details.",
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