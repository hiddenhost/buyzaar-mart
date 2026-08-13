import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Where to Buy Groceries in Noida | The Buyzaar Mart",
  description:
    "Find out where to buy groceries in Noida with The Buyzaar Mart, offering fresh produce, daily essentials, and household items across multiple sectors.",
  keywords: [
    "where to buy groceries in Noida",
    "grocery store Noida",
    "Noida grocery shopping",
    "The Buyzaar Mart Noida",
    "best grocery store Noida",
    "daily essentials Noida",
    "grocery shopping near me Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/where-to-buy-groceries-in-noida",
  },
  openGraph: {
    title: "Where to Buy Groceries in Noida | The Buyzaar Mart",
    description:
      "Find out where to buy groceries in Noida with The Buyzaar Mart, offering fresh produce, daily essentials, and household items across multiple sectors.",
    url: "https://www.thebuyzaarmart.com/cities/noida/where-to-buy-groceries-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Where to Buy Groceries in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy Groceries in Noida | The Buyzaar Mart",
    description:
      "Find out where to buy groceries in Noida with The Buyzaar Mart, offering fresh produce, daily essentials, and household items across multiple sectors.",
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