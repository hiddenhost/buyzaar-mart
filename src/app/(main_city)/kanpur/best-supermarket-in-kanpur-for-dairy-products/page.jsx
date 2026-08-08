import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket in Kanpur for Dairy Products | The Buyzaar Mart",
  description:
    "Searching for the best supermarket in Kanpur for dairy products? The Buyzaar Mart offers fresh milk, paneer, curd, and dairy essentials with quality you can trust.",
  keywords: [
    "best supermarket in Kanpur for dairy products",
    "dairy products store Kanpur",
    "fresh dairy products Kanpur",
    "milk products Kanpur",
    "best dairy store in Kanpur",
    "supermarket for dairy products Kanpur",
    "fresh milk Kanpur",
    "curd and yogurt Kanpur",
    "paneer store Kanpur",
    "butter and cheese Kanpur",
    "dairy items Kanpur",
    "grocery store with dairy products Kanpur",
    "fresh paneer Kanpur",
    "dairy supermarket Kanpur",
    "milk and dairy products Kanpur",
    "dairy essentials Kanpur",
    "best grocery store for dairy products Kanpur",
    "supermarket with fresh milk Kanpur",
    "quality dairy products Kanpur",
    "branded dairy products Kanpur",
    "fresh dairy items Kanpur",
    "dairy shopping Kanpur",
    "one stop supermarket Kanpur",
    "family supermarket Kanpur",
    "daily essentials supermarket Kanpur",
    "grocery shopping Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/best-supermarket-in-kanpur-for-dairy-products",
  },
  openGraph: {
    title: "Best Supermarket in Kanpur for Dairy Products | The Buyzaar Mart",
    description:
      "Searching for the best supermarket in Kanpur for dairy products? The Buyzaar Mart offers fresh milk, paneer, curd, and dairy essentials with quality you can trust.",
    url: "https://www.thebuyzaarmart.com/kanpur/best-supermarket-in-kanpur-for-dairy-products",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Supermarket in Kanpur for Dairy Products | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Supermarket in Kanpur for Dairy Products | The Buyzaar Mart",
    description:
      "Searching for the best supermarket in Kanpur for dairy products? The Buyzaar Mart offers fresh milk, paneer, curd, and dairy essentials with quality you can trust.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Services />
    </>
  );
}