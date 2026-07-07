import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Franchise Opportunity Varanasi | Buyzaar Mart 2026",
  description:
    "Explore the grocery mart franchise opportunity in Varanasi with Buyzaar Mart. Check investment, store area, support, and how to apply for your own store.",
  keywords: [
    "grocery mart franchise Varanasi",
    "grocery franchise opportunity Varanasi",
    "Buyzaar Mart Varanasi",
    "supermarket franchise UP",
    "grocery store business Varanasi",
    "daily needs store franchise",
    "retail franchise Varanasi",
    "Mini Mart Super Mart Hyper Mart",
    "grocery franchise investment India",
    "Buyzaar Mart franchise cost",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/grocery-mart-franchise-opportunity-varanasi",
  },
  openGraph: {
    title: "Grocery Mart Franchise Opportunity Varanasi | Buyzaar Mart 2026",
    description:
      "Explore the grocery mart franchise opportunity in Varanasi with Buyzaar Mart. Check investment, store area, support, and how to apply for your own store.",
    url: "https://www.thebuyzaarmart.com/varanasi/grocery-mart-franchise-opportunity-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Franchise Opportunity Varanasi | Buyzaar Mart 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Franchise Opportunity Varanasi | Buyzaar Mart 2026",
    description:
      "Explore the grocery mart franchise opportunity in Varanasi with Buyzaar Mart. Check investment, store area, support, and how to apply for your own store.",
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