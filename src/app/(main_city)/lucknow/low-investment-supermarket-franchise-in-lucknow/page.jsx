import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Low Investment Supermarket Franchise in Lucknow | The Buyzaar Mart",
  description:
    "Start a low investment supermarket franchise in Lucknow with The Buyzaar Mart. Compact Mini Mart format, FOCO and FOCM options, full brand and supply chain support.",
  keywords: [
    "low investment franchise Lucknow",
    "low investment supermarket Lucknow",
    "mini mart franchise Lucknow",
    "The Buyzaar Mart low investment",
    "affordable grocery franchise Lucknow",
    "small budget franchise business UP",
    "retail franchise Lucknow",
    "franchise under 15 lakh Lucknow",
    "budget grocery franchise India",
    "low cost supermarket franchise UP",
    "compact store franchise Lucknow",
    "first time entrepreneur franchise Lucknow",
    "kirana to franchise conversion",
    "FOCO low investment Lucknow",
    "FOCM low investment Lucknow",
    "small investment retail business Lucknow",
    "grocery franchise for beginners",
    "neighbourhood store franchise Lucknow",
    "low capital retail franchise India",
    "affordable FMCG franchise UP",
    "entry level supermarket franchise",
    "small format grocery store franchise",
    "low risk franchise business Lucknow",
    "budget friendly retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/low-investment-supermarket-franchise-in-lucknow",
  },
  openGraph: {
    title: "Low Investment Supermarket Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Start a low investment supermarket franchise in Lucknow with The Buyzaar Mart. Compact Mini Mart format, FOCO and FOCM options, full brand and supply chain support.",
    url: "https://www.thebuyzaarmart.com/lucknow/low-investment-supermarket-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Supermarket Franchise in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Investment Supermarket Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Start a low investment supermarket franchise in Lucknow with The Buyzaar Mart. Compact Mini Mart format, FOCO and FOCM options, full brand and supply chain support.",
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