import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business Investment in Mathura | The Buyzaar Mart",
  description:
    "Start a franchise business investment in Mathura with The Buyzaar Mart. Proven grocery retail model from ₹15 lakh, FOCM and FOCO options, and full business support.",
  keywords: [
    "franchise business investment Mathura",
    "franchise business opportunity Mathura",
    "business investment UP",
    "Buyzaar Mart Mathura",
    "retail business franchise India",
    "low investment business Mathura",
    "small business franchise India",
    "franchise business cost Mathura",
    "grocery business investment India",
    "franchise business Uttar Pradesh",
    "business ownership franchise India",
    "franchise business near Vrindavan",
    "FOCM business investment",
    "FOCO franchise business India",
    "best franchise business Mathura",
    "first time business owner franchise",
    "franchise business supply chain",
    "franchise business ROI Mathura",
    "business opportunity Braj region",
    "franchise business support India",
    "how to start franchise business Mathura",
    "retail franchise business model",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/franchise-business-investment-mathura",
  },
  openGraph: {
    title: "Franchise Business Investment in Mathura | The Buyzaar Mart",
    description:
      "Start a franchise business investment in Mathura with The Buyzaar Mart. Proven grocery retail model from ₹15 lakh, FOCM and FOCO options, and full business support.",
    url: "https://www.thebuyzaarmart.com/mathura/franchise-business-investment-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Investment in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Investment in Mathura | The Buyzaar Mart",
    description:
      "Start a franchise business investment in Mathura with The Buyzaar Mart. Proven grocery retail model from ₹15 lakh, FOCM and FOCO options, and full business support.",
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