import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Franchise in Greater Noida | The Buyzaar Mart Supermarket Business",
  description:
    "Looking for a highly profitable grocery franchise in Greater Noida? Partner with The Buyzaar Mart. Explore our FOCM & FOFO grocery store business models with 18-20% gross margins.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/grocery-franchise-in-greater-noida",
  },
  openGraph: {
    title:
      "Grocery Franchise in Greater Noida | The Buyzaar Mart Supermarket Business",
    description:
      "Looking for a highly profitable grocery franchise in Greater Noida? Partner with The Buyzaar Mart. Explore our FOCM & FOFO grocery store business models with 18-20% gross margins.",
    url: "https://www.thebuyzaarmart.com/greater-noida/grocery-franchise-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Greater Noida | The Buyzaar Mart Supermarket Business",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Franchise in Greater Noida | The Buyzaar Mart Supermarket Business",
    description:
      "Looking for a highly profitable grocery franchise in Greater Noida? Partner with The Buyzaar Mart. Explore our FOCM & FOFO grocery store business models with 18-20% gross margins.",
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