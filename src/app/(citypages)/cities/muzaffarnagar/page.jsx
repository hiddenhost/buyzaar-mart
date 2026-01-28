import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Muzaffarnagar | Supermarket & Grocery Store",
  description:
    "Leading supermarket and grocery store in Muzaffarnagar offering fresh groceries, daily essentials, packaged foods, personal care products, and household items at competitive prices.",
  keywords: [
    "supermarket in muzaffarnagar",
    "grocery store muzaffarnagar",
    "daily needs store muzaffarnagar",
    "buyzaar mart muzaffarnagar",
    "retail store muzaffarnagar",
    "fresh groceries muzaffarnagar"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Muzaffarnagar | Supermarket & Grocery Store",
    description:
      "Leading supermarket and grocery store in Muzaffarnagar offering fresh groceries, daily essentials, packaged foods, personal care products, and household items at competitive prices.",
    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Muzaffarnagar | Supermarket & Grocery Store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Muzaffarnagar | Supermarket & Grocery Store",
    description:
      "Visit The Buyzaar Mart in Muzaffarnagar for fresh groceries, daily essentials, and quality products at the best prices.",
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