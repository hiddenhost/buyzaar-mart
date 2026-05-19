import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Opportunity in Kanpur | Mini Mart, Super Mart & Hyper Mart – The Buyzaar Mart",
  description:
    "Looking for a profitable franchise opportunity in Kanpur? The Buyzaar Mart offers Mini Mart, Super Mart & Hyper Mart franchise models starting from ₹15 Lakh.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/grocery-store-franchise-in-kanpur",
  },
  openGraph: {
    title:
      "Franchise Opportunity in Kanpur | Mini Mart, Super Mart & Hyper Mart – The Buyzaar Mart",
    description:
      "Looking for a profitable franchise opportunity in Kanpur? The Buyzaar Mart offers Mini Mart, Super Mart & Hyper Mart franchise models starting from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/kanpur/grocery-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity in Kanpur | Mini Mart, Super Mart & Hyper Mart – The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Opportunity in Kanpur | Mini Mart, Super Mart & Hyper Mart – The Buyzaar Mart",
    description:
      "Looking for a profitable franchise opportunity in Kanpur? The Buyzaar Mart offers Mini Mart, Super Mart & Hyper Mart franchise models starting from ₹15 Lakh.",
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