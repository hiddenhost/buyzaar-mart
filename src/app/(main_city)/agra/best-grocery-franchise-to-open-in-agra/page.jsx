import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise to Open in Agra | The Buyzaar Mart",
  description:
    "Looking for the best grocery franchise in Agra? Discover why The Buyzaar Mart offers low investment, strong support, and high growth potential.",
  keywords: [
    "best grocery franchise in agra",
    "top grocery franchise agra",
    "grocery franchise opportunities",
    "the buyzaar mart franchise",
    "low investment grocery franchise",
    "supermarket franchise agra",
    "grocery store franchise india",
    "best franchise to open in agra",
    "retail franchise agra",
    "profitable grocery franchise",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/best-grocery-franchise-to-open-in-agra",
  },
  openGraph: {
    title: "Best Grocery Franchise to Open in Agra | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Agra? Discover why The Buyzaar Mart offers low investment, strong support, and high growth potential.",
    url: "https://www.thebuyzaarmart.com/agra/best-grocery-franchise-to-open-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise to Open in Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise to Open in Agra | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Agra? Discover why The Buyzaar Mart offers low investment, strong support, and high growth potential.",
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