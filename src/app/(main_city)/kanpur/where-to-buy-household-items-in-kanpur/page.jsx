import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Where to Buy Household Items in Kanpur | The Buyzaar Mart",
  description:
    "Looking for household items in Kanpur? Explore The Buyzaar Mart's neighbourhood stores for quality home essentials at fair, transparent prices.",
  keywords: [
    "where to buy household items Kanpur",
    "household items store Kanpur",
    "home essentials shop Kanpur",
    "cleaning products Kanpur",
    "kitchen items store Kanpur",
    "household goods near me",
    "The Buyzaar Mart Kanpur",
    "neighbourhood store Kanpur",
    "best household store Kanpur",
    "franchise opportunity Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/where-to-buy-household-items-in-kanpur",
  },
  openGraph: {
    title: "Where to Buy Household Items in Kanpur | The Buyzaar Mart",
    description:
      "Looking for household items in Kanpur? Explore The Buyzaar Mart's neighbourhood stores for quality home essentials at fair, transparent prices.",
    url: "https://www.thebuyzaarmart.com/kanpur/where-to-buy-household-items-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Where to Buy Household Items in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy Household Items in Kanpur | The Buyzaar Mart",
    description:
      "Looking for household items in Kanpur? Explore The Buyzaar Mart's neighbourhood stores for quality home essentials at fair, transparent prices.",
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