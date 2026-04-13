import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Top 10 Food Franchise Opportunities in Uttar Pradesh 2026 | The Buyzaar Mart",

  description: "Discover the top 10 food franchise opportunities in Uttar Pradesh. Compare investment, returns & support for grocery retail franchises.",

  keywords: "food franchise uttar pradesh, top food franchises up, grocery franchise uttar pradesh, buyzaar mart food franchise, fico fofo food franchise, minimart franchise up, supermart investment up, hypermart franchise uttar pradesh, retail franchise uttar pradesh, profitable food franchise up",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Top 10 Food Franchise Opportunities in Uttar Pradesh 2026 | The Buyzaar Mart",
    description: "Discover the top 10 food franchise opportunities in Uttar Pradesh. Compare investment, returns & support for grocery retail franchises.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Top 10 Food Franchise Opportunities in Uttar Pradesh 2026 - The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Top 10 Food Franchise Opportunities in Uttar Pradesh 2026 | The Buyzaar Mart",
    description: "Discover the top 10 food franchise opportunities in Uttar Pradesh. Compare investment, returns & support for grocery retail franchises.",
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
