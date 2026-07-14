import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mini Mart Franchise in Agra | Buyzaar Mart Investment Guide",
  description:
    "Start a Mini Mart franchise in Agra with Buyzaar Mart. Explore investment, ideal locations, support systems, and the complete application process.",
  keywords: [
    "mini mart franchise agra",
    "small mart franchise agra",
    "grocery mart franchise agra",
    "supermarket franchise agra",
    "neighbourhood mart franchise agra",
    "daily essentials franchise agra",
    "grocery store franchise agra",
    "retail mart franchise agra",
    "mini grocery store franchise agra",
    "grocery retail franchise agra",
    "organised retail franchise agra",
    "retail business franchise agra",
    "franchise grocery store agra",
    "mart franchise opportunity agra",
    "best grocery franchise agra",
    "profitable grocery franchise agra",
    "grocery chain franchise agra",
    "branded grocery franchise agra",
    "fmcg retail franchise agra",
    "convenience store franchise agra",
    "small supermarket business agra",
    "retail store franchise agra",
    "mini retail franchise agra",
    "grocery business opportunity agra",
    "food retail franchise agra",
    "organised grocery store agra",
    "grocery outlet franchise agra",
    "retail investment agra",
    "small business franchise agra",
    "grocery shop franchise agra",
    "daily needs store franchise agra",
    "franchise business opportunity agra",
    "retail chain franchise agra",
    "modern grocery franchise agra",
    "low cost grocery franchise agra",
    "mini grocery mart agra",
    "neighbourhood grocery store agra",
    "supermarket business franchise agra",
    "retail startup franchise agra",
    "grocery business investment agra"
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/mini-mart-franchise-agra",
  },
  openGraph: {
    title: "Mini Mart Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Start a Mini Mart franchise in Agra with Buyzaar Mart. Explore investment, ideal locations, support systems, and the complete application process.",
    url: "https://www.thebuyzaarmart.com/agra/mini-mart-franchise-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Mart Franchise in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Mart Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Start a Mini Mart franchise in Agra with Buyzaar Mart. Explore investment, ideal locations, support systems, and the complete application process.",
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