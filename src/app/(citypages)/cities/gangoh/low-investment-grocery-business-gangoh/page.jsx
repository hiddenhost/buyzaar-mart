import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Low Investment Grocery Business Gangoh | Buyzaar Mart",
  description:
    "Start a low investment grocery business in Gangoh with The Buyzaar Mart franchise. 3 flexible formats from ₹15L, full support, 18–20% margins. Apply today!",
  keywords: [
    "grocery store investment gangoh",
    "buyzaar mart gangoh",
    "supermart investment gangoh",
    "minimart investment gangoh",
    "focm model gangoh",
    "grocery franchise gangoh",
    "retail investment gangoh",
    "supermarket franchise uttar pradesh",
    "buyzaar mart supermart",
    "buyzaar mart minimart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/low-investment-grocery-business-in-gangoh",
  },

  openGraph: {
    title: "Low Investment Grocery Business Gangoh | Buyzaar Mart",
    description:
      "Start a low investment grocery business in Gangoh with The Buyzaar Mart franchise. 3 flexible formats from ₹15L, full support, 18–20% margins. Apply today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/low-investment-grocery-business-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Grocery Business Gangoh | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Low Investment Grocery Business Gangoh | Buyzaar Mart",
    description:
      "Start a low investment grocery business in Gangoh with The Buyzaar Mart franchise. 3 flexible formats from ₹15L, full support, 18–20% margins. Apply today!",
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