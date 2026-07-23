import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise Model for Grocery Store in Delhi NCR | Buyzaar Mart",
  description:
    "Learn about the FOCM (Franchise Owned, Company Managed) grocery franchise model in Delhi NCR with Buyzaar Mart. Explore benefits, investment, and process.",
  keywords: [
    "FOCM franchise model grocery Delhi NCR",
    "Buyzaar Mart FOCM franchise",
    "franchise owned company managed grocery",
    "passive investment grocery franchise",
    "grocery franchise model Delhi NCR",
    "Buyzaar Mart franchise investment",
    "retail franchise model India",
    "company managed store franchise",
    "grocery franchise Delhi NCR",
    "FOCM vs FOCO franchise",
    "FOCM franchise model grocery store Delhi NCR",
    "FOCM grocery franchise Delhi NCR",
    "FOCM franchise Delhi NCR",
    "grocery franchise Delhi NCR",
    "supermarket franchise Delhi NCR",
    "mini mart franchise Delhi NCR",
    "Buyzaar Mart franchise Delhi NCR",
    "low investment grocery franchise Delhi NCR",
    "company managed grocery franchise Delhi NCR",
    "retail franchise Delhi NCR"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/focm-franchise-model-grocery-store-delhi-ncr",
  },
  openGraph: {
    title: "FOCM Franchise Model for Grocery Store in Delhi NCR | Buyzaar Mart",
    description:
      "Learn about the FOCM (Franchise Owned, Company Managed) grocery franchise model in Delhi NCR with Buyzaar Mart. Explore benefits, investment, and process.",
    url: "https://www.thebuyzaarmart.com/delhi/focm-franchise-model-grocery-store-delhi-ncr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Model for Grocery Store in Delhi NCR | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Model for Grocery Store in Delhi NCR | Buyzaar Mart",
    description:
      "Learn about the FOCM (Franchise Owned, Company Managed) grocery franchise model in Delhi NCR with Buyzaar Mart. Explore benefits, investment, and process.",
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