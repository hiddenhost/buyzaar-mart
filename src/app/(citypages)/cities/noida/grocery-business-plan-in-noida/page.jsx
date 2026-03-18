import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business Plan in Noida | Complete Setup & Investment Guide",

  description:
    "Create a successful grocery business plan in Noida with The Buyzaar Mart. Learn investment requirements, profit margins, location strategy, and step-by-step setup for a profitable grocery store.",

  keywords:
    "grocery business plan noida, grocery store setup noida, supermarket business plan india, grocery investment noida, kirana store business plan, grocery startup guide noida, retail grocery planning, buyzaar mart business model, grocery shop setup cost noida, grocery business strategy",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/grocery-business-plan-in-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Business Plan in Noida | Complete Setup & Investment Guide",
    description:
      "Plan your grocery business in Noida with expert insights. Learn investment, setup process, profit strategy, and how to build a successful grocery store.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-business-plan-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Business Plan in Noida - Setup & Investment Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Business Plan in Noida | Complete Setup & Investment Guide",
    description:
      "Discover how to start a grocery business in Noida. Learn planning, investment, and profit strategies for long-term success.",
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