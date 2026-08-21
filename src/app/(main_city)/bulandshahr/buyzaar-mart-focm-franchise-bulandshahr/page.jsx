import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCM Franchise in Bulandshahr | Investment & Details",
  description:
    "Explore The Buyzaar Mart FOCM franchise in Bulandshahr — Franchise Owned, Company Managed. Investment, responsibilities, and how the model works.",
  keywords: [
    "Buyzaar Mart FOCM franchise Bulandshahr",
    "FOCM franchise model",
    "Franchise Owned Company Managed",
    "FOCM vs FOCO franchise",
    "grocery franchise Bulandshahr",
    "Buyzaar Mart Bulandshahr investment",
    "FOCM franchise agreement",
    "company managed grocery store",
    "supermarket franchise Bulandshahr",
    "FOCM franchise responsibilities",
    "mini mart super mart hyper mart",
    "grocery franchise low investment",
    "Buyzaar Mart franchise fee",
    "franchisee owned store Bulandshahr",
    "retail franchise Bulandshahr UP",
    "FOCM model advantages",
    "grocery business Bulandshahr investors",
    "franchise profit margin grocery",
    "Hassle-Free Inventory Assurance",
    "Buyzaar Mart brand support",
    "organized retail Bulandshahr",
    "franchise agreement 5 years",
    "FOCM franchise eligibility",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/buyzaar-mart-focm-franchise-bulandshahr",
  },
  openGraph: {
    title: "Buyzaar Mart FOCM Franchise in Bulandshahr | Investment & Details",
    description:
      "Explore The Buyzaar Mart FOCM franchise in Bulandshahr — Franchise Owned, Company Managed. Investment, responsibilities, and how the model works.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/buyzaar-mart-focm-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCM Franchise in Bulandshahr | Investment & Details",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCM Franchise in Bulandshahr | Investment & Details",
    description:
      "Explore The Buyzaar Mart FOCM franchise in Bulandshahr — Franchise Owned, Company Managed. Investment, responsibilities, and how the model works.",
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