import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Buyzaar Mart Franchise | Supermarket Franchise Opportunity in India",
  description:
    "Apply for Buyzaar Mart franchise and start your own profitable supermarket business in India. Low investment, strong brand support, complete training, and scalable retail franchise model.",

  keywords: [
    "buyzaar mart franchise",
    "supermarket franchise india",
    "grocery franchise opportunity",
    "retail franchise business india",
    "buyzaar mart dealership",
    "low investment supermarket franchise",
    "franchise business opportunity india"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/franchise",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Buyzaar Mart Franchise | Supermarket Franchise Opportunity in India",
    description:
      "Start your supermarket franchise journey with Buyzaar Mart. Proven retail business model, full operational support, and franchise opportunities across India.",
    url: "https://www.thebuyzaarmart.com/franchise",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise | Start Supermarket Franchise in India",
    description:
      "Looking to start a supermarket franchise? Join Buyzaar Mart with a low investment, trusted brand, and complete business support.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return <Content />;
}
