import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Small Retail Franchise Under 15 Lakh in Delhi NCR | Buyzaar Mart",
  description:
    "Start a small retail franchise under 15 lakh in Delhi NCR with Buyzaar Mart. Low investment, brand support, and steady daily demand. Apply now!",
  keywords: [
    "small retail franchise under 15 lakh",
    "Buyzaar Mart franchise Delhi NCR",
    "low investment franchise Delhi NCR",
    "budget franchise Delhi NCR",
    "Mini Mart franchise",
    "affordable retail franchise",
    "grocery franchise under 15 lakh",
    "franchise opportunity Delhi NCR",
    "Buyzaar Mart Mini Mart",
    "small business franchise Delhi NCR",
    "small retail franchise under 15 lakh Delhi NCR",
    "franchise under 15 lakh Delhi NCR",
    "low investment franchise NCR",
    "Buyzaar Mart franchise NCR",
    "mini mart franchise Delhi NCR",
    "grocery franchise under 15 lakh",
    "small business franchise NCR",
    "FOCM franchise model",
    "retail franchise Noida Gurgaon Faridabad",
    "best franchise under 15 lakh India"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/small-retail-franchise-under-15-lakh-delhi-ncr",
  },
  openGraph: {
    title: "Small Retail Franchise Under 15 Lakh in Delhi NCR | Buyzaar Mart",
    description:
      "Start a small retail franchise under 15 lakh in Delhi NCR with Buyzaar Mart. Low investment, brand support, and steady daily demand. Apply now!",
    url: "https://www.thebuyzaarmart.com/delhi/small-retail-franchise-under-15-lakh-delhi-ncr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Small Retail Franchise Under 15 Lakh in Delhi NCR | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Retail Franchise Under 15 Lakh in Delhi NCR | Buyzaar Mart",
    description:
      "Start a small retail franchise under 15 lakh in Delhi NCR with Buyzaar Mart. Low investment, brand support, and steady daily demand. Apply now!",
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