import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Low Investment Grocery Business in Noida | The Buyzaar Mart Opportunity",

  description:
    "Start your low investment grocery business in Noida through The Buyzaar Mart. Get guidance on setup, operations, and steady demand in high-growth areas.",

  keywords:
    "retail franchise in noida, the buyzaar mart noida, noida retail franchise, retail business opportunity noida, franchise in noida, buyzaar mart franchise, retail store franchise noida, noida franchise opportunity, business franchise noida, retail investment noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/low-investment-grocery-business-in-noida",
  },

  openGraph: {
    title: "Low Investment Grocery Business in Noida | The Buyzaar Mart Opportunity",
    description:
      "Start your low investment grocery business in Noida through The Buyzaar Mart. Get guidance on setup, operations, and steady demand in high-growth areas.",
    url: "https://www.thebuyzaarmart.com/cities/noida/low-investment-grocery-business-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Grocery Business in Noida | The Buyzaar Mart Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Low Investment Grocery Business in Noida | The Buyzaar Mart Opportunity",
    description:
      "Start your low investment grocery business in Noida through The Buyzaar Mart. Get guidance on setup, operations, and steady demand in high-growth areas.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

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