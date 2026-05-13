import React from "react";
import Content from "./Content";

export const metadata = {

  // ✅ TITLE — 55 chars | Primary keyword first, brand at end
  title: "Supermarket Franchise in Delhi | Buyzaar Mart",

  // ✅ DESCRIPTION — 155 chars | Keyword + USP + CTA + urgency
  description:
    "Own a Buyzaar Mart franchise in Delhi from ₹15,25,000. Earn ₹20–35L/month in India's largest retail market. Full support included. Limited slots — apply now!",

  keywords: [
    "supermarket franchise in Delhi",
    "franchise opportunity in Delhi",
    "grocery store franchise Delhi",
    "Buyzaar Mart franchise Delhi",
    "Buyzaar Mart dealership Delhi",
    "franchise investment Delhi",
    "supermarket franchise cost Delhi",
    "best franchise to buy in Delhi",
    "profitable business opportunity Delhi",
    "supermarket franchise Dwarka",
    "grocery franchise Rohini Delhi",
    "retail franchise Janakpuri",
    "franchise business Uttam Nagar",
    "supermarket franchise Mayur Vihar",
    "supermarket franchise Vasant Kunj",
    "grocery franchise Laxmi Nagar Delhi",
    "retail franchise opportunity Delhi NCR",
    "franchise business Delhi NCR",
    "FOCM franchise Delhi",
    "FOCO franchise Delhi",
    "passive franchise investment Delhi",
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/delhi",
  },

  openGraph: {
    title: "Franchise in Delhi | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in Dwarka, Rohini or Janakpuri from ₹15.25L. Earn up to ₹35L/month with Buyzaar Mart. Apply today.",
    url: "https://www.thebuyzaarmart.com/cities/delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Delhi | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Delhi from ₹15.25L. India's largest retail market. Full training + ops support. Limited slots open.",
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