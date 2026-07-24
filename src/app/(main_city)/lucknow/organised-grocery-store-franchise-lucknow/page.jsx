import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Grocery Store Franchise in Lucknow | The Buyzaar Mart",
  description:
    "Looking for a profitable organised grocery store franchise in Lucknow? The Buyzaar Mart offers a proven FOCM model with low investment, strong margins, and full support. Start your franchise today.",
  keywords: [
    "organized grocery store franchise lucknow",
    "grocery franchise opportunity Lucknow",
    "grocery franchise in Lucknow",
    "Lucknow grocery franchise",
    "The Buyzaar Mart Lucknow",
    "The Buyzaar Mart franchise",
    "grocery store franchise in Lucknow",
    "supermarket franchise in Lucknow",
    "mini mart franchise in Lucknow",
    "super mart franchise in Lucknow",
    "retail franchise in Lucknow",
    "organized retail franchise in Lucknow",
    "daily needs franchise in Lucknow",
    "best grocery franchise in Lucknow",
    "top grocery franchise in Lucknow",
    "low investment grocery franchise Lucknow",
    "affordable grocery franchise Lucknow",
    "profitable grocery franchise Lucknow",
    "branded grocery franchise Lucknow",
    "FMCG franchise opportunity Lucknow",
    "grocery business opportunity Lucknow",
    "grocery retail franchise Lucknow",
    "franchise grocery store Lucknow",
    "grocery chain franchise Lucknow",
    "modern retail franchise Lucknow",
    "convenience store franchise Lucknow",
    "neighborhood mart franchise Lucknow",
    "daily essentials franchise Lucknow",
    "retail business opportunity Luckn",
    "family grocery franchise Lucknow",
    "local grocery franchise Lucknow",
    "small grocery franchise Lucknow",
    "retail chain franchise Lucknow",
    "branded retail franchise Lucknow",
    "grocery outlet franchise Lucknow",
    "grocery startup franchise Lucknow"
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