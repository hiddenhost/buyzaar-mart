import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighborhood Grocery Store in Noida | The Buyzaar Mart",
  description:
    "Looking for a trusted neighborhood grocery store in Noida? Discover why local, community-focused shopping matters and how The Buyzaar Mart delivers it.",
  keywords: [
    "neighborhood grocery store Noida",
    "local grocery store Noida",
    "community grocery store Noida",
    "grocery store near me Noida",
    "neighborhood supermarket Noida",
    "The Buyzaar Mart",
    "friendly neighbourhood store Noida",
    "daily essentials store Noida sectors",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/noida/neighborhood-grocery-store-in-noida",
  },
  openGraph: {
    title: "Neighborhood Grocery Store in Noida | The Buyzaar Mart",
    description:
      "Looking for a trusted neighborhood grocery store in Noida? Discover why local, community-focused shopping matters and how The Buyzaar Mart delivers it.",
    url: "https://www.thebuyzaarmart.com/noida/neighborhood-grocery-store-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighborhood Grocery Store in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighborhood Grocery Store in Noida | The Buyzaar Mart",
    description:
      "Looking for a trusted neighborhood grocery store in Noida? Discover why local, community-focused shopping matters and how The Buyzaar Mart delivers it.",
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