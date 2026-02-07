import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Franchise in Noida | Low Investment Opportunity ",

  description:
    "Start your Grocery Mart franchise in Noida with low investment and high profit potential. Get complete setup support and grow your retail business today.",

  keywords:
    "grocery store franchise cost in noida, profitable grocery franchise in noida, best grocery franchise to start in noida, mini supermarket franchise noida, retail grocery franchise noida, grocery business opportunity in noida, grocery franchise under 10 lakhs noida, kirana franchise in noida, ready to start grocery store franchise noida, grocery dealership in noida, food retail franchise noida",	

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-franchise-in-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Grocery Mart Franchise in Noida | Low Investment Opportunity",
    description:
      "Start your Grocery Mart franchise in Noida with low investment and high profit potential. Get complete setup support and grow your retail business today.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-franchise-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Franchise in Noida | Low Investment Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Mart Franchise in Noida | Low Investment Opportunity ",
    description:
      "Start your Grocery Mart franchise in Noida with low investment and high profit potential. Get complete setup support and grow your retail business today.",
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
