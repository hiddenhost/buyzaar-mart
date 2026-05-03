import React from "react";
import Content from "./Content";

export const metadata = {
  // ✅ TITLE
  title: "Supermarket Franchise in Gurgaon | Buyzaar Mart",

  // ✅ DESCRIPTION
  description:
    "Own a Buyzaar Mart franchise in Gurgaon from ₹15,25,000. Tap into NCR's high-growth retail market with full support included. Limited slots — apply now!",

  keywords: [
    "supermarket franchise in Gurgaon",
    "supermarket franchise in Gurugram",
    "franchise opportunity in Gurgaon",
    "grocery store franchise Gurgaon",
    "Buyzaar Mart franchise Gurgaon",
    "Buyzaar Mart dealership Gurgaon",
    "franchise investment Gurgaon",
    "supermarket franchise cost Gurgaon",
    "best franchise to buy in Gurgaon",
    "profitable business opportunity Gurgaon",
    "supermarket franchise DLF Gurgaon",
    "grocery franchise Sushant Lok Gurgaon",
    "retail franchise Golf Course Road Gurgaon",
    "franchise business Sohna Road Gurgaon",
    "supermarket franchise New Gurgaon",
    "supermarket franchise NCR",
    "retail franchise opportunity Haryana",
    "franchise business near Delhi",
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gurgaon",
  },

  openGraph: {
    title: "Franchise in Gurgaon | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in DLF, Sushant Lok, Sohna Road, or New Gurgaon from ₹15,25,000. Grow with Buyzaar Mart and apply today.",
    url: "https://www.thebuyzaarmart.com/cities/gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Gurgaon NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Gurgaon from ₹15,25,000. High-potential NCR market. Full training + ops support. Limited slots open.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ ROBOTS
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return <Content />;
}