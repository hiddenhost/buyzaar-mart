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
    "small retail franchise under 15 lakh Delhi NCR",
    "retail franchise under 15 lakh Delhi NCR",
    "low investment retail franchise Delhi NCR",
    "grocery franchise under 15 lakh Delhi NCR",
    "mini mart franchise under 15 lakh Delhi NCR",
    "supermarket franchise under 15 lakh Delhi NCR",
    "Buyzaar Mart franchise under 15 lakh Delhi NCR",
    "small grocery franchise Delhi NCR",
    "low cost grocery franchise Delhi NCR",
    "budget retail franchise Delhi NCR",
    "affordable franchise Delhi NCR",
    "franchise business under 15 lakh Delhi NCR",
    "small business franchise Delhi NCR",
    "retail business opportunity Delhi NCR",
    "grocery store franchise Delhi NCR",
    "convenience store franchise Delhi NCR",
    "daily essentials franchise Delhi NCR",
    "organized retail franchise Delhi NCR",
    "best retail franchise Delhi NCR",
    "profitable retail franchise Delhi NCR"
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