import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Cheap Grocery Store Near Me in Kanpur | The Buyzaar Mart",
  description:
    "Looking for a cheap grocery store near you in Kanpur? The Buyzaar Mart offers fresh produce & daily essentials at honest, budget-friendly prices. Visit today!",
  keywords: [
    "cheap grocery store near me Kanpur",
    "affordable grocery store Kanpur",
    "budget grocery shop Kanpur",
    "low price grocery store Kanpur",
    "cheap supermarket Kanpur",
    "discount grocery store near me Kanpur",
    "best price grocery Kanpur",
    "low cost grocery shopping Kanpur",
    "The Buyzaar Mart Kanpur prices",
    "cheapest grocery store Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/cheap-grocery-store-near-me-in-kanpur",
  },
  openGraph: {
    title: "Cheap Grocery Store Near Me in Kanpur | The Buyzaar Mart",
    description:
      "Looking for a cheap grocery store near you in Kanpur? The Buyzaar Mart offers fresh produce & daily essentials at honest, budget-friendly prices. Visit today!",
    url: "https://www.thebuyzaarmart.com/kanpur/cheap-grocery-store-near-me-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Cheap Grocery Store Near Me in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Grocery Store Near Me in Kanpur | The Buyzaar Mart",
    description:
      "Looking for a cheap grocery store near you in Kanpur? The Buyzaar Mart offers fresh produce & daily essentials at honest, budget-friendly prices. Visit today!",
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