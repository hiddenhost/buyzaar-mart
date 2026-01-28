import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Buyzaar Mart Franchise in Noida | Premium Supermarket Franchise NCR",
  description:
    "Launch a premium Buyzaar Mart supermarket franchise in Noida. Investment ₹35-75 lakhs. Monthly revenue up to ₹60 lakhs. Complete support for NCR's most lucrative market. Apply now!",
  keywords: [
    "buyzaar mart franchise noida",
    "supermarket franchise noida",
    "grocery franchise noida",
    "retail franchise opportunity noida",
    "franchise business noida",
    "premium supermarket franchise ncr",
    "buyzaar mart dealership noida",
    "profitable franchise noida"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Buyzaar Mart Franchise in Noida | Premium Supermarket Franchise NCR",
    description:
      "Launch a premium supermarket franchise in Noida with Buyzaar Mart. High ROI potential in NCR's most affluent city. Investment ₹35-75 lakhs.",
    url: "https://www.thebuyzaarmart.com/cities/noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Premium Franchise Opportunity in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Noida | Premium Supermarket Business",
    description:
      "Launch your premium supermarket business in Noida NCR. High-revenue potential with complete franchise support from Buyzaar Mart.",
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