import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Retail Business Gangoh | The Buyzaar Mart Profit Guide",
  description: "Launch grocery retail business Gangoh with The Buyzaar Mart. Proven Saharanpur model, institutional supply chain, complete execution roadmap. Secure Gangoh's organized retail opportunity!",
  keywords: [
    "grocery retail business gangoh, buyzaar mart gangoh, grocery business gangoh, organized retail gangoh, saharanpur grocery retail, grocery franchise gangoh, profitable grocery business gangoh, gangoh supermarket business, retail business opportunity gangoh, buyzaar mart profit guide",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-retail-business-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Retail Business Gangoh | The Buyzaar Mart Profit Guide",
    description: "Launch grocery retail business Gangoh with The Buyzaar Mart. Proven Saharanpur model, institutional supply chain, complete execution roadmap. Secure Gangoh's organized retail opportunity!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-retail-business-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Retail Business Gangoh | The Buyzaar Mart Profit Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Retail Business Gangoh | The Buyzaar Mart Profit Guide",
    description: "Launch grocery retail business Gangoh with The Buyzaar Mart. Proven Saharanpur model, institutional supply chain, complete execution roadmap. Secure Gangoh's organized retail opportunity!",
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
