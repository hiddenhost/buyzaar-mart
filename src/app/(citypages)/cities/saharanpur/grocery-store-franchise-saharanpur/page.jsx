import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Saharanpur | Start Your Store.",

  description:
    " Open a grocery store franchise in Saharanpur with complete setup assistance and retail guidance.",

  keywords:
    " grocery store franchise saharanpur, grocery franchise saharanpur, grocery shop franchise saharanpur, grocery retail franchise saharanpur, grocery mart franchise saharanpur, grocery store franchise opportunity saharanpur, grocery store franchise near saharanpur, grocery franchise investment saharanpur, grocery franchise business saharanpur, grocery franchise brand saharanpur.",			


  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-mart-franchise-in-saharanpur/start-your-business-today",
  },

  // ✅ OPEN GRAPH  
  openGraph: {
    title:
      " Grocery Store Franchise  Saharanpur | Start Your Store.",
    description:
      "  Open a grocery store franchise in Saharanpur with complete setup assistance and retail guidance. Join The Buyzaar Mart's successful franchise network and start your business today!",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-store-franchise-saharanpur",

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
      " Grocery Store Franchise in Saharanpur | Start Your Store.",
    description:
      "  Open a grocery store franchise in Saharanpur with complete setup assistance and retail guidance. Join The Buyzaar Mart's successful franchise network and start your business today!",
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
