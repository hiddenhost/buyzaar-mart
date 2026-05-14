import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "The Buyzaar Mart — Grocery Store Franchise Delhi Opportunities",
  description:
    "Join The Buyzaar Mart franchise in Delhi — low-risk grocery & FMCG store formats, end-to-end setup, tech-enabled POS, and 18–20% gross margins. Inquire today.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/grocery-store-franchise-delhi",
  },
  openGraph: {
    title: "The Buyzaar Mart — Grocery Store Franchise Delhi Opportunities",
    description:
      "Join The Buyzaar Mart franchise in Delhi — low-risk grocery & FMCG store formats, end-to-end setup, tech-enabled POS, and 18–20% gross margins. Inquire today.",
    url: "https://www.thebuyzaarmart.com/delhi/grocery-store-franchise-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart — Grocery Store Franchise Delhi Opportunities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Buyzaar Mart — Grocery Store Franchise Delhi Opportunities",
    description:
      "Join The Buyzaar Mart franchise in Delhi — low-risk grocery & FMCG store formats, end-to-end setup, tech-enabled POS, and 18–20% gross margins. Inquire today.",
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