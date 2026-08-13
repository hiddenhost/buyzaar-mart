import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Near Me in Noida | The Buyzaar Mart",
  description:
    "Looking for a grocery store near you in Noida? The Buyzaar Mart offers fresh produce, daily essentials, and household items across multiple sectors.",
  keywords: [
    "grocery store near me in Noida",
    "Noida grocery store",
    "grocery shopping near me",
    "The Buyzaar Mart Noida",
    "best grocery store Noida",
    "local grocery store Noida",
    "daily essentials Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/grocery-store-near-me-in-noida",
  },
  openGraph: {
    title: "Grocery Store Near Me in Noida | The Buyzaar Mart",
    description:
      "Looking for a grocery store near you in Noida? The Buyzaar Mart offers fresh produce, daily essentials, and household items across multiple sectors.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-store-near-me-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Near Me in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Near Me in Noida | The Buyzaar Mart",
    description:
      "Looking for a grocery store near you in Noida? The Buyzaar Mart offers fresh produce, daily essentials, and household items across multiple sectors.",
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