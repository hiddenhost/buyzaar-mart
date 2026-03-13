import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Retail Business in Saharanpur | High Demand Sector",

  description:
    "Build a grocery retail business in Saharanpur with structured inventory, strong demand, and customer trust.",

  keywords:
    "grocery chain saharanpur, grocery store chain saharanpur, grocery retail chain saharanpur, multi store grocery saharanpur, grocery chain franchise saharanpur, local grocery chain saharanpur, grocery chain near saharanpur, grocery brand chain saharanpur, organized grocery chain saharanpur, grocery chain business saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-retail-business-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Retail Business in Saharanpur | High Demand Sector",
    description:
      "Build a grocery retail business in Saharanpur with structured inventory, strong demand, and customer trust.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-retail-business-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Retail Business in Saharanpur | High Demand Sector",
    description:
      "Build a grocery retail business in Saharanpur with structured inventory, strong demand, and customer trust.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
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
