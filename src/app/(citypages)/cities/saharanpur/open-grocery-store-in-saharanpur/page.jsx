import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Open Grocery Store in Saharanpur | Step-by-Step Guide",

  description:
    "Planning to open a grocery store in Saharanpur? Learn about setup steps, licenses, and business execution essentials.",

  keywords:
    "open grocery store in saharanpur, open grocery shop saharanpur, how to open grocery store saharanpur, grocery store opening saharanpur, grocery shop setup saharanpur, start grocery shop saharanpur, grocery store license saharanpur, grocery store registration saharanpur, grocery store near me saharanpur, grocery shop business saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/open-grocery-store-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Open Grocery Store in Saharanpur | Step-by-Step Guide",
    description:
      "Planning to open a grocery store in Saharanpur? Learn about setup steps, licenses, and business execution essentials.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/open-grocery-store-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Open Grocery Store in Saharanpur | Step-by-Step Guide",
    description:
      "Planning to open a grocery store in Saharanpur? Learn about setup steps, licenses, and business execution essentials.",
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
