import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Near Me in Noida | Fresh Deals at The Buyzaar Mart",

  description:
    "Searching for \"grocery mart near me Noida\"? Discover The Buyzaar Mart – your closest grocery store with fresh produce, daily essentials, and quick delivery. Shop now for unbeatable convenience in Noida!",

  keywords:
    "grocery mart near me noida, buyzaar mart noida, grocery store noida, fresh groceries noida, grocery delivery noida, nearest grocery store noida, noida supermarket near me, buyzaar mart locations, daily essentials noida, quick grocery delivery noida",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-investment-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Mart Near Me in Noida | Fresh Deals at The Buyzaar Mart",
    description: "Searching for \"grocery mart near me Noida\"? Discover The Buyzaar Mart – your closest grocery store with fresh produce, daily essentials, and quick delivery. Shop now for unbeatable convenience in Noida!",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-investment-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Near Me in Noida - Fresh Deals at The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Near Me in Noida | Fresh Deals at The Buyzaar Mart",
    description: "Searching for \"grocery mart near me Noida\"? Discover The Buyzaar Mart – your closest grocery store with fresh produce, daily essentials, and quick delivery. Shop now for unbeatable convenience in Noida!",
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
