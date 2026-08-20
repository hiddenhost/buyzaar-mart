import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Starting 15 Lakh in Hapur | The Buyzaar Mart",
  description:
    "Start a mart franchise from 15 lakh in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, support, margins, and the complete application process.",
  keywords: [
    "mart franchise starting 15 lakh Hapur",
    "grocery franchise 15 lakh Hapur",
    "Buyzaar Mart franchise Hapur",
    "low investment mart franchise Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
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
    "entry level franchise Hapur",
    "neighbourhood store franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/mart-franchise-starting-15-lakh-hapur",
  },
  openGraph: {
    title: "Mart Franchise Starting 15 Lakh in Hapur | The Buyzaar Mart",
    description:
      "Start a mart franchise from 15 lakh in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, support, margins, and the complete application process.",
    url: "https://www.thebuyzaarmart.com/hapur/mart-franchise-starting-15-lakh-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Starting 15 Lakh in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Starting 15 Lakh in Hapur | The Buyzaar Mart",
    description:
      "Start a mart franchise from 15 lakh in Hapur with The Buyzaar Mart. Learn about store formats, investment breakdown, support, margins, and the complete application process.",
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