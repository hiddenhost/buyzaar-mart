import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Store Franchise Delhi NCR | Buyzaar Mart ₹15 Lakh",
  description:
    "Start a convenience store franchise in Delhi NCR from ₹15 lakh. Join Buyzaar Mart for proven retail model, full support, training & consistent returns.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/convenience-store-franchise-delhi-ncr",
  },
  openGraph: {
    title: "Convenience Store Franchise Delhi NCR | Buyzaar Mart ₹15 Lakh",
    description:
      "Start a convenience store franchise in Delhi NCR from ₹15 lakh. Join Buyzaar Mart for proven retail model, full support, training & consistent returns.",
    url: "https://www.thebuyzaarmart.com/delhi/convenience-store-franchise-delhi-ncr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise Delhi NCR | Buyzaar Mart ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Store Franchise Delhi NCR | Buyzaar Mart ₹15 Lakh",
    description:
      "Start a convenience store franchise in Delhi NCR from ₹15 lakh. Join Buyzaar Mart for proven retail model, full support, training & consistent returns.",
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