import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Family Grocery Shopping in Kanpur vs Big Bazaar | The Buyzaar Mart",
  description:
    "Compare family grocery shopping in Kanpur today with the old Big Bazaar hypermarket model, and see how The Buyzaar Mart offers a modern, neighborhood alternative.",
  keywords: [
    "family grocery shopping Kanpur vs Big Bazaar",
    "Big Bazaar Kanpur",
    "The Buyzaar Mart vs Big Bazaar",
    "neighborhood supermarket Kanpur",
    "family grocery store Kanpur",
    "Big Bazaar Kanpur closed",
    "grocery shopping Kanpur after Big Bazaar",
    "low investment supermarket franchise in Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/family-grocery-shopping-kanpur-vs-big-bazaar",
  },
  openGraph: {
    title: "Family Grocery Shopping in Kanpur vs Big Bazaar | The Buyzaar Mart",
    description:
      "Compare family grocery shopping in Kanpur today with the old Big Bazaar hypermarket model, and see how The Buyzaar Mart offers a modern, neighborhood alternative.",
    url: "https://www.thebuyzaarmart.com/kanpur/family-grocery-shopping-kanpur-vs-big-bazaar",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Family Grocery Shopping in Kanpur vs Big Bazaar | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Grocery Shopping in Kanpur vs Big Bazaar | The Buyzaar Mart",
    description:
      "Compare family grocery shopping in Kanpur today with the old Big Bazaar hypermarket model, and see how The Buyzaar Mart offers a modern, neighborhood alternative.",
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