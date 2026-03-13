import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Business in Saharanpur | Retail Opportunity",

  description:
    "Run a grocery mart business in Saharanpur with an organized retail structure and steady customers.",

  keywords:
    "grocery mart business saharanpur, grocery mart shop saharanpur, grocery mart startup saharanpur, grocery mart retail business saharanpur, grocery mart opportunity saharanpur, grocery mart near saharanpur, grocery mart investment saharanpur, grocery mart franchise saharanpur, grocery mart store saharanpur, grocery mart setup saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-mart-business-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Mart Business in Saharanpur | Retail Opportunity",
    description:
      "Run a grocery mart business in Saharanpur with an organized retail structure and steady customers.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-mart-business-saharanpur",

    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Grocery Mart Business in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Business in Saharanpur | Retail Opportunity",
    description:
      "Run a grocery mart business in Saharanpur with an organized retail structure and steady customers.",
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
