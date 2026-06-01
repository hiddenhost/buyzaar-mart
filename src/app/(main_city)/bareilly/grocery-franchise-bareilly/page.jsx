import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Franchise Bareilly | Start Your Supermarket with The Buyzaar Mart",
  description:
    "Looking for a profitable grocery franchise in Bareilly? Partner with The Buyzaar Mart — India's trusted FOCM supermarket franchise starting at ₹15 Lakh. Full setup, supply chain & ongoing support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/grocery-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "Grocery Franchise Bareilly | Start Your Supermarket with The Buyzaar Mart",
    description:
      "Looking for a profitable grocery franchise in Bareilly? Partner with The Buyzaar Mart — India's trusted FOCM supermarket franchise starting at ₹15 Lakh. Full setup, supply chain & ongoing support. Apply now!",
    url: "https://www.thebuyzaarmart.com/bareilly/grocery-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Bareilly | Start Your Supermarket with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Franchise Bareilly | Start Your Supermarket with The Buyzaar Mart",
    description:
      "Looking for a profitable grocery franchise in Bareilly? Partner with The Buyzaar Mart — India's trusted FOCM supermarket franchise starting at ₹15 Lakh. Full setup, supply chain & ongoing support. Apply now!",
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