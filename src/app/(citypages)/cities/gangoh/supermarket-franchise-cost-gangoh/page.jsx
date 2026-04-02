import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Supermarket Franchise Cost Gangoh | The Buyzaar Mart Hypermart Opportunity 2025",
  description:
    "Planning a supermarket franchise in Gangoh, Saharanpur? Discover The Buyzaar Mart's hypermart FOCM investment model, costs, ROI, and why Gangoh is a top retail opportunity in Western UP in 2025.",
  keywords: [
    "retail franchise in gangoh",
    "the buyzaar mart gangoh",
    "supermart franchise gangoh",
    "minimart franchise gangoh",
    "grocery franchise gangoh",
    "modern grocery store franchise in gangoh",
    "retail business gangoh",
    "supermarket franchise gangoh",
    "buyzaar mart focm",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-franchise-cost-gangoh",
  },

  openGraph: {
    title:
      "Supermarket Franchise Cost Gangoh | The Buyzaar Mart Hypermart Opportunity 2025",
    description:
      "Planning a supermarket franchise in Gangoh, Saharanpur? Discover The Buyzaar Mart's hypermart FOCM investment model, costs, ROI, and why Gangoh is a top retail opportunity in Western UP in 2025.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-franchise-cost-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Cost Gangoh | The Buyzaar Mart Hypermart Opportunity 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Supermarket Franchise Cost Gangoh | The Buyzaar Mart Hypermart Opportunity 2025",
    description:
      "Planning a supermarket franchise in Gangoh, Saharanpur? Discover The Buyzaar Mart's hypermart FOCM investment model, costs, ROI, and why Gangoh is a top retail opportunity in Western UP in 2025.",
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