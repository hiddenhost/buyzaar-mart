import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Modern Grocery Store in Saharanpur | New Retail Concept",

  description:
    "Explore modern grocery stores in Saharanpur built with organized layouts, digital systems, and premium offerings.",

  keywords:
    "modern grocery store saharanpur, modern grocery shop saharanpur, smart grocery store saharanpur, digital grocery store saharanpur, latest grocery store saharanpur, new age grocery store saharanpur, premium grocery store saharanpur, organized grocery store saharanpur, contemporary grocery store saharanpur, modern retail grocery saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/modern-grocery-store-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Modern Grocery Store in Saharanpur | New Retail Concept",
    description:
      "Explore modern grocery stores in Saharanpur built with organized layouts, digital systems, and premium offerings.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/modern-grocery-store-in-saharanpur",
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
    title: "Modern Grocery Store in Saharanpur | New Retail Concept",
    description:
      "Explore modern grocery stores in Saharanpur built with organized layouts, digital systems, and premium offerings.",
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

