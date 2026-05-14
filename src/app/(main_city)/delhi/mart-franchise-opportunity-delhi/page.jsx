import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "The Buyzaar Mart — Start Your Grocery & Supermarket Franchise in India",
  description:
    "Discover lucrative mart franchise opportunities in Delhi with Buyzaar Mart. Invest from ₹15 Lakhs in Mini, Super, or Hyper Mart formats. FOCM model, 18-20% gross margins, full support, supply chain & marketing. Ideal for Delhi NCR locations. Apply now at thebuyzaarmart.com.",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/",
  },
  openGraph: {
    title:
      "The Buyzaar Mart — Start Your Grocery & Supermarket Franchise in India",
    description:
      "Discover lucrative mart franchise opportunities in Delhi with Buyzaar Mart. Invest from ₹15 Lakhs in Mini, Super, or Hyper Mart formats. FOCM model, 18-20% gross margins, full support, supply chain & marketing. Ideal for Delhi NCR locations. Apply now at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart — Start Your Grocery & Supermarket Franchise in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Buyzaar Mart — Start Your Grocery & Supermarket Franchise in India",
    description:
      "Discover lucrative mart franchise opportunities in Delhi with Buyzaar Mart. Invest from ₹15 Lakhs in Mini, Super, or Hyper Mart formats. FOCM model, 18-20% gross margins, full support, supply chain & marketing. Ideal for Delhi NCR locations. Apply now at thebuyzaarmart.com.",
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