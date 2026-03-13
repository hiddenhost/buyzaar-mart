import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Business Plan in Saharanpur | Growth Roadmap",

  description:
    "Build a supermarket business plan in Saharanpur focused on scalability and market demand.",

  keywords:
    "supermarket business plan saharanpur, supermarket store business plan saharanpur, supermarket startup plan saharanpur, supermarket business strategy saharanpur, supermarket business model saharanpur, supermarket planning saharanpur, supermarket retail plan saharanpur, supermarket business guide saharanpur, supermarket investment plan saharanpur, supermarket franchise plan saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-business-plan-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Supermarket Business Plan in Saharanpur | Growth Roadmap",
    description:
      "Build a supermarket business plan in Saharanpur focused on scalability and market demand.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-business-plan-saharanpur",

    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Business Plan in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Business Plan in Saharanpur | Growth Roadmap",
    description:
      "Build a supermarket business plan in Saharanpur focused on scalability and market demand.",
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
