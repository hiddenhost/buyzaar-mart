import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Cheap Grocery Store in Kanpur | The Buyzaar Mart – Best Prices",
  description:
    "Shop at The Buyzaar Mart, the cheapest grocery store in Kanpur. Get daily essentials, fresh produce & branded items at low prices. Visit or order online today!",
  keywords: [
    "cheap grocery store in Kanpur",
    "low price supermarket Kanpur",
    "The Buyzaar Mart Kanpur",
    "affordable grocery shop Kanpur",
    "discount supermarket Kanpur",
    "budget grocery store near me",
    "low investment supermarket franchise in Lucknow",
    "supermarket franchise Lucknow",
    "cheap kirana store Kanpur",
    "grocery store franchise UP",
    "wholesale grocery store Kanpur",
    "best supermarket deals Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/cheap-grocery-store-in-kanpur",
  },
  openGraph: {
    title: "Cheap Grocery Store in Kanpur | The Buyzaar Mart – Best Prices",
    description:
      "Shop at The Buyzaar Mart, the cheapest grocery store in Kanpur. Get daily essentials, fresh produce & branded items at low prices. Visit or order online today!",
    url: "https://www.thebuyzaarmart.com/kanpur/cheap-grocery-store-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Cheap Grocery Store in Kanpur | The Buyzaar Mart – Best Prices",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Grocery Store in Kanpur | The Buyzaar Mart – Best Prices",
    description:
      "Shop at The Buyzaar Mart, the cheapest grocery store in Kanpur. Get daily essentials, fresh produce & branded items at low prices. Visit or order online today!",
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