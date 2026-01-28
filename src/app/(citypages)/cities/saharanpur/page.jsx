import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Saharanpur | Premium Supermarket & Grocery Store",
  description:
    "Premium supermarket and grocery store in Saharanpur offering fresh groceries, daily essentials, household products, personal care items, and quality products at competitive prices with excellent customer service.",
  keywords: [
    "supermarket in saharanpur",
    "grocery store saharanpur",
    "daily needs store saharanpur",
    "buyzaar mart saharanpur",
    "retail store saharanpur",
    "fresh groceries saharanpur",
    "best supermarket saharanpur"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Saharanpur | Premium Supermarket & Grocery Store",
    description:
      "Premium supermarket and grocery store in Saharanpur offering fresh groceries, daily essentials, household products, personal care items, and quality products at competitive prices with excellent customer service.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Saharanpur | Premium Supermarket & Grocery Store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Saharanpur | Premium Supermarket & Grocery Store",
    description:
      "Visit The Buyzaar Mart in Saharanpur for premium groceries, fresh products, daily essentials, and unmatched shopping experience.",
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