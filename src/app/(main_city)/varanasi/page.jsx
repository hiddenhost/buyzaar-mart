import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Supermarket Franchise in Varanasi |  Buyzaar Mart",
  description:
    "Own a Buyzaar Mart franchise in Varanasi from ₹15,25,000. Build a profitable supermarket business with full support, training, and limited-area franchise access.",
  keywords: [
    "supermarket franchise in Varanasi",
    "franchise opportunity in Varanasi",
    "grocery store franchise Varanasi",
    "Buyzaar Mart franchise Varanasi",
    "Buyzaar Mart dealership Varanasi",
    "franchise investment Varanasi",
    "supermarket franchise cost Varanasi",
    "best franchise to buy in Varanasi",
    "profitable business opportunity Varanasi",
    "supermarket franchise Sigra Varanasi",
    "grocery franchise Lanka Varanasi",
    "retail franchise Mahmoorganj Varanasi",
    "franchise business Sundarpur Varanasi",
    "supermarket franchise Cantonment Varanasi",
    "grocery franchise Ring Road Varanasi",
    "retail franchise opportunity Varanasi",
    "franchise business in Varanasi UP",
    "FOCM franchise Varanasi",
    "FOCO franchise Varanasi",
    "passive franchise investment Varanasi",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/varanasi",
  },
  openGraph: {
    title: "Franchise in Varanasi | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in Varanasi from ₹15.25L with Buyzaar Mart. Full operational support, trusted retail model, and limited franchise availability.",
    url: "https://www.thebuyzaarmart.com/varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Varanasi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Varanasi | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Varanasi from ₹15.25L. Full training, setup, and operational support. Apply for limited slots.",
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