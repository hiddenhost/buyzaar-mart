import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain Gangoh | The Buyzaar Mart Regional",
  description: "Discover grocery chain Gangoh leadership with The Buyzaar Mart. Institutional model captures 73 kirana market, Saharanpur supply excellence, multi-unit expansion platform. Gangoh flagship launches organized retail",
  keywords: [
    "grocery chain gangoh, buyzaar mart chain gangoh, gangoh grocery chain, regional grocery chain saharanpur, kirana replacement gangoh, multi-unit grocery gangoh, organized retail chain gangoh, buyzaar mart regional platform, gangoh retail leadership, saharanpur grocery chain",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-chain-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Chain Gangoh | The Buyzaar Mart Regional",
    description: "Discover grocery chain Gangoh leadership with The Buyzaar Mart. Institutional model captures 73 kirana market, Saharanpur supply excellence, multi-unit expansion platform. Gangoh flagship launches organized retail",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-chain-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Chain Gangoh | The Buyzaar Mart Regional",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain Gangoh | The Buyzaar Mart Regional",
    description: "Discover grocery chain Gangoh leadership with The Buyzaar Mart. Institutional model captures 73 kirana market, Saharanpur supply excellence, multi-unit expansion platform. Gangoh flagship launches organized retail",
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
