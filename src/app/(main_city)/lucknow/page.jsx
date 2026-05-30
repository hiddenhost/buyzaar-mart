import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Supermarket Franchise in Lucknow | Buyzaar Mart",

  description:
    "Own a Buyzaar Mart franchise in Lucknow from ₹15,25,000. Tap into Uttar Pradesh's fast-growing retail market with full support included. Limited slots — apply now!",

  keywords: [
    "supermarket franchise in Lucknow",
    "grocery franchise in Lucknow",
    "franchise opportunity in Lucknow",
    "grocery store franchise Lucknow",
    "Buyzaar Mart franchise Lucknow",
    "Buyzaar Mart dealership Lucknow",
    "franchise investment Lucknow",
    "supermarket franchise cost Lucknow",
    "best franchise to buy in Lucknow",
    "profitable business opportunity Lucknow",
    "supermarket franchise Gomti Nagar",
    "grocery franchise Indira Nagar Lucknow",
    "retail franchise Hazratganj Lucknow",
    "franchise business Aliganj Lucknow",
    "supermarket franchise Gomti Nagar Extension",
    "supermarket franchise in Uttar Pradesh",
    "retail franchise opportunity Lucknow",
    "franchise business in UP",
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/lucknow",
  },

  openGraph: {
    title: "Franchise in Lucknow | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in Gomti Nagar, Indira Nagar, Aliganj, Hazratganj, or Lucknow Extension from ₹15,25,000. Grow with Buyzaar Mart and apply today.",
    url: "https://www.thebuyzaarmart.com/lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Lucknow Uttar Pradesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Lucknow | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Lucknow from ₹15,25,000. High-potential UP market. Full training + ops support. Limited slots open.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

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

  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return <Content />;
}