import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start Grocery Business in Saharanpur | Low Risk Idea",

  description:
    "Start a grocery business in Saharanpur with low risk, steady customer demand, and flexible store formats.",

  keywords:
    "start grocery business saharanpur, grocery business start saharanpur, how to start grocery business saharanpur, grocery business ideas saharanpur, grocery startup saharanpur, grocery business near me saharanpur, grocery shop business saharanpur, small grocery business saharanpur, grocery business plan saharanpur, grocery retail business saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/start-grocery-business-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Start Grocery Business in Saharanpur | Low Risk Idea",
    description:
      "Start a grocery business in Saharanpur with low risk, steady customer demand, and flexible store formats.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/start-grocery-business-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Start Grocery Business in Saharanpur | Low Risk Idea",
    description:
      "Start a grocery business in Saharanpur with low risk, steady customer demand, and flexible store formats.",
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
