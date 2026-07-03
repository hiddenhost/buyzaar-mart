import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mini Mart Franchise in Prayagraj | The Buyzaar Mart",
  description:
    "Start a Mini Mart franchise in Prayagraj with The Buyzaar Mart. Low investment, full supply chain support, and a complete operational system for first-time investors.",
  keywords: [
    "Mini Mart franchise Prayagraj",
    "Mini Mart business UP",
    "grocery store franchise Prayagraj",
    "The Buyzaar Mart Mini Mart",
    "low investment grocery franchise",
    "entry level mart franchise Prayagraj",
    "small grocery store franchise UP",
    "FOCM Mini Mart franchise",
    "colony grocery franchise Prayagraj",
    "affordable mart franchise UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/mini-mart-franchise-prayagraj",
  },
  openGraph: {
    title: "Mini Mart Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Start a Mini Mart franchise in Prayagraj with The Buyzaar Mart. Low investment, full supply chain support, and a complete operational system for first-time investors.",
    url: "https://www.thebuyzaarmart.com/prayagraj/mini-mart-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Mart Franchise in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Mart Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Start a Mini Mart franchise in Prayagraj with The Buyzaar Mart. Low investment, full supply chain support, and a complete operational system for first-time investors.",
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