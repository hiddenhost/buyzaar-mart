import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Franchise Lucknow | Start Your Supermarket Business with The Buyzaar Mart",
  description:
    "Want to start a grocery franchise in Lucknow? Join The Buyzaar Mart from ₹15 Lakh with FOCM & FOCO models, full brand support, POS technology, and inventory take-back guarantee. Apply now at thebuyzaarmart.com",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/grocery-franchise-in-lucknow",
  },
  openGraph: {
    title:
      "Grocery Franchise Lucknow | Start Your Supermarket Business with The Buyzaar Mart",
    description:
      "Want to start a grocery franchise in Lucknow? Join The Buyzaar Mart from ₹15 Lakh with FOCM & FOCO models, full brand support, POS technology, and inventory take-back guarantee. Apply now at thebuyzaarmart.com",
    url: "https://www.thebuyzaarmart.com/lucknow/grocery-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Lucknow | Start Your Supermarket Business with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Franchise Lucknow | Start Your Supermarket Business with The Buyzaar Mart",
    description:
      "Want to start a grocery franchise in Lucknow? Join The Buyzaar Mart from ₹15 Lakh with FOCM & FOCO models, full brand support, POS technology, and inventory take-back guarantee. Apply now at thebuyzaarmart.com",
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