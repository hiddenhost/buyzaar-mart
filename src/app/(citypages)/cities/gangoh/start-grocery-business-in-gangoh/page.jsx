import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start Grocery Business in Gangoh | The Buyzaar Mart Franchise",
  description:
    "Want to start a grocery business in Gangoh? Partner with The Buyzaar Mart franchise and launch a profitable supermarket with full support, low investment & proven systems.",
  keywords: [
    "retail franchise in gangoh",
    "the buyzaar mart gangoh",
    "supermart franchise gangoh",
    "minimart franchise gangoh",
    "grocery franchise gangoh",
    "modern grocery store franchise in gangoh",
    "retail business gangoh",
    "supermarket franchise gangoh",
    "buyzaar mart focm",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/start-grocery-business-in-gangoh",
  },

  openGraph: {
    title: "Start Grocery Business in Gangoh | The Buyzaar Mart Franchise",
    description:
      "Want to start a grocery business in Gangoh? Partner with The Buyzaar Mart franchise and launch a profitable supermarket with full support, low investment & proven systems.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/start-grocery-business-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start Grocery Business in Gangoh | The Buyzaar Mart Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Start Grocery Business in Gangoh | The Buyzaar Mart Franchise",
    description:
      "Want to start a grocery business in Gangoh? Partner with The Buyzaar Mart franchise and launch a profitable supermarket with full support, low investment & proven systems.",
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