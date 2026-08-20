import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Franchise in Hapur | The Buyzaar Mart",
  description:
    "Learn how the FOCO model works for a Buyzaar Mart franchise in Hapur, including investment, returns, store formats, and the complete application process.",
  keywords: [
    "FOCO model franchise Hapur",
    "Buyzaar Mart FOCO Hapur",
    "franchise owned company operated Hapur",
    "FOCO grocery franchise Hapur",
    "managed franchise investment Hapur",
    "passive retail investment Hapur",
    "FOCM franchise Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "best FOCO franchise Hapur",
    "supermarket franchise Hapur",
    "franchise investment Hapur",
    "franchise fee grocery Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "HNI investor franchise Hapur",
    "neighbourhood store franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/foco-model-franchise-hapur",
  },
  openGraph: {
    title: "FOCO Model Franchise in Hapur | The Buyzaar Mart",
    description:
      "Learn how the FOCO model works for a Buyzaar Mart franchise in Hapur, including investment, returns, store formats, and the complete application process.",
    url: "https://www.thebuyzaarmart.com/hapur/foco-model-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Franchise in Hapur | The Buyzaar Mart",
    description:
      "Learn how the FOCO model works for a Buyzaar Mart franchise in Hapur, including investment, returns, store formats, and the complete application process.",
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