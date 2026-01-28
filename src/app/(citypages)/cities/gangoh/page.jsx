import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Gangoh | Supermarket & Grocery Store",
  description:
    "Supermarket and grocery store in Gangoh offering fresh groceries, daily essentials, packaged foods, and household products at affordable prices.",
  keywords: [
    "supermarket in gangoh",
    "grocery store gangoh",
    "daily needs store gangoh",
    "buyzaar mart gangoh",
    "retail store gangoh"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Gangoh | Supermarket & Grocery Store",
    description:
      "Supermarket and grocery store in Gangoh offering fresh groceries, daily essentials, packaged foods, and household products at affordable prices.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Gangoh | Supermarket & Grocery Store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Gangoh | Supermarket & Grocery Store",
    description:
      "Visit The Buyzaar Mart in Gangoh for groceries, daily essentials, and quality retail shopping.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return <Content />;
}