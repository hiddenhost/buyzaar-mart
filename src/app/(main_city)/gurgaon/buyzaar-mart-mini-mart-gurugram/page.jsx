import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Mini Mart Franchise in Gurugram | Low Investment Retail",
  description:
    "Start a Buyzaar Mart Mini Mart franchise in Gurugram. Low investment, high-frequency daily retail format with full company support, FSSAI license & more.",
  keywords: [
    "Buyzaar Mart Gurugram",
    "mini mart franchise Gurugram",
    "low investment supermarket franchise",
    "grocery franchise Gurugram",
    "Buyzaar Mart franchise cost",
    "daily needs store franchise",
    "FOCM franchise model",
    "supermarket franchise Lucknow",
    "low investment franchise India",
    "retail business franchise Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/buyzaar-mart-mini-mart-gurugram",
  },
  openGraph: {
    title: "Buyzaar Mart Mini Mart Franchise in Gurugram | Low Investment Retail",
    description:
      "Start a Buyzaar Mart Mini Mart franchise in Gurugram. Low investment, high-frequency daily retail format with full company support, FSSAI license & more.",
    url: "https://www.thebuyzaarmart.com/gurgaon/buyzaar-mart-mini-mart-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Mini Mart Franchise in Gurugram | Low Investment Retail",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Mini Mart Franchise in Gurugram | Low Investment Retail",
    description:
      "Start a Buyzaar Mart Mini Mart franchise in Gurugram. Low investment, high-frequency daily retail format with full company support, FSSAI license & more.",
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