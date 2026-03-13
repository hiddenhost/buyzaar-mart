import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business Plan in Saharanpur | Step-by-Step Strategy",

  description:
    "Create a grocery business plan in Saharanpur covering investment, operations, and growth strategy.",

  keywords:
    "grocery business plan saharanpur, grocery store business plan saharanpur, grocery shop business plan saharanpur, grocery startup plan saharanpur, grocery business strategy saharanpur, grocery business model saharanpur, grocery business planning saharanpur, grocery retail plan saharanpur, grocery business roadmap saharanpur, grocery business guide saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-business-plan-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Business Plan in Saharanpur | Step-by-Step Strategy",
    description:
      "Create a grocery business plan in Saharanpur covering investment, operations, and growth strategy.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-business-plan-saharanpur",

    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Grocery Business Plan in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Business Plan in Saharanpur | Step-by-Step Strategy",
    description:
      "Create a grocery business plan in Saharanpur covering investment, operations, and growth strategy.",
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
