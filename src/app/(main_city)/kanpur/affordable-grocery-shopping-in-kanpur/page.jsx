import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Affordable Grocery Shopping in Kanpur | The Buyzaar Mart",
  description:
    "Discover smart ways to save on grocery shopping in Kanpur with The Buyzaar Mart's fair pricing, wide range & value-driven neighbourhood stores.",
  keywords: [
    "affordable grocery shopping Kanpur",
    "cheap grocery store Kanpur",
    "budget grocery shopping Kanpur",
    "low price grocery Kanpur",
    "value grocery store Kanpur",
    "best grocery deals Kanpur",
    "The Buyzaar Mart Kanpur",
    "grocery franchise Kanpur",
    "Mini Mart Super Mart Hyper Mart Kanpur",
    "franchise investment Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/affordable-grocery-shopping-in-kanpur",
  },
  openGraph: {
    title: "Affordable Grocery Shopping in Kanpur | The Buyzaar Mart",
    description:
      "Discover smart ways to save on grocery shopping in Kanpur with The Buyzaar Mart's fair pricing, wide range & value-driven neighbourhood stores.",
    url: "https://www.thebuyzaarmart.com/kanpur/affordable-grocery-shopping-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Affordable Grocery Shopping in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Grocery Shopping in Kanpur | The Buyzaar Mart",
    description:
      "Discover smart ways to save on grocery shopping in Kanpur with The Buyzaar Mart's fair pricing, wide range & value-driven neighbourhood stores.",
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