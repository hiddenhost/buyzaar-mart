import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Family Grocery Shopping Destination in Kanpur | Best Prices – The Buyzaar Mart",
  description:
    "Looking for the best family grocery shopping destination in Kanpur? The Buyzaar Mart offers fresh produce, daily essentials & branded FMCG at honest prices. Visit today!",
  keywords: [
    "family grocery shopping Kanpur",
    "grocery store Kanpur price",
    "best grocery shop Kanpur",
    "affordable grocery store Kanpur",
    "daily essentials Kanpur",
    "supermarket Kanpur price",
    "fresh vegetables Kanpur price",
    "monthly grocery shopping Kanpur",
    "The Buyzaar Mart Kanpur",
    "grocery store near me Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/family-grocery-shopping-destination-kanpur-price",
  },
  openGraph: {
    title:
      "Family Grocery Shopping Destination in Kanpur | Best Prices – The Buyzaar Mart",
    description:
      "Looking for the best family grocery shopping destination in Kanpur? The Buyzaar Mart offers fresh produce, daily essentials & branded FMCG at honest prices. Visit today!",
    url: "https://www.thebuyzaarmart.com/kanpur/family-grocery-shopping-destination-kanpur-price",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt:
          "Family Grocery Shopping Destination in Kanpur | Best Prices – The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Family Grocery Shopping Destination in Kanpur | Best Prices – The Buyzaar Mart",
    description:
      "Looking for the best family grocery shopping destination in Kanpur? The Buyzaar Mart offers fresh produce, daily essentials & branded FMCG at honest prices. Visit today!",
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