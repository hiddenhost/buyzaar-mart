import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Affordable Grocery Shopping in Kanpur Near Me | The Buyzaar Mart",
  description:
    "Looking for affordable grocery shopping in Kanpur near you? Visit The Buyzaar Mart for fresh produce, daily essentials & branded products at low prices.",
  keywords: [
    "affordable grocery shopping in Kanpur near me",
    "cheap grocery store near me Kanpur",
    "The Buyzaar Mart Kanpur",
    "budget grocery shop Kanpur",
    "nearby grocery store Kanpur",
    "low price supermarket near me",
    "affordable supermarket Kanpur",
    "grocery store near me Kanpur",
    "low investment supermarket franchise in Lucknow",
    "supermarket franchise Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/affordable-grocery-shopping-in-kanpur-near-me",
  },
  openGraph: {
    title: "Affordable Grocery Shopping in Kanpur Near Me | The Buyzaar Mart",
    description:
      "Looking for affordable grocery shopping in Kanpur near you? Visit The Buyzaar Mart for fresh produce, daily essentials & branded products at low prices.",
    url: "https://www.thebuyzaarmart.com/kanpur/affordable-grocery-shopping-in-kanpur-near-me",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Affordable Grocery Shopping in Kanpur Near Me | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Grocery Shopping in Kanpur Near Me | The Buyzaar Mart",
    description:
      "Looking for affordable grocery shopping in Kanpur near you? Visit The Buyzaar Mart for fresh produce, daily essentials & branded products at low prices.",
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