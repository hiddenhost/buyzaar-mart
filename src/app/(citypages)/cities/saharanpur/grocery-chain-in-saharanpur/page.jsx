import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain in Saharanpur | Organized Retail Network",

  description:
    "Discover organized grocery chains in Saharanpur expanding across multiple locations and retail formats.",

  keywords:
    "grocery franchise saharanpur, supermarket franchise saharanpur, kirana franchise saharanpur, grocery business opportunity saharanpur, retail grocery business saharanpur, low investment grocery franchise, grocery store dealership saharanpur, FMCG retail franchise, food retail franchise india, grocery chain franchise, small supermarket franchise, grocery mart business saharanpur, retail store franchise saharanpur, grocery startup saharanpur, supermarket store franchise",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-chain-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Chain in Saharanpur | Organized Retail Network",
    description:
      "Discover organized grocery chains in Saharanpur expanding across multiple locations and retail formats.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-chain-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain in Saharanpur | Organized Retail Network",
    description:
      "Discover organized grocery chains in Saharanpur expanding across multiple locations and retail formats.",
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
