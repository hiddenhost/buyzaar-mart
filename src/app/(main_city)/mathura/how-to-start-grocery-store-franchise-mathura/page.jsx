import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "How to Start a Grocery Store Franchise in Mathura | Store-Opening Checklist",
  description:
    "A complete store-opening checklist to start a grocery store franchise in Mathura — licensing, stock, staffing, launch & first-month steps explained.",
  keywords: [
    "how to start grocery store franchise Mathura",
    "grocery store opening checklist",
    "grocery franchise launch checklist Mathura",
    "grocery store setup steps Mathura",
    "grocery franchise licensing checklist",
    "grocery store staffing checklist",
    "grocery franchise stock checklist",
    "grocery store opening day checklist",
    "grocery franchise first month checklist",
    "grocery store launch plan Mathura",
    "grocery franchise setup timeline",
    "grocery store POS setup checklist",
    "grocery franchise marketing checklist",
    "grocery store pricing checklist",
    "grocery franchise common mistakes Mathura",
    "Buyzaar Mart franchise checklist",
    "grocery store pre launch checklist",
    "grocery franchise store setup guide",
    "grocery store first week operations",
    "grocery franchise supply chain checklist",
    "grocery store opening guide India",
    "grocery franchise practical guide Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-start-grocery-store-franchise-mathura",
  },
  openGraph: {
    title:
      "How to Start a Grocery Store Franchise in Mathura | Store-Opening Checklist",
    description:
      "A complete store-opening checklist to start a grocery store franchise in Mathura — licensing, stock, staffing, launch & first-month steps explained.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-start-grocery-store-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Grocery Store Franchise in Mathura | Store-Opening Checklist",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Start a Grocery Store Franchise in Mathura | Store-Opening Checklist",
    description:
      "A complete store-opening checklist to start a grocery store franchise in Mathura — licensing, stock, staffing, launch & first-month steps explained.",
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