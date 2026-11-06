import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart FOCO Franchise in Amroha | Company Operated Supermarket",
  description:
    "Own a supermarket in Amroha with the Buyzaar Mart FOCO franchise. Franchise Owned, Company Operated, from 2,000 sq ft, ten-year agreement. Call +91 9217991727.",
  keywords: [
    "buyzaar mart foco franchise amroha",
    "foco franchise amroha",
    "foco model amroha",
    "franchise owned company operated",
    "buyzaar mart foco model",
    "foco mart franchise amroha",
    "company operated supermarket franchise",
    "passive income supermarket franchise",
    "buyzaar mart franchise amroha",
    "the buyzaar mart",
    "supermarket franchise in amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "supermarket franchise uttar pradesh",
    "foco franchise uttar pradesh",
    "foco supermarket 2000 sq ft",
    "hands-off retail investment",
    "organised retail investment amroha",
    "franchise business opportunity amroha",
    "ten year supermarket franchise agreement",
    "supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-foco-franchise-amroha",
  },
  openGraph: {
    title:
      "Buyzaar Mart FOCO Franchise in Amroha | Company Operated Supermarket",
    description:
      "Own a supermarket in Amroha with the Buyzaar Mart FOCO franchise. Franchise Owned, Company Operated, from 2,000 sq ft, ten-year agreement. Call +91 9217991727.",
    url: "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-foco-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Franchise in Amroha | Company Operated Supermarket",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart FOCO Franchise in Amroha | Company Operated Supermarket",
    description:
      "Own a supermarket in Amroha with the Buyzaar Mart FOCO franchise. Franchise Owned, Company Operated, from 2,000 sq ft, ten-year agreement. Call +91 9217991727.",
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