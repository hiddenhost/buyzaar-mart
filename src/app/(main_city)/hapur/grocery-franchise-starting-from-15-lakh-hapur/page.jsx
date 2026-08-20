import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Starting From 15 Lakh in Hapur | The Buyzaar Mart",
  description:
    "Explore a grocery franchise starting from 15 lakh in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, margins, and the full application process.",
  keywords: [
    "grocery franchise 15 lakh Hapur",
    "low investment grocery franchise Hapur",
    "Buyzaar Mart franchise Hapur",
    "franchise starting from 15 lakh",
    "grocery franchise investment Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "best franchise under 15 lakh Hapur",
    "supermarket franchise Hapur",
    "retail franchise investment Hapur",
    "franchise fee grocery Hapur",
    "franchise profit margin Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "affordable franchise Hapur",
    "neighbourhood store franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/grocery-franchise-starting-from-15-lakh-hapur",
  },
  openGraph: {
    title: "Grocery Franchise Starting From 15 Lakh in Hapur | The Buyzaar Mart",
    description:
      "Explore a grocery franchise starting from 15 lakh in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, margins, and the full application process.",
    url: "https://www.thebuyzaarmart.com/hapur/grocery-franchise-starting-from-15-lakh-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Starting From 15 Lakh in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Starting From 15 Lakh in Hapur | The Buyzaar Mart",
    description:
      "Explore a grocery franchise starting from 15 lakh in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, margins, and the full application process.",
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