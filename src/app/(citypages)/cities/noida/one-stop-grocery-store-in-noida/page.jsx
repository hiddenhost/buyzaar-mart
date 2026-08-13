import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "One Stop Grocery Store in Noida | The Buyzaar Mart",
  description:
    "Looking for a one stop grocery store in Noida? The Buyzaar Mart brings fresh produce, groceries, dairy, and household essentials together under one roof.",
  keywords: [
    "one stop grocery store noida",
    "grocery store noida",
    "buyzaar mart noida",
    "one stop shop noida",
    "daily essentials noida",
    "fresh produce noida",
    "household essentials noida",
    "online grocery noida",
    "neighbourhood grocery store noida",
    "all in one grocery store noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/one-stop-grocery-store-in-noida",
  },
  openGraph: {
    title: "One Stop Grocery Store in Noida | The Buyzaar Mart",
    description:
      "Looking for a one stop grocery store in Noida? The Buyzaar Mart brings fresh produce, groceries, dairy, and household essentials together under one roof.",
    url: "https://www.thebuyzaarmart.com/cities/noida/one-stop-grocery-store-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "One Stop Grocery Store in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Stop Grocery Store in Noida | The Buyzaar Mart",
    description:
      "Looking for a one stop grocery store in Noida? The Buyzaar Mart brings fresh produce, groceries, dairy, and household essentials together under one roof.",
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