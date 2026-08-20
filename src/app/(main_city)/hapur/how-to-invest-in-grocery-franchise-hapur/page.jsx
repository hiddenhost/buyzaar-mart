import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Invest in Grocery Franchise Hapur | Buyzaar Mart Guide",
  description:
    "Learn how to invest in a grocery franchise in Hapur with The Buyzaar Mart, covering investment components, returns, formats, and the complete process.",
  keywords: [
    "how to invest in grocery franchise Hapur",
    "invest grocery franchise Hapur",
    "buyzaar mart Hapur",
    "grocery investment Hapur",
    "supermarket investment Hapur",
    "mini mart investment Hapur",
    "super mart investment Hapur",
    "hyper mart investment Hapur",
    "retail investment Hapur",
    "franchise investment components Hapur",
    "grocery franchise returns Hapur",
    "passive investment franchise Hapur",
    "retail franchise Uttar Pradesh",
    "buyzaar mart franchise apply Hapur",
    "grocery franchise ROI Hapur",
    "franchise investment process Hapur",
    "organised retail investment Hapur",
    "daily needs store investment Hapur",
    "franchise profit margin Hapur",
    "retail business investment Hapur",
    "franchise investment risk Hapur",
    "grocery retail investment opportunity Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-invest-in-grocery-franchise-hapur",
  },
  openGraph: {
    title: "How to Invest in Grocery Franchise Hapur | Buyzaar Mart Guide",
    description:
      "Learn how to invest in a grocery franchise in Hapur with The Buyzaar Mart, covering investment components, returns, formats, and the complete process.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-invest-in-grocery-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Invest in Grocery Franchise Hapur | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Invest in Grocery Franchise Hapur | Buyzaar Mart Guide",
    description:
      "Learn how to invest in a grocery franchise in Hapur with The Buyzaar Mart, covering investment components, returns, formats, and the complete process.",
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