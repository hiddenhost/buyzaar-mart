import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Buyzaar Mart Franchise in Gangoh | Supermarket Franchise Opportunity",
  description:
    "Start your own Buyzaar Mart supermarket franchise in Gangoh. Low investment, high returns. Get complete support, training, and established supply chain. Apply for franchise now!",
  keywords: [
    "buyzaar mart franchise gangoh",
    "supermarket franchise gangoh",
    "grocery franchise gangoh",
    "retail franchise opportunity gangoh",
    "buyzaar mart dealership gangoh",
    "franchise business gangoh",
    "supermarket business gangoh"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Buyzaar Mart Franchise in Gangoh | Supermarket Franchise Opportunity",
    description:
      "Start your own Buyzaar Mart supermarket franchise in Gangoh. Low investment, high returns. Get complete support, training, and established supply chain.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Gangoh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Gangoh | Supermarket Franchise Opportunity",
    description:
      "Start your own profitable supermarket franchise in Gangoh with Buyzaar Mart. Complete business support and training provided.",
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