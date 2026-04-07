import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start a Profitable Grocery Business in Gangoh | The Buyzaar Mart Franchise",
  description:
    "Want to open a profitable grocery business in Gangoh? Join The Buyzaar Mart franchise and start your own Mini Mart or Hyper Mart with full support, proven FOCM model, and low-risk investment. Apply today!",
  keywords: [
    "grocery business in gangoh",
    "buyzaar mart franchise gangoh",
    "mini mart franchise gangoh",
    "hyper mart franchise gangoh",
    "grocery franchise gangoh",
    "supermarket franchise gangoh",
    "profitable grocery business gangoh",
    "the buyzaar mart gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/start-grocery-business-in-gangoh",
  },

  openGraph: {
    title: "Start a Profitable Grocery Business in Gangoh | The Buyzaar Mart Franchise",
    description:
      "Want to open a profitable grocery business in Gangoh? Join The Buyzaar Mart franchise and start your own Mini Mart or Hyper Mart with full support, proven FOCM model, and low-risk investment. Apply today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/start-grocery-business-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start a Profitable Grocery Business in Gangoh | The Buyzaar Mart Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Start a Profitable Grocery Business in Gangoh | The Buyzaar Mart Franchise",
    description:
      "Want to open a profitable grocery business in Gangoh? Join The Buyzaar Mart franchise and start your own Mini Mart or Hyper Mart with full support, proven FOCM model, and low-risk investment. Apply today!",
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