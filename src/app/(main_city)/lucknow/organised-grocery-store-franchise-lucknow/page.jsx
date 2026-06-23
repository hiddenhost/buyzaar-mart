import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Grocery Store Franchise in Lucknow | The Buyzaar Mart",
  description:
    "Looking for a profitable organised grocery store franchise in Lucknow? The Buyzaar Mart offers a proven FOCM model with low investment, strong margins, and full support. Start your franchise today.",
  keywords: [
    "grocery franchise opportunity Lucknow",
    "supermarket franchise Lucknow",
    "FMCG franchise Lucknow",
    "retail franchise business Lucknow",
    "The Buyzaar Mart Lucknow franchise",
    "grocery store business Lucknow",
    "franchise investment Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/organised-grocery-store-franchise-lucknow",
  },
  openGraph: {
    title: "Organised Grocery Store Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Looking for a profitable organised grocery store franchise in Lucknow? The Buyzaar Mart offers a proven FOCM model with low investment, strong margins, and full support. Start your franchise today.",
    url: "https://www.thebuyzaarmart.com/lucknow/organised-grocery-store-franchise-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Grocery Store Franchise in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Grocery Store Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Looking for a profitable organised grocery store franchise in Lucknow? The Buyzaar Mart offers a proven FOCM model with low investment, strong margins, and full support. Start your franchise today.",
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