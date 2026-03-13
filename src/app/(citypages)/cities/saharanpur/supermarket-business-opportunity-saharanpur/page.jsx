import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Business Opportunity in Saharanpur | High Demand",

  description:
    "Explore supermarket business opportunities in Saharanpur driven by rising urban retail demand.",

  keywords:
    "supermarket business opportunity saharanpur, supermarket startup opportunity saharanpur, supermarket franchise opportunity saharanpur, supermarket retail opportunity saharanpur, supermarket investment opportunity saharanpur, supermarket business near saharanpur, supermarket business growth saharanpur, supermarket chain opportunity saharanpur, supermarket expansion saharanpur, supermarket market saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-business-opportunity-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Supermarket Business Opportunity in Saharanpur | High Demand",
    description:
      "Explore supermarket business opportunities in Saharanpur driven by rising urban retail demand.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-business-opportunity-saharanpur",

    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Business Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Business Opportunity in Saharanpur | High Demand",
    description:
      "Explore supermarket business opportunities in Saharanpur driven by rising urban retail demand.",
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
