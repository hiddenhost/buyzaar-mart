import React from "react";
import Content from "./Content";

export const metadata = {
  // ✅ TITLE
  title: "Supermarket Franchise in Kanpur | Buyzaar Mart",

  // ✅ DESCRIPTION
  description:
    "Own a Buyzaar Mart franchise in Kanpur from ₹15,25,000. Tap into UP's high-growth retail market with full support included. Limited slots — apply now!",

  keywords: [
    "supermarket franchise in Kanpur",
    "franchise opportunity in Kanpur",
    "grocery store franchise Kanpur",
    "Buyzaar Mart franchise Kanpur",
    "Buyzaar Mart dealership Kanpur",
    "franchise investment Kanpur",
    "supermarket franchise cost Kanpur",
    "best franchise to buy in Kanpur",
    "profitable business opportunity Kanpur",
    "supermarket franchise Kakadeo Kanpur",
    "grocery franchise Kidwai Nagar Kanpur",
    "retail franchise Civil Lines Kanpur",
    "franchise business Govind Nagar Kanpur",
    "supermarket franchise Kalyanpur Kanpur",
    "supermarket franchise Uttar Pradesh",
    "retail franchise opportunity UP",
    "franchise business Kanpur Nagar",
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/kanpur",
  },

  openGraph: {
    title: "Franchise in Kanpur | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in Kakadeo, Kidwai Nagar, Civil Lines, or Kalyanpur from ₹15,25,000. Grow with Buyzaar Mart and apply today.",
    url: "https://www.thebuyzaarmart.com/kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Kanpur Uttar Pradesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Kanpur | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Kanpur from ₹15,25,000. High-potential UP market. Full training + ops support. Limited slots open.",
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