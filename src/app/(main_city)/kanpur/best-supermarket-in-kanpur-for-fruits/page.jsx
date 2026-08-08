import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket in Kanpur for Fresh Fruits | The Buyzaar Mart",
  description:
    "Looking for the best supermarket in Kanpur for fresh fruits? Discover why The Buyzaar Mart offers the freshest, hygienically stored, and best-priced fruits across Kanpur.",
  keywords: [
    "best supermarket in Kanpur for fruits",
    "fresh fruits Kanpur",
    "fruit store Kanpur",
    "fresh fruit shop Kanpur",
    "supermarket for fresh fruits Kanpur",
    "grocery store with fresh fruits Kanpur",
    "best fruit market Kanpur",
    "seasonal fruits Kanpur",
    "organic fruits Kanpur",
    "imported fruits Kanpur",
    "fresh vegetables and fruits Kanpur",
    "daily fresh fruits Kanpur",
    "quality fruits Kanpur",
    "fruit shopping Kanpur",
    "affordable fruits Kanpur",
    "premium fruits Kanpur",
    "supermarket with fresh produce Kanpur",
    "healthy fruits Kanpur",
    "fresh grocery store Kanpur",
    "fruits and vegetables store Kanpur",
    "one stop supermarket Kanpur",
    "family supermarket Kanpur",
    "grocery shopping Kanpur",
    "daily essentials supermarket Kanpur",
    "best grocery store in Kanpur",
    "fresh produce Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/best-supermarket-in-kanpur-for-fruits",
  },
  openGraph: {
    title: "Best Supermarket in Kanpur for Fresh Fruits | The Buyzaar Mart",
    description:
      "Looking for the best supermarket in Kanpur for fresh fruits? Discover why The Buyzaar Mart offers the freshest, hygienically stored, and best-priced fruits across Kanpur.",
    url: "https://www.thebuyzaarmart.com/kanpur/best-supermarket-in-kanpur-for-fruits",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Supermarket in Kanpur for Fresh Fruits | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Supermarket in Kanpur for Fresh Fruits | The Buyzaar Mart",
    description:
      "Looking for the best supermarket in Kanpur for fresh fruits? Discover why The Buyzaar Mart offers the freshest, hygienically stored, and best-priced fruits across Kanpur.",
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