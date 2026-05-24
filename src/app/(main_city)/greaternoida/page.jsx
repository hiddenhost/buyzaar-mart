import React from "react";
import Content from "./Content";

export const metadata = {
  // ✅ TITLE
  title: "Supermarket Franchise in Greater Noida | Buyzaar Mart",

  // ✅ DESCRIPTION
  description:
    "Own a Buyzaar Mart franchise in Greater Noida from ₹15,25,000. Tap into NCR's high-growth retail market with full support included. Limited slots — apply now!",

  keywords: [
    "supermarket franchise in Greater Noida",
    "franchise opportunity in Greater Noida",
    "grocery store franchise Greater Noida",
    "Buyzaar Mart franchise Greater Noida",
    "Buyzaar Mart dealership Greater Noida",
    "franchise investment Greater Noida",
    "supermarket franchise cost Greater Noida",
    "best franchise to buy in Greater Noida",
    "profitable business opportunity Greater Noida",
    "supermarket franchise Pari Chowk",
    "grocery franchise Alpha 1 Greater Noida",
    "retail franchise Greater Noida West",
    "franchise business Knowledge Park",
    "supermarket franchise Beta 1 Greater Noida",
    "supermarket franchise Uttar Pradesh",
    "retail franchise opportunity NCR",
    "franchise business Greater Noida NCR",
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/greater-noida",
  },

  openGraph: {
    title: "Franchise in Greater Noida | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in Pari Chowk, Alpha, Beta, Greater Noida West, or Knowledge Park from ₹15,25,000. Grow with Buyzaar Mart and apply today.",
    url: "https://www.thebuyzaarmart.com/greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Greater Noida Uttar Pradesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Greater Noida | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Greater Noida from ₹15,25,000. High-potential NCR market. Full training + ops support. Limited slots open.",
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