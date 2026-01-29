import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Store Features | Buyzaar Mart Supermarket Franchise Facilities",
  description:
    "Explore Buyzaar Mart store features designed for successful supermarket franchises. Modern layout, efficient inventory systems, branding support, and customer-friendly retail experience.",

  keywords: [
    "buyzaar mart store features",
    "supermarket franchise store design",
    "grocery store layout features",
    "retail franchise infrastructure",
    "supermarket franchise facilities",
    "buyzaar mart retail setup",
    "organized retail store features"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/store-features",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Store Features | Buyzaar Mart Supermarket Franchise Facilities",
    description:
      "Discover Buyzaar Mart’s advanced store features including modern layouts, optimized inventory systems, and a customer-focused retail experience.",
    url: "https://www.thebuyzaarmart.com/store-features",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Store Features and Retail Infrastructure",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Store Features | Buyzaar Mart Franchise Store Setup",
    description:
      "See the key store features that make Buyzaar Mart a successful supermarket franchise brand across India.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return <Content />;
}
