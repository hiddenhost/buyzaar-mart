import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart Franchise in Lucknow | Grocery Supermarket Franchise from ₹15 Lakh | The Buyzaar Mart",
  description:
    "Start your own grocery and supermarket franchise in Lucknow with The Buyzaar Mart. Low investment from ₹15 Lakh, FOCM model, full brand support, POS system, and hassle-free inventory management. Apply today.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/grocery-franchise-in-lucknow",
  },
  openGraph: {
    title:
      "Buyzaar Mart Franchise in Lucknow | Grocery Supermarket Franchise from ₹15 Lakh | The Buyzaar Mart",
    description:
      "Start your own grocery and supermarket franchise in Lucknow with The Buyzaar Mart. Low investment from ₹15 Lakh, FOCM model, full brand support, POS system, and hassle-free inventory management. Apply today.",
    url: "https://www.thebuyzaarmart.com/lucknow/grocery-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Lucknow | Grocery Supermarket Franchise from ₹15 Lakh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Franchise in Lucknow | Grocery Supermarket Franchise from ₹15 Lakh | The Buyzaar Mart",
    description:
      "Start your own grocery and supermarket franchise in Lucknow with The Buyzaar Mart. Low investment from ₹15 Lakh, FOCM model, full brand support, POS system, and hassle-free inventory management. Apply today.",
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