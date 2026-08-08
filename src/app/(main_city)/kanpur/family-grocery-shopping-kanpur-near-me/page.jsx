import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Family Grocery Shopping in Kanpur Near Me | The Buyzaar Mart",
  description:
    "Looking for family grocery shopping near you in Kanpur? Visit The Buyzaar Mart for fresh produce, daily essentials & household needs, all under one roof.",
  keywords: [
    "family grocery shopping Kanpur near me",
    "family grocery store near me Kanpur",
    "The Buyzaar Mart Kanpur",
    "nearby supermarket for families Kanpur",
    "family supermarket Shyam Nagar",
    "household grocery shopping Kanpur",
    "grocery store near me for families",
    "low investment supermarket franchise in Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/family-grocery-shopping-kanpur-near-me",
  },
  openGraph: {
    title: "Family Grocery Shopping in Kanpur Near Me | The Buyzaar Mart",
    description:
      "Looking for family grocery shopping near you in Kanpur? Visit The Buyzaar Mart for fresh produce, daily essentials & household needs, all under one roof.",
    url: "https://www.thebuyzaarmart.com/kanpur/family-grocery-shopping-kanpur-near-me",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Family Grocery Shopping in Kanpur Near Me | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Grocery Shopping in Kanpur Near Me | The Buyzaar Mart",
    description:
      "Looking for family grocery shopping near you in Kanpur? Visit The Buyzaar Mart for fresh produce, daily essentials & household needs, all under one roof.",
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