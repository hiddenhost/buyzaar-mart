import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Business in Noida | Profitable Opportunities at The Buyzaar Mart",

  description:
    "Explore grocery mart business in Noida with The Buyzaar Mart. Discover startup strategies, market potential, operations, and growth tips for success in Noida's booming retail scene.",

  keywords:
    "grocery mart business noida, buyzaar mart noida, noida grocery business, supermarket business noida, grocery store noida, retail business noida, grocery mart opportunity noida, noida retail startup, profitable grocery noida, buyzaar mart opportunities",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-business-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Mart Business in Noida | Profitable Opportunities at The Buyzaar Mart",
    description: "Explore grocery mart business in Noida with The Buyzaar Mart. Discover startup strategies, market potential, operations, and growth tips for success in Noida's booming retail scene.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-business-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Business in Noida - Profitable Opportunities at The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Business in Noida | Profitable Opportunities at The Buyzaar Mart",
    description: "Explore grocery mart business in Noida with The Buyzaar Mart. Discover startup strategies, market potential, operations, and growth tips for success in Noida's booming retail scene.",
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
