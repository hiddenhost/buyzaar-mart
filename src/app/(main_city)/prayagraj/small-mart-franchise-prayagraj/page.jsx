import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Small Mart Franchise in Prayagraj | Buyzaar Mart",
  description:
    "Start a small mart franchise in Prayagraj with Buyzaar Mart. Low investment, simple operations, and strong local demand make it a smart retail choice.",
  keywords: [
    "small mart franchise Prayagraj",
    "Buyzaar Mart franchise",
    "small retail store franchise",
    "low investment franchise Prayagraj",
    "convenience store franchise India",
    "mini mart franchise UP",
    "grocery mart franchise Prayagraj",
    "budget franchise business India",
    "compact store franchise",
    "retail franchise opportunity Prayagraj",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/small-mart-franchise-prayagraj",
  },
  openGraph: {
    title: "Small Mart Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Start a small mart franchise in Prayagraj with Buyzaar Mart. Low investment, simple operations, and strong local demand make it a smart retail choice.",
    url: "https://www.thebuyzaarmart.com/prayagraj/small-mart-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Small Mart Franchise in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Mart Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Start a small mart franchise in Prayagraj with Buyzaar Mart. Low investment, simple operations, and strong local demand make it a smart retail choice.",
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