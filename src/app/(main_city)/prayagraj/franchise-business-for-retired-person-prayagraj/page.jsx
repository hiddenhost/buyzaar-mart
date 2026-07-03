import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business for Retired Persons in Prayagraj | The Buyzaar Mart",
  description:
    "Looking for a stable post-retirement business in Prayagraj? Start a grocery store franchise with The Buyzaar Mart — low involvement, steady income, and full operational support.",
  keywords: [
    "franchise business for retired person Prayagraj",
    "retirement business idea Prayagraj",
    "business for retired employees UP",
    "The Buyzaar Mart franchise",
    "post retirement income Prayagraj",
    "passive income franchise retired",
    "FOCM franchise retired person",
    "low involvement business Prayagraj",
    "retirement investment franchise",
    "grocery franchise senior citizens",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/franchise-business-for-retired-person-prayagraj",
  },
  openGraph: {
    title: "Franchise Business for Retired Persons in Prayagraj | The Buyzaar Mart",
    description:
      "Looking for a stable post-retirement business in Prayagraj? Start a grocery store franchise with The Buyzaar Mart — low involvement, steady income, and full operational support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/franchise-business-for-retired-person-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business for Retired Persons in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business for Retired Persons in Prayagraj | The Buyzaar Mart",
    description:
      "Looking for a stable post-retirement business in Prayagraj? Start a grocery store franchise with The Buyzaar Mart — low involvement, steady income, and full operational support.",
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