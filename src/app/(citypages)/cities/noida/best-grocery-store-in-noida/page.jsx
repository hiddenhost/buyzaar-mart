import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Best Grocery Store in Noida | The Buyzaar Mart – Fresh & Affordable",
  description:
    "Looking for the best grocery store in Noida? The Buyzaar Mart offers fresh produce, daily essentials & affordable prices across Noida sectors. Visit or franchise today!",
  keywords: [
    "best grocery store in Noida",
    "grocery store in Noida",
    "supermarket in Noida",
    "mini mart Noida",
    "super mart Noida",
    "hyper mart Noida",
    "grocery shop near me Noida",
    "daily needs store Noida",
    "grocery franchise in Noida",
    "The Buyzaar Mart Noida",
    "affordable grocery store Noida",
    "organized retail Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-grocery-store-in-noida",
  },
  openGraph: {
    title: "Best Grocery Store in Noida | The Buyzaar Mart – Fresh & Affordable",
    description:
      "Looking for the best grocery store in Noida? The Buyzaar Mart offers fresh produce, daily essentials & affordable prices across Noida sectors. Visit or franchise today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-grocery-store-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Store in Noida | The Buyzaar Mart – Fresh & Affordable",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Store in Noida | The Buyzaar Mart – Fresh & Affordable",
    description:
      "Looking for the best grocery store in Noida? The Buyzaar Mart offers fresh produce, daily essentials & affordable prices across Noida sectors. Visit or franchise today!",
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