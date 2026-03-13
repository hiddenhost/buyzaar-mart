import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Investment in Saharanpur | Cost & Setup Guide",

  description:
    "Understand grocery store investment requirements in Saharanpur including setup, inventory planning, and operational costs.",

  keywords:
    "grocery store investment saharanpur, grocery shop investment saharanpur, grocery store cost saharanpur, grocery business investment saharanpur, small grocery store investment saharanpur, grocery shop setup cost saharanpur, kirana store investment saharanpur, grocery store capital saharanpur, grocery business cost saharanpur, grocery shop startup investment saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-store-investment-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Store Investment in Saharanpur | Cost & Setup Guide",
    description:
      "Understand grocery store investment requirements in Saharanpur including setup, inventory planning, and operational costs.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-store-investment-in-saharanpur",

    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Grocery Store Investment in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Investment in Saharanpur | Cost & Setup Guide",
    description:
      "Understand grocery store investment requirements in Saharanpur including setup, inventory planning, and operational costs.",
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
