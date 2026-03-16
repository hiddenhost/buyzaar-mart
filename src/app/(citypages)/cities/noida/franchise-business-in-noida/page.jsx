import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business in Noida | The Buyzaar Mart Opportunity",

  description:
    "Looking to start a franchise business in Noida? The Buyzaar Mart offers a structured neighborhood retail model with strong demand for groceries and daily essential",

  keywords:
    "franchise business noida, buyzaar mart franchise, supermarket franchise noida, retail franchise noida, grocery franchise noida, business opportunity noida, neighborhood store franchise, franchise in noida sectors, essential retail franchise, noida franchise opportunity",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/franchise-business-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Franchise Business in Noida | The Buyzaar Mart Opportunity",
    description: "Looking to start a franchise business in Noida? The Buyzaar Mart offers a structured neighborhood retail model with strong demand for groceries and daily essential",
    url: "https://www.thebuyzaarmart.com/cities/noida/franchise-business-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business in Noida - The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business in Noida | The Buyzaar Mart Opportunity",
    description: "Looking to start a franchise business in Noida? The Buyzaar Mart offers a structured neighborhood retail model with strong demand for groceries and daily essential",
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
