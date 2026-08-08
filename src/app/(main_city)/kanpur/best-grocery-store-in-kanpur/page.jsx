import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Store in Kanpur | The Buyzaar Mart – Quality & Value",
  description:
    "Looking for the best grocery store in Kanpur? Discover why The Buyzaar Mart is the top choice for quality, pricing, and a modern shopping experience.",
  keywords: [
    "best grocery store in Kanpur",
    "grocery store Kanpur",
    "supermarket in Kanpur",
    "best supermarket in Kanpur",
    "grocery shop in Kanpur",
    "grocery stores near me Kanpur",
    "supermarket near me Kanpur",
    "daily needs store Kanpur",
    "departmental store Kanpur",
    "grocery mart Kanpur",
    "mini mart Kanpur",
    "local grocery store Kanpur",
    "neighbourhood grocery store Kanpur",
    "grocery shopping Kanpur",
    "monthly grocery shopping Kanpur",
    "online grocery Kanpur",
    "grocery delivery Kanpur",
    "FMCG products Kanpur",
    "household essentials Kanpur",
    "home essentials store Kanpur",
    "fresh groceries Kanpur",
    "affordable grocery store Kanpur",
    "family supermarket Kanpur",
    "trusted grocery store Kanpur",
    "organized grocery store Kanpur",
    "modern grocery store Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/best-grocery-store-in-kanpur",
  },
  openGraph: {
    title: "Best Grocery Store in Kanpur | The Buyzaar Mart – Quality & Value",
    description:
      "Looking for the best grocery store in Kanpur? Discover why The Buyzaar Mart is the top choice for quality, pricing, and a modern shopping experience.",
    url: "https://www.thebuyzaarmart.com/kanpur/best-grocery-store-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Store in Kanpur | The Buyzaar Mart – Quality & Value",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Store in Kanpur | The Buyzaar Mart – Quality & Value",
    description:
      "Looking for the best grocery store in Kanpur? Discover why The Buyzaar Mart is the top choice for quality, pricing, and a modern shopping experience.",
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