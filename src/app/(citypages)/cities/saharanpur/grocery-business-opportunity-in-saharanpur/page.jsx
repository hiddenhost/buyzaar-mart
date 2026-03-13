import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business Opportunity in Saharanpur | Start a Store",

  description:
    " Discover grocery business opportunities in Saharanpur with long-term growth and stable demand.",

  keywords:
    "grocery business opportunity in saharanpur, grocery startup opportunity saharanpur, grocery business investment saharanpur, grocery retail opportunity saharanpur, grocery franchise opportunity saharanpur, grocery business near saharanpur, grocery business growth saharanpur, grocery business market saharanpur, grocery business expansion saharanpur, grocery business prospects saharanpur	",		


  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-business-opportunity-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Grocery Business Opportunity in Saharanpur | Start Profitable Store 2026",
    description:
      "Discover grocery business opportunities in Saharanpur with long-term growth and stable demand!",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-business-opportunity-in-saharanpur",
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
    title:
      "Grocery Business Opportunity in Saharanpur | Start Profitable Store 2026",
    description:
      "Discover lucrative grocery business opportunities in Saharanpur. Low investment, high returns with rising demand. Get expert tips from The Buyzaar Mart to launch your store today!",
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
