import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "The Buyzaar Mart Franchise in Uttar Pradesh | Profitable Retail Opportunity",

  description: "Explore the Buyzaar Mart franchise in Uttar Pradesh. Learn about investment planning, benefits, store formats, city-wise potential, support system, and how to start a profitable retail business in UP.",

  keywords: "Buyzaar Mart franchise, Buyzaar Mart franchise in Uttar Pradesh, grocery franchise in UP, retail franchise business, supermarket franchise UP, franchise opportunities in Uttar Pradesh, how to start a franchise in UP, Buyzaar Mart dealership, retail business opportunity in UP",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/uttar-pradesh/the-buyzaar-mart-franchise-in-uttar-pradesh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "The Buyzaar Mart Franchise in Uttar Pradesh | Profitable Retail Opportunity",
    description: "Explore the Buyzaar Mart franchise in Uttar Pradesh. Learn about investment planning, benefits, store formats, city-wise potential, support system, and how to start a profitable retail business in UP.",
    url: "https://www.thebuyzaarmart.com/uttar-pradesh/the-buyzaar-mart-franchise-in-uttar-pradesh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart Franchise in Uttar Pradesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "The Buyzaar Mart Franchise in Uttar Pradesh | Profitable Retail Opportunity",
    description: "Explore the Buyzaar Mart franchise in Uttar Pradesh. Learn about investment planning, benefits, store formats, city-wise potential, support system, and how to start a profitable retail business in UP.",
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
