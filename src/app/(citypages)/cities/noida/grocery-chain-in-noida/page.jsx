import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain in Noida | The Buyzaar Mart Expansion Excellence",

  description:
    "Discover The Buyzaar Mart, leading grocery chain in Noida. Multi-location convenience, consistent quality, fresh daily across sectors. Join our trusted network for seamless shopping today!",

  keywords:
    "grocery chain noida, buyzaar mart noida, noida grocery stores, supermarket chain noida, retail chain noida, grocery network noida, buyzaar mart expansion, noida grocery excellence, multi-location grocery noida, trusted grocery chain noida",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-chain-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Chain in Noida | The Buyzaar Mart Expansion Excellence",
    description: "Discover The Buyzaar Mart, leading grocery chain in Noida. Multi-location convenience, consistent quality, fresh daily across sectors. Join our trusted network for seamless shopping today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-chain-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Chain in Noida - The Buyzaar Mart Expansion Excellence",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain in Noida | The Buyzaar Mart Expansion Excellence",
    description: "Discover The Buyzaar Mart, leading grocery chain in Noida. Multi-location convenience, consistent quality, fresh daily across sectors. Join our trusted network for seamless shopping today!",
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
