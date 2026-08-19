import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mini Mart Franchise in Moradabad | The Buyzaar Mart – Start from ₹15 Lakh",
  description:
    "Open a Mini Mart franchise in Moradabad with The Buyzaar Mart. Compact 600-1,000 sq ft format, low investment, full brand and operational support.",
  keywords: [
    "mini mart franchise moradabad",
    "buyzaar mart mini mart",
    "small grocery franchise moradabad",
    "low investment franchise moradabad",
    "neighbourhood store franchise moradabad",
    "mini supermarket moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/mini-mart-franchise-in-moradabad",
  },
  openGraph: {
    title:
      "Mini Mart Franchise in Moradabad | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Open a Mini Mart franchise in Moradabad with The Buyzaar Mart. Compact 600-1,000 sq ft format, low investment, full brand and operational support.",
    url: "https://www.thebuyzaarmart.com/moradabad/mini-mart-franchise-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Mart Franchise in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mini Mart Franchise in Moradabad | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Open a Mini Mart franchise in Moradabad with The Buyzaar Mart. Compact 600-1,000 sq ft format, low investment, full brand and operational support.",
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