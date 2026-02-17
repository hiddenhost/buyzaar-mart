import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Dealership in Saharanpur | Retail Expansion",

  description:
    "Become a supermarket dealership partner in Saharanpur with structured retail operations and support.",

  keywords:
    "supermarket dealership saharanpur, supermarket franchise dealership saharanpur, supermarket distributorship saharanpur, supermarket retail dealership saharanpur, supermarket business partner saharanpur, supermarket dealership opportunity saharanpur, supermarket store dealership saharanpur, supermarket chain dealership saharanpur, supermarket near saharanpur, supermarket business saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-dealership-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Supermarket Dealership in Saharanpur | Retail Expansion",
    description:
      "Become a supermarket dealership partner in Saharanpur with structured retail operations and support.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-dealership-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Dealership in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Dealership in Saharanpur | Retail Expansion",
    description:
      "Become a supermarket dealership partner in Saharanpur with structured retail operations and support.",
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
