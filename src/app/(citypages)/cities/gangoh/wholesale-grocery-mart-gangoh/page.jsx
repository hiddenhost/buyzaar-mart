import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Wholesale Grocery Mart Gangoh | The Buyzaar Mart — Best Prices, Trusted Brands",
  description:
    "Looking for a wholesale grocery mart in Gangoh? The Buyzaar Mart offers bulk FMCG, daily essentials & trusted brands at value prices. Shop or open your own Hyper Mart franchise — apply at thebuyzaarmart.com.",
  keywords: [
    "mart franchise gangoh",
    "the buyzaar mart gangoh",
    "grocery mart franchise gangoh",
    "supermarket franchise gangoh",
    "buyzaar mart franchise gangoh",
    "focm franchise gangoh",
    "open mart in gangoh",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/wholesale-grocery-mart-gangoh",
  },

  openGraph: {
    title:
      "Wholesale Grocery Mart Gangoh | The Buyzaar Mart — Best Prices, Trusted Brands",
    description:
      "Looking for a wholesale grocery mart in Gangoh? The Buyzaar Mart offers bulk FMCG, daily essentials & trusted brands at value prices. Shop or open your own Hyper Mart franchise — apply at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/wholesale-grocery-mart-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Wholesale Grocery Mart Gangoh | The Buyzaar Mart — Best Prices, Trusted Brands",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Wholesale Grocery Mart Gangoh | The Buyzaar Mart — Best Prices, Trusted Brands",
    description:
      "Looking for a wholesale grocery mart in Gangoh? The Buyzaar Mart offers bulk FMCG, daily essentials & trusted brands at value prices. Shop or open your own Hyper Mart franchise — apply at thebuyzaarmart.com.",
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