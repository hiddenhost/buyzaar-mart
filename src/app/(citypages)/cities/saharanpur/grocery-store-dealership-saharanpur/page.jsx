import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Dealership in Saharanpur | Partner Opportunity",

  description:
    "Partner as a grocery store dealership in Saharanpur and expand your retail presence.",

  keywords:
    "grocery store dealership saharanpur, grocery dealership saharanpur, grocery franchise dealership saharanpur, grocery store distributorship saharanpur, grocery mart dealership saharanpur, grocery retail dealership saharanpur, grocery store partner saharanpur, grocery dealership opportunity saharanpur, grocery store business saharanpur, grocery store near saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-store-dealership-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Store Dealership in Saharanpur | Partner Opportunity",
    description:
      "Partner as a grocery store dealership in Saharanpur and expand your retail presence.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-store-dealership-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Grocery Store Dealership in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Dealership in Saharanpur | Partner Opportunity",
    description:
      "Partner as a grocery store dealership in Saharanpur and expand your retail presence.",
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
