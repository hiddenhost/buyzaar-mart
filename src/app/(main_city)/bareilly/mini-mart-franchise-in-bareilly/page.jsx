import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mini Mart Franchise in Bareilly | Buyzaar Mart",
  description:
    "Start a Mini Mart franchise in Bareilly with Buyzaar Mart. Low investment, compact format, strong local demand. Explore the opportunity today!",
  keywords: [
    "mini mart franchise Bareilly",
    "Buyzaar Mart mini mart",
    "small grocery franchise Bareilly",
    "low investment franchise Bareilly",
    "mini supermarket franchise",
    "mart franchise opportunity Bareilly",
    "grocery store franchise UP",
    "compact retail franchise",
    "mini mart investment India",
    "Buyzaar Mart franchise cost",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/mini-mart-franchise-in-bareilly",
  },
  openGraph: {
    title: "Mini Mart Franchise in Bareilly | Buyzaar Mart",
    description:
      "Start a Mini Mart franchise in Bareilly with Buyzaar Mart. Low investment, compact format, strong local demand. Explore the opportunity today!",
    url: "https://www.thebuyzaarmart.com/bareilly/mini-mart-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Mart Franchise in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Mart Franchise in Bareilly | Buyzaar Mart",
    description:
      "Start a Mini Mart franchise in Bareilly with Buyzaar Mart. Low investment, compact format, strong local demand. Explore the opportunity today!",
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