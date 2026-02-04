import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Franchise in Saharanpur | Retail Business Option",
  description:
    "Explore grocery mart franchise opportunities in Saharanpur with a scalable retail model, strong demand, and complete business support.",
  keywords:
    "grocery mart franchise saharanpur, grocery mart dealership saharanpur, grocery mart business saharanpur, grocery franchise near saharanpur, grocery mart franchise opportunity saharanpur, grocery mart store franchise saharanpur, local grocery mart franchise, grocery retail franchise saharanpur, best grocery mart franchise saharanpur, grocery mart opening saharanpur",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-mart-franchise-in-saharanpur",
  },

  // ✅ OPEN GRAPH  
  openGraph: {
    title:
      "Grocery Mart Franchise in Saharanpur | Retail Business Option",
    description:
      "Explore grocery mart franchise opportunities in Saharanpur with a scalable retail model, strong demand, and complete business support.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-mart-franchise-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Franchise in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Mart Franchise in Saharanpur | Retail Business Option",
    description:
      "Explore grocery mart franchise opportunities in Saharanpur with a scalable retail model, strong demand, and complete business support.",
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
