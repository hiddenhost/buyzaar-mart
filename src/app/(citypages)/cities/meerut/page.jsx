import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Buyzaar Mart Franchise in Meerut | Supermarket Franchise Investment Opportunity",
  description:
    "Start a profitable Buyzaar Mart supermarket franchise in Meerut. Investment ₹20-45 lakhs. Monthly revenue up to ₹30 lakhs. Complete training & support. Apply now!",
  keywords: [
    "buyzaar mart franchise meerut",
    "supermarket franchise meerut",
    "grocery franchise meerut",
    "retail franchise opportunity meerut",
    "franchise business meerut",
    "buyzaar mart dealership meerut",
    "profitable franchise meerut",
    "supermarket business meerut"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Buyzaar Mart Franchise in Meerut | Supermarket Franchise Opportunity",
    description:
      "Launch your supermarket business in Meerut with Buyzaar Mart. Investment ₹20-45 lakhs. High revenue potential with complete franchise support.",
    url: "https://www.thebuyzaarmart.com/cities/meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Meerut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Meerut | Start Your Supermarket Business",
    description:
      "Open a high-revenue supermarket franchise in Meerut. Proven business model with complete support from Buyzaar Mart.",
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