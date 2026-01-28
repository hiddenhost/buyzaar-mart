import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Buyzaar Mart Franchise in Saharanpur | Supermarket Franchise Investment",
  description:
    "Open Buyzaar Mart supermarket franchise in Saharanpur. Investment ₹12-40 lakhs. Three store formats available. Complete training, supply chain & marketing support. Apply now!",
  keywords: [
    "buyzaar mart franchise saharanpur",
    "supermarket franchise saharanpur",
    "grocery franchise saharanpur",
    "retail franchise opportunity saharanpur",
    "franchise business saharanpur",
    "buyzaar mart dealership saharanpur",
    "supermarket franchise investment saharanpur",
    "profitable franchise saharanpur"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Buyzaar Mart Franchise in Saharanpur | Supermarket Franchise Opportunity",
    description:
      "Launch your supermarket franchise in Saharanpur with Buyzaar Mart. Investment options from ₹12-40 lakhs. Complete business support provided.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Saharanpur | Supermarket Business",
    description:
      "Start your profitable supermarket business in Saharanpur. Flexible investment options. Complete support from Buyzaar Mart.",
    images: ["https://www.thebuyzaarmart.com/logo.jpg"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return <Content />;
}