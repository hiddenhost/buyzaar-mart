import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Shopping in Kanpur: Complete Guide | The Buyzaar Mart",
  description:
    "A complete guide to grocery shopping in Kanpur — mandis, kirana stores, malls, and organized supermarkets compared, plus why The Buyzaar Mart is changing how the city shops.",
  keywords: [
    "grocery shopping in Kanpur",
    "best grocery store in Kanpur",
    "supermarket in Kanpur",
    "best supermarket in Kanpur",
    "grocery store Kanpur",
    "grocery shop Kanpur",
    "grocery stores near me Kanpur",
    "supermarket near me Kanpur",
    "daily essentials store Kanpur",
    "departmental store Kanpur",
    "monthly grocery shopping Kanpur",
    "online grocery shopping Kanpur",
    "grocery delivery Kanpur",
    "household essentials Kanpur",
    "FMCG products Kanpur",
    "fresh groceries Kanpur",
    "fruits and vegetables Kanpur",
    "dairy products Kanpur",
    "packaged food store Kanpur",
    "personal care products Kanpur",
    "home essentials store Kanpur",
    "family supermarket Kanpur",
    "affordable grocery shopping Kanpur",
    "neighborhood grocery store Kanpur",
    "one stop grocery store Kanpur",
    "modern grocery store Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/grocery-shopping-in-kanpur",
  },
  openGraph: {
    title: "Grocery Shopping in Kanpur: Complete Guide | The Buyzaar Mart",
    description:
      "A complete guide to grocery shopping in Kanpur — mandis, kirana stores, malls, and organized supermarkets compared, plus why The Buyzaar Mart is changing how the city shops.",
    url: "https://www.thebuyzaarmart.com/kanpur/grocery-shopping-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Shopping in Kanpur: Complete Guide | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Shopping in Kanpur: Complete Guide | The Buyzaar Mart",
    description:
      "A complete guide to grocery shopping in Kanpur — mandis, kirana stores, malls, and organized supermarkets compared, plus why The Buyzaar Mart is changing how the city shops.",
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