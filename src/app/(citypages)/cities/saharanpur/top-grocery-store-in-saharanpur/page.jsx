import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Top Grocery Store in Saharanpur | Trusted Retail Choice",

  description:
    "Find top grocery stores in Saharanpur trusted by local customers.",

  keywords:
    "top grocery store in saharanpur, best grocery store saharanpur, popular grocery store saharanpur, leading grocery shop saharanpur, grocery store near me saharanpur, trusted grocery store saharanpur, grocery store ratings saharanpur, grocery store reviews saharanpur, premium grocery store saharanpur, grocery retail store saharanpur, buyzaar mart saharanpur, buyzaar mart franchise saharanpur",		
  

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/top-grocery-store-in-saharanpur/start-your-business-today",
  },

  // ✅ OPEN GRAPH  
  openGraph: {
    title:
      "Top Grocery Store in Saharanpur | Trusted Retail Choice",
    description:
      "Find top grocery stores in Saharanpur trusted by local customers.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/top-grocery-store-in-saharanpur.",

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
      "Top Grocery Store in Saharanpur | Trusted Retail Choice",
    description:
      "Find top grocery stores in Saharanpur trusted by local customers.",
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
