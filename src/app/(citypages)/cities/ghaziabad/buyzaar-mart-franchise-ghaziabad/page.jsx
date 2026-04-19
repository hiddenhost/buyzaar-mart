import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Ghaziabad | Retail Store Franchise Opportunity 2025",
  description:
    "Looking for a retail franchise in Ghaziabad? Buyzaar Mart offers a proven neighbourhood store franchise model with full backend support, hyper-local marketing, and hassle-free inventory. Apply now at thebuyzaarmart.com.",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/ghaziabad/supermarket-business-ghaziabad",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Ghaziabad | Retail Store Franchise Opportunity 2025",
    description:
      "Looking for a retail franchise in Ghaziabad? Buyzaar Mart offers a proven neighbourhood store franchise model with full backend support, hyper-local marketing, and hassle-free inventory. Apply now at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/cities/ghaziabad/supermarket-business-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Ghaziabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Ghaziabad | Retail Store Franchise Opportunity 2025",
    description:
      "Looking for a retail franchise in Ghaziabad? Buyzaar Mart offers a proven neighbourhood store franchise model with full backend support, hyper-local marketing, and hassle-free inventory. Apply now at thebuyzaarmart.com.",
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