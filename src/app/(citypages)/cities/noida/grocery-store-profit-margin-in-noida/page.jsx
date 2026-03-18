import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Profit Margin in Noida | Earnings & ROI Guide",

  description:
    "Discover grocery store profit margin in Noida. Learn average margins, ROI, investment insights, and how to maximize profits with The Buyzaar Mart grocery business model.",

  keywords:
    "grocery store profit margin noida, grocery business profit noida, grocery shop income noida, grocery store ROI noida, supermarket profit margin india, retail grocery earnings noida, buyzaar mart profit, grocery business returns noida, kirana store profit margin, grocery investment returns",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/grocery-store-profit-margin-in-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Store Profit Margin in Noida | Earnings & ROI Guide",
    description:
      "Explore grocery store profit margins in Noida. Understand costs, earnings, ROI, and how to build a profitable grocery business with expert insights.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-store-profit-margin-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Profit Margin in Noida - Earnings Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Profit Margin in Noida | Earnings & ROI Guide",
    description:
      "Learn grocery store profit margins in Noida. Discover ROI, margins, and strategies to increase earnings in the grocery business.",
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