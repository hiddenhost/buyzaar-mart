import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business in Uttar Pradesh | The Buyzaar Mart Grocery Franchise",

  description: "Discover profitable franchise business opportunities in Uttar Pradesh with The Buyzaar Mart. Explore investment details, FICO/FOFO models, and complete support for MiniMart, SuperMart, and HyperMart formats. Start your retail success today!",

  keywords: "franchise business in uttar pradesh, buyzaar mart franchise uttar pradesh, grocery franchise uttar pradesh, fico fofo uttar pradesh, minimart franchise up, supermart investment up, hypermart franchise uttar pradesh, retail franchise uttar pradesh, profitable franchise up, franchise opportunity uttar pradesh",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Franchise Business in Uttar Pradesh | The Buyzaar Mart Grocery Franchise",
    description: "Discover profitable franchise business opportunities in Uttar Pradesh with The Buyzaar Mart. Explore investment details, FICO/FOFO models, and complete support for MiniMart, SuperMart, and HyperMart formats. Start your retail success today!",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Opportunity in Uttar Pradesh - The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business in Uttar Pradesh | The Buyzaar Mart Grocery Franchise",
    description: "Discover profitable franchise business opportunities in Uttar Pradesh with The Buyzaar Mart. Explore investment details, FICO/FOFO models, and complete support for MiniMart, SuperMart, and HyperMart formats. Start your retail success today!",
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
