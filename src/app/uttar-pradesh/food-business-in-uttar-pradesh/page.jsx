import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start Your Food Business in Uttar Pradesh | The Buyzaar Mart Franchise Opportunity",

  description: "Discover lucrative food business opportunities in Uttar Pradesh with The Buyzaar Mart. Get complete investment details for hypermart, supermart & minimart franchises. FOCO & FOFO models available. Start your retail journey today!",

  keywords: "food business uttar pradesh, buyzaar mart food franchise, food franchise uttar pradesh, hypermart franchise up, supermart investment uttar pradesh, minimart franchise up, foco fofo food franchise, profitable food retail up, food franchise opportunity uttar pradesh, start food business up",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/food-business-franchise-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Start Your Food Business in Uttar Pradesh | The Buyzaar Mart Franchise Opportunity",
    description: "Discover lucrative food business opportunities in Uttar Pradesh with The Buyzaar Mart. Get complete investment details for hypermart, supermart & minimart franchises. FOCO & FOFO models available. Start your retail journey today!",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/food-business-franchise-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start Your Food Business in Uttar Pradesh - The Buyzaar Mart Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Start Your Food Business in Uttar Pradesh | The Buyzaar Mart Franchise Opportunity",
    description: "Discover lucrative food business opportunities in Uttar Pradesh with The Buyzaar Mart. Get complete investment details for hypermart, supermart & minimart franchises. FOCO & FOFO models available. Start your retail journey today!",
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
