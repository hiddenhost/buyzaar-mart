import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Mart Business Under 20 Lakh in Bareilly | Buyzaar Mart",
  description:
    "Start a branded mart franchise in Bareilly under ₹20 lakh with Buyzaar Mart. Low investment, high growth retail business with full brand support. Enquire now!",
  keywords: [
    "franchise business under 20 lakh",
    "mart franchise Bareilly",
    "low investment franchise Bareilly",
    "Buyzaar Mart Mini Mart franchise",
    "grocery franchise under 20 lakh",
    "small investment retail franchise",
    "budget franchise Bareilly",
    "affordable mart franchise India",
    "retail business under 20 lakh",
    "franchise opportunity Uttar Pradesh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/franchise-mart-business-under-20-lakh-in-bareilly",
  },
  openGraph: {
    title: "Franchise Mart Business Under 20 Lakh in Bareilly | Buyzaar Mart",
    description:
      "Start a branded mart franchise in Bareilly under ₹20 lakh with Buyzaar Mart. Low investment, high growth retail business with full brand support. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/franchise-mart-business-under-20-lakh-in-bareilly",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Mart Business Under 20 Lakh in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Mart Business Under 20 Lakh in Bareilly | Buyzaar Mart",
    description:
      "Start a branded mart franchise in Bareilly under ₹20 lakh with Buyzaar Mart. Low investment, high growth retail business with full brand support. Enquire now!",
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