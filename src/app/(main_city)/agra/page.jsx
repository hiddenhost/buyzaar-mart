import React from "react";
import Content from "./Content";

export const metadata = {
  // ✅ TITLE
  title: "Supermarket Franchise in Agra |  Buyzaar Mart",

  // ✅ DESCRIPTION
  description:
    "Own a Buyzaar Mart franchise in Agra from ₹15,25,000. Build a profitable supermarket business with full support, training, and limited-area franchise access.",

  keywords: [
    "supermarket franchise in Agra",
    "franchise opportunity in Agra",
    "grocery store franchise Agra",
    "Buyzaar Mart franchise Agra",
    "Buyzaar Mart dealership Agra",
    "franchise investment Agra",
    "supermarket franchise cost Agra",
    "best franchise to buy in Agra",
    "profitable business opportunity Agra",
    "supermarket franchise Sikandra Agra",
    "grocery franchise Dayal Bagh Agra",
    "retail franchise Civil Lines Agra",
    "franchise business Kamla Nagar Agra",
    "supermarket franchise Shahganj Agra",
    "grocery franchise Fatehabad Road Agra",
    "retail franchise opportunity Agra",
    "franchise business in Agra UP",
    "FOCM franchise Agra",
    "FOCO franchise Agra",
    "passive franchise investment Agra",
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/agra",
  },

  openGraph: {
    title: "Franchise in Agra | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in Agra from ₹15.25L with Buyzaar Mart. Full operational support, trusted retail model, and limited franchise availability.",
    url: "https://www.thebuyzaarmart.com/cities/agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Agra",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Agra | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Agra from ₹15.25L. Full training, setup, and operational support. Apply for limited slots.",
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