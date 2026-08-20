import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment in Hapur | The Buyzaar Mart",
  description:
    "Explore grocery franchise investment in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, category-specific returns, and the full application process.",
  keywords: [
    "grocery franchise investment Hapur",
    "Buyzaar Mart franchise Hapur",
    "grocery retail investment Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "best grocery franchise Hapur",
    "supermarket franchise Hapur",
    "franchise fee grocery Hapur",
    "grocery franchise profit margin Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "low investment grocery franchise Hapur",
    "high return grocery franchise Hapur",
    "grocery business opportunity Hapur",
    "neighbourhood grocery store franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/grocery-franchise-investment-hapur",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Hapur | The Buyzaar Mart",
    description:
      "Explore grocery franchise investment in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, category-specific returns, and the full application process.",
    url: "https://www.thebuyzaarmart.com/hapur/grocery-franchise-investment-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Hapur | The Buyzaar Mart",
    description:
      "Explore grocery franchise investment in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, category-specific returns, and the full application process.",
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