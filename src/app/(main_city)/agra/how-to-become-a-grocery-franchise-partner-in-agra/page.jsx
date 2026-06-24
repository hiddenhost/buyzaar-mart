import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Become a Grocery Franchise Partner in Agra | Buyzaar Mart",
  description:
    "Discover how to become a grocery franchise partner in Agra with The Buyzaar Mart. Step-by-step process, investment details, and ongoing support.",
  keywords: [
    "grocery franchise partner agra",
    "become a franchise partner",
    "grocery franchise in agra",
    "the buyzaar mart franchise",
    "grocery store franchise opportunity",
    "supermarket franchise agra",
    "retail franchise partnership",
    "grocery business franchise india",
    "franchise investment agra",
    "low investment grocery franchise",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/how-to-become-a-grocery-franchise-partner-in-agra",
  },
  openGraph: {
    title: "How to Become a Grocery Franchise Partner in Agra | Buyzaar Mart",
    description:
      "Discover how to become a grocery franchise partner in Agra with The Buyzaar Mart. Step-by-step process, investment details, and ongoing support.",
    url: "https://www.thebuyzaarmart.com/agra/how-to-become-a-grocery-franchise-partner-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Become a Grocery Franchise Partner in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become a Grocery Franchise Partner in Agra | Buyzaar Mart",
    description:
      "Discover how to become a grocery franchise partner in Agra with The Buyzaar Mart. Step-by-step process, investment details, and ongoing support.",
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