import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Grocery Store in Bulandshahr | The Buyzaar Mart",
  description:
    "Start a FOCM model grocery store in Bulandshahr with The Buyzaar Mart. Own a branded supermarket from ₹15 Lakh while the company manages daily grocery operations.",
  keywords: [
    "FOCM grocery store Bulandshahr",
    "grocery store Bulandshahr",
    "Buyzaar Mart Bulandshahr",
    "grocery business Bulandshahr",
    "supermarket Bulandshahr",
    "FOCM model grocery",
    "organised retail Bulandshahr",
    "grocery franchise UP",
    "start grocery store Bulandshahr",
    "kirana to supermarket Bulandshahr",
    "daily needs store Bulandshahr",
    "FMCG store Bulandshahr",
    "grocery investment Bulandshahr",
    "Mini Mart Bulandshahr",
    "Super Mart Bulandshahr",
    "Hyper Mart Bulandshahr",
    "company managed grocery store",
    "grocery shop franchise UP",
    "best grocery store Bulandshahr",
    "neighbourhood supermarket Bulandshahr",
    "grocery store cost Bulandshahr",
    "open grocery store UP",
    "grocery retail business Bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/focm-model-grocery-store-bulandshahr",
  },
  openGraph: {
    title: "FOCM Model Grocery Store in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a FOCM model grocery store in Bulandshahr with The Buyzaar Mart. Own a branded supermarket from ₹15 Lakh while the company manages daily grocery operations.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/focm-model-grocery-store-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Grocery Store in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Grocery Store in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a FOCM model grocery store in Bulandshahr with The Buyzaar Mart. Own a branded supermarket from ₹15 Lakh while the company manages daily grocery operations.",
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