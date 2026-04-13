import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise Business in Uttar Pradesh | Buyzaar Mart Grocery Franchise Opportunity",

  description: "Looking for the best franchise business in Uttar Pradesh? Start your supermarket journey with The Buyzaar Mart. Flexible investment options, FOFO & FOCO models, full support system. Apply now.",

  keywords: "franchise business in uttar pradesh, buyzaar mart franchise uttar pradesh, grocery franchise uttar pradesh, fico fofo uttar pradesh, minimart franchise up, supermart investment up, hypermart franchise uttar pradesh, retail franchise uttar pradesh, profitable franchise up, franchise opportunity uttar pradesh",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Franchise Business in Uttar Pradesh | Buyzaar Mart Grocery Franchise Opportunity",
    description: "Looking for the best franchise business in Uttar Pradesh? Start your supermarket journey with The Buyzaar Mart. Flexible investment options, FOFO & FOCO models, full support system. Apply now.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Business in Uttar Pradesh - Buyzaar Mart Grocery Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise Business in Uttar Pradesh | Buyzaar Mart Grocery Franchise Opportunity",
    description: "Looking for the best franchise business in Uttar Pradesh? Start your supermarket journey with The Buyzaar Mart. Flexible investment options, FOFO & FOCO models, full support system. Apply now.",
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
