import React from "react";
import Content from "./Content";

export const metadata = {

  // ✅ TITLE — 58 chars | Primary keyword first, brand at end
  title: "Supermarket Franchise in Ghaziabad | Buyzaar Mart",

  // ✅ DESCRIPTION — 154 chars | Keyword + USP + CTA + urgency
  description:
    "Own a Buyzaar Mart franchise in Ghaziabad from ₹15,25,000 Lakhs. Earn ₹18–30L/month in NCR's top retail market. Full support included. Limited slots — apply now!",

 
  keywords: [
    "supermarket franchise in Ghaziabad",
    "franchise opportunity in Ghaziabad",
    "grocery store franchise Ghaziabad",
    "Buyzaar Mart franchise Ghaziabad",
    "Buyzaar Mart dealership Ghaziabad",
    "franchise investment Ghaziabad",
    "supermarket franchise cost Ghaziabad",
    "best franchise to buy in Ghaziabad",
    "profitable business opportunity Ghaziabad",
    "supermarket franchise Indirapuram",
    "grocery franchise Vaishali Ghaziabad",
    "retail franchise Vasundhara",
    "franchise business Raj Nagar Extension",
    "supermarket franchise Crossings Republik",
    "supermarket franchise NCR",
    "retail franchise opportunity Uttar Pradesh",
    "franchise business near Delhi",
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/ghaziabad",
  },
  openGraph: {
    title: "Franchise in Ghaziabad | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in Indirapuram, Vaishali or Vasundhara from ₹14.7L. Earn up to ₹30L/month with Buyzaar Mart. Apply today.",
    url: "https://www.thebuyzaarmart.com/cities/ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Ghaziabad NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Ghaziabad | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Ghaziabad from ₹14.7L. High-footfall NCR market. Full training + ops support. Limited slots open.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ ROBOTS — Ensure Google indexes and follows fully
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