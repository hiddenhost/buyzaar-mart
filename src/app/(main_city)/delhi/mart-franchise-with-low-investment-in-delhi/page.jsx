import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise with Low Investment in Delhi | Buyzaar Mart",
  description:
    "Start a mart franchise with low investment in Delhi with Buyzaar Mart. Compact format, brand support, and steady daily demand. Apply now!",
  keywords: [
    "mart franchise low investment Delhi",
    "Buyzaar Mart franchise Delhi",
    "low investment franchise Delhi",
    "budget mart franchise",
    "Mini Mart franchise Delhi",
    "affordable retail franchise",
    "grocery mart franchise Delhi",
    "franchise opportunity Delhi",
    "Buyzaar Mart Mini Mart",
    "small business franchise Delhi",
    "mart franchise with low investment in Delhi",
    "low investment franchise Delhi",
    "mart franchise Delhi",
    "grocery franchise Delhi low investment",
    "Buyzaar Mart franchise Delhi",
    "mini mart franchise Delhi",
    "supermarket franchise Delhi",
    "retail franchise Delhi under 20 lakh",
    "FOCM franchise model",
    "best low investment franchise India"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/mart-franchise-with-low-investment-in-delhi",
  },
  openGraph: {
    title: "Mart Franchise with Low Investment in Delhi | Buyzaar Mart",
    description:
      "Start a mart franchise with low investment in Delhi with Buyzaar Mart. Compact format, brand support, and steady daily demand. Apply now!",
    url: "https://www.thebuyzaarmart.com/delhi/mart-franchise-with-low-investment-in-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise with Low Investment in Delhi | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise with Low Investment in Delhi | Buyzaar Mart",
    description:
      "Start a mart franchise with low investment in Delhi with Buyzaar Mart. Compact format, brand support, and steady daily demand. Apply now!",
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