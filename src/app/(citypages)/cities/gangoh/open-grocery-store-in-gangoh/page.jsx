import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "How to Open a Grocery Store in Gangoh | The Buyzaar Mart Step-by-Step Guide 2025",
  description:
    "Want to open a grocery store in Gangoh, Saharanpur? Discover how The Buyzaar Mart makes it easy — complete setup, training, supply chain, and low investment. Your step-by-step guide to starting a profitable grocery business in Gangoh in 2025.",
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
      "https://www.thebuyzaarmart.com/cities/gangoh/how-to-open-grocery-store-in-gangoh",
  },

  openGraph: {
    title:
      "How to Open a Grocery Store in Gangoh | The Buyzaar Mart Step-by-Step Guide 2025",
    description:
      "Want to open a grocery store in Gangoh, Saharanpur? Discover how The Buyzaar Mart makes it easy — complete setup, training, supply chain, and low investment. Your step-by-step guide to starting a profitable grocery business in Gangoh in 2025.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/how-to-open-grocery-store-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Grocery Store in Gangoh | The Buyzaar Mart Step-by-Step Guide 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Open a Grocery Store in Gangoh | The Buyzaar Mart Step-by-Step Guide 2025",
    description:
      "Want to open a grocery store in Gangoh, Saharanpur? Discover how The Buyzaar Mart makes it easy — complete setup, training, supply chain, and low investment. Your step-by-step guide to starting a profitable grocery business in Gangoh in 2025.",
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