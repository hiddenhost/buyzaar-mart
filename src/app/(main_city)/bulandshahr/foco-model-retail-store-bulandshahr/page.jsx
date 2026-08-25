import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Retail Store in Bulandshahr | The Buyzaar Mart",
  description:
    "Discover the FOCO retail store model in Bulandshahr with The Buyzaar Mart. Provide capital and space, let the company operate — a passive supermarket investment from ₹15 Lakh.",
  keywords: [
    "FOCO model Bulandshahr",
    "FOCO retail store Bulandshahr",
    "Buyzaar Mart Bulandshahr",
    "passive investment franchise Bulandshahr",
    "FOCO franchise UP",
    "company operated store Bulandshahr",
    "grocery store investment Bulandshahr",
    "supermarket investment Bulandshahr",
    "franchise owned company operated",
    "FOCO vs FOCM",
    "retail investment opportunity Bulandshahr",
    "franchise business Bulandshahr",
    "low investment retail store UP",
    "Mini Mart FOCO Bulandshahr",
    "Super Mart FOCO Bulandshahr",
    "Hyper Mart FOCO Bulandshahr",
    "passive income retail Bulandshahr",
    "franchise revenue share model",
    "franchise under 20 lakh Bulandshahr",
    "best retail franchise UP",
    "grocery franchise Bulandshahr",
    "daily needs store investment",
    "FMCG retail investment Bulandshahr",
    "franchise partner Bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/foco-model-retail-store-bulandshahr",
  },
  openGraph: {
    title: "FOCO Model Retail Store in Bulandshahr | The Buyzaar Mart",
    description:
      "Discover the FOCO retail store model in Bulandshahr with The Buyzaar Mart. Provide capital and space, let the company operate — a passive supermarket investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/foco-model-retail-store-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Retail Store in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Retail Store in Bulandshahr | The Buyzaar Mart",
    description:
      "Discover the FOCO retail store model in Bulandshahr with The Buyzaar Mart. Provide capital and space, let the company operate — a passive supermarket investment from ₹15 Lakh.",
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