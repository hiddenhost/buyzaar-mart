import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise in Noida | Low Investment & High Profit",

  description:
    "Start a supermarket franchise in Noida with low investment and strong profit potential. Get complete setup support, trusted supply chain, and grow your retail business fast.",

  keywords:
    "affordable supermarket franchise noida, supermarket business opportunity in noida, supermarket franchise cost in noida, profitable supermarket franchise in noida, mini supermarket franchise noida, retail supermarket franchise noida, start a supermarket in noida, supermarket dealership in noida, food retail franchise noida, supermarket store franchise noida",	

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/supermarket-franchise-in-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Supermarket Franchise in Noida | Low Investment & High Profit",
    description:
      "Start a supermarket franchise in Noida with low investment and strong profit potential. Get complete setup support, trusted supply chain, and grow your retail business fast.",
    url: "https://www.thebuyzaarmart.com/cities/noida/supermarket-franchise-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise in Noida | Low Investment & High Profitr",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Supermarket Franchise in Noida | Low Investment & High Profit ",
    description:
      "Start a supermarket franchise in Noida with low investment and strong profit potential. Get complete setup support, trusted supply chain, and grow your retail business fast.",
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
