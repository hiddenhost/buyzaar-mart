import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Investment Opportunity in Noida | The Buyzaar Mart",

  description:
    "Explore grocery mart investment opportunity in Noida with The Buyzaar Mart. Proven returns, complete support, prime locations, and rapid scalability in Noida's high-growth retail market. Invest smart today!",

  keywords:
    "grocery mart investment noida, buyzaar mart investment, noida grocery investment, supermarket investment noida, grocery franchise investment, retail investment noida, grocery business investment noida, noida investment opportunity, buyzaar mart returns, scalable grocery investment",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-investment-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Mart Investment Opportunity in Noida | The Buyzaar Mart",
    description: "Explore grocery mart investment opportunity in Noida with The Buyzaar Mart. Proven returns, complete support, prime locations, and rapid scalability in Noida's high-growth retail market. Invest smart today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-investment-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Investment Opportunity in Noida - The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Investment Opportunity in Noida | The Buyzaar Mart",
    description: "Explore grocery mart investment opportunity in Noida with The Buyzaar Mart. Proven returns, complete support, prime locations, and rapid scalability in Noida's high-growth retail market. Invest smart today!",
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
