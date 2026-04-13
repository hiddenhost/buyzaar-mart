import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise in Uttar Pradesh | The Buyzaar Mart Partnership Opportunity",

  description: "Start your grocery franchise in Uttar Pradesh with The Buyzaar Mart. Explore low-investment supermart and hypermart opportunities with proven business models. Get complete support, training, and ROI-driven growth in UP's fastest-growing retail market.",

  keywords: "grocery franchise uttar pradesh, buyzaar mart franchise up, supermart franchise uttar pradesh, hypermart investment up, minimart partnership up, retail franchise opportunity uttar pradesh, fico fofo models up, profitable grocery business up, franchise support uttar pradesh, low investment franchise up",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Franchise in Uttar Pradesh | The Buyzaar Mart Partnership Opportunity",
    description: "Start your grocery franchise in Uttar Pradesh with The Buyzaar Mart. Explore low-investment supermart and hypermart opportunities with proven business models. Get complete support, training, and ROI-driven growth in UP's fastest-growing retail market.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Partnership Opportunity in Uttar Pradesh - The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise in Uttar Pradesh | The Buyzaar Mart Partnership Opportunity",
    description: "Start your grocery franchise in Uttar Pradesh with The Buyzaar Mart. Explore low-investment supermart and hypermart opportunities with proven business models. Get complete support, training, and ROI-driven growth in UP's fastest-growing retail market.",
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
