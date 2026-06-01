import React from "react";
import Content from "./Content";

export const metadata = {
  // ✅ TITLE
  title: "Supermarket Franchise in Bareilly | Buyzaar Mart",

  // ✅ DESCRIPTION
  description:
    "Own a Buyzaar Mart franchise in Bareilly from ₹15,25,000. Build a profitable supermarket business with full support, training, and limited-area franchise access.",

  keywords: [
    "supermarket franchise in Bareilly",
    "franchise opportunity in Bareilly",
    "grocery store franchise Bareilly",
    "Buyzaar Mart franchise Bareilly",
    "Buyzaar Mart dealership Bareilly",
    "franchise investment Bareilly",
    "supermarket franchise cost Bareilly",
    "best franchise to buy in Bareilly",
    "profitable business opportunity Bareilly",
    "supermarket franchise Rajendra Nagar Bareilly",
    "grocery franchise Delapeer Bareilly",
    "retail franchise Civil Lines Bareilly",
    "franchise business Prem Nagar Bareilly",
    "supermarket franchise Model Town Bareilly",
    "grocery franchise Pilibhit Bypass Bareilly",
    "retail franchise opportunity Bareilly",
    "franchise business in Bareilly UP",
    "FOCM franchise Bareilly",
    "FOCO franchise Bareilly",
    "passive franchise investment Bareilly",
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/bareilly",
  },

  openGraph: {
    title: "Franchise in Bareilly | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in Bareilly from ₹15.25L with Buyzaar Mart. Full operational support, trusted retail model, and limited franchise availability.",
    url: "https://www.thebuyzaarmart.com/cities/bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Bareilly",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Bareilly | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Bareilly from ₹15.25L. Full training, setup, and operational support. Apply for limited slots.",
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