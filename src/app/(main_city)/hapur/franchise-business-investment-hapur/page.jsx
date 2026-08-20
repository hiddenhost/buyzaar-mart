import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business Investment in Hapur | The Buyzaar Mart",
  description:
    "Explore franchise business investment in Hapur with The Buyzaar Mart. Learn why the market is favourable, business models, formats, returns, and how to get started.",
  keywords: [
    "franchise business investment Hapur",
    "Buyzaar Mart franchise business Hapur",
    "business investment opportunity Hapur",
    "grocery franchise business Hapur",
    "retail franchise business Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "best franchise business Hapur",
    "supermarket franchise business Hapur",
    "franchise fee grocery Hapur",
    "franchise profit margin Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "franchise apply Hapur",
    "low investment business Hapur",
    "first mover business opportunity Hapur",
    "neighbourhood store franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/franchise-business-investment-hapur",
  },
  openGraph: {
    title: "Franchise Business Investment in Hapur | The Buyzaar Mart",
    description:
      "Explore franchise business investment in Hapur with The Buyzaar Mart. Learn why the market is favourable, business models, formats, returns, and how to get started.",
    url: "https://www.thebuyzaarmart.com/hapur/franchise-business-investment-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Investment in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Investment in Hapur | The Buyzaar Mart",
    description:
      "Explore franchise business investment in Hapur with The Buyzaar Mart. Learn why the market is favourable, business models, formats, returns, and how to get started.",
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