import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start Supermarket Business Gangoh | Buyzaar Mart Franchise Guide 2026",
  description:
    "Discover how to start a supermarket business in Gangoh with low-risk franchise options like Buyzaar Mart. Get investment breakdown, FOCM model analysis, and step-by-step guide for profitable success in Uttar Pradesh. Invest smart today!",
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
    title: "Start Supermarket Business Gangoh | Buyzaar Mart Franchise Guide 2026",
    description:
      "Discover how to start a supermarket business in Gangoh with low-risk franchise options like Buyzaar Mart. Get investment breakdown, FOCM model analysis, and step-by-step guide for profitable success in Uttar Pradesh. Invest smart today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/how-to-open-grocery-store-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start Supermarket Business Gangoh | Buyzaar Mart Franchise Guide 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Start Supermarket Business Gangoh | Buyzaar Mart Franchise Guide 2026",
    description:
      "Discover how to start a supermarket business in Gangoh with low-risk franchise options like Buyzaar Mart. Get investment breakdown, FOCM model analysis, and step-by-step guide for profitable success in Uttar Pradesh. Invest smart today!",
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