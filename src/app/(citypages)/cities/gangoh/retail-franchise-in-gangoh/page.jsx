import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Retail Franchise in Gangoh – The Buyzaar Mart SuperMart & MiniMart FOCM",
  description:
    "Start a profitable retail franchise in Gangoh with The Buyzaar Mart. Explore SuperMart & MiniMart FOCM models, low investment, and high returns for modern grocery stores.",
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
      "https://www.thebuyzaarmart.com/cities/gangoh/retail-franchise-in-gangoh",
  },

  openGraph: {
    title:
      "Retail Franchise in Gangoh – The Buyzaar Mart SuperMart & MiniMart FOCM",
    description:
      "Start a profitable retail franchise in Gangoh with The Buyzaar Mart. Explore SuperMart & MiniMart FOCM models, low investment, and high returns for modern grocery stores.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/retail-franchise-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise in Gangoh – The Buyzaar Mart SuperMart & MiniMart FOCM",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Retail Franchise in Gangoh – The Buyzaar Mart SuperMart & MiniMart FOCM",
    description:
      "Start a profitable retail franchise in Gangoh with The Buyzaar Mart. Explore SuperMart & MiniMart FOCM models, low investment, and high returns for modern grocery stores.",
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