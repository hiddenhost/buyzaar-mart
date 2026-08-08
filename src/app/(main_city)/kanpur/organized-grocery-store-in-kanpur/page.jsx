import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organized Grocery Store in Kanpur | The Buyzaar Mart",
  description:
    "Discover why organized grocery stores are rising in Kanpur & how The Buyzaar Mart delivers quality, fair pricing, and franchise opportunity.",
  keywords: [
    "organized grocery store Kanpur",
    "organised grocery store Kanpur",
    "branded grocery store Kanpur",
    "best grocery store Kanpur",
    "modern grocery store Kanpur",
    "grocery franchise Kanpur",
    "Mini Mart Super Mart Hyper Mart Kanpur",
    "The Buyzaar Mart Kanpur",
    "supermarket Kanpur",
    "franchise investment Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/organized-grocery-store-in-kanpur",
  },
  openGraph: {
    title: "Organized Grocery Store in Kanpur | The Buyzaar Mart",
    description:
      "Discover why organized grocery stores are rising in Kanpur & how The Buyzaar Mart delivers quality, fair pricing, and franchise opportunity.",
    url: "https://www.thebuyzaarmart.com/kanpur/organized-grocery-store-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organized Grocery Store in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organized Grocery Store in Kanpur | The Buyzaar Mart",
    description:
      "Discover why organized grocery stores are rising in Kanpur & how The Buyzaar Mart delivers quality, fair pricing, and franchise opportunity.",
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