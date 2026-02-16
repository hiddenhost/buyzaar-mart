import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Business in Uttar Pradesh: Franchise Opportunities | The Buyzaar Mart",
  description: "Launch your FMCG business in Uttar Pradesh with proven models like hypermarts and supermarts. Discover investment costs, legal steps, top products, supply chain tips, and The Buyzaar Mart franchise benefits for high profits. Get started now!",
  keywords: "FMCG business Uttar Pradesh, FMCG franchise UP, hypermart investment UP, supermart franchise Uttar Pradesh, FMCG investment guide, The Buyzaar Mart franchise, FMCG supply chain UP, FMCG profit margins, FMCG legal requirements UP, start FMCG business UP",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/uttar-pradesh/fmcg-business-in-uttar-pradesh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "FMCG Business in Uttar Pradesh: Franchise Opportunities | The Buyzaar Mart",
    description: "Launch your FMCG business in Uttar Pradesh with proven models like hypermarts and supermarts. Discover investment costs, legal steps, top products, supply chain tips, and The Buyzaar Mart franchise benefits for high profits.",
    url: "https://www.thebuyzaarmart.com/cities/uttar-pradesh/fmcg-business-in-uttar-pradesh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Business Franchise Opportunity in Uttar Pradesh - The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "FMCG Business in Uttar Pradesh: Franchise Opportunities | The Buyzaar Mart",
    description: "Launch your FMCG business in Uttar Pradesh with proven models like hypermarts and supermarts. Discover investment costs, legal steps, top products, supply chain tips, and The Buyzaar Mart franchise benefits for high profits.",
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
