import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCO Franchise Rampur | Company Operated",
  description:
    "Explore the Buyzaar Mart FOCO franchise in Rampur: company-operated supermarket, 2,000 sq ft minimum, sales-linked returns. Call +91 9217991727.",
  keywords: [
    "buyzaar mart foco franchise rampur",
    "foco franchise rampur",
    "foco mart franchise rampur",
    "franchise owned company operated",
    "foco model franchise india",
    "buyzaar mart foco model",
    "the buyzaar mart franchise",
    "buyzaar mart franchise rampur",
    "buyzaar mart franchise cost",
    "buyzaar mart franchise investment",
    "buyzaar mart franchise contact number",
    "supermarket franchise in rampur",
    "grocery franchise in rampur",
    "mart franchise rampur",
    "company operated supermarket franchise",
    "supermarket investment opportunity uttar pradesh",
    "passive income franchise india",
    "supermarket franchise with sales share",
    "2000 sq ft supermarket franchise",
    "foco vs focm franchise",
    "retail franchise in uttar pradesh",
    "franchise business opportunity rampur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-foco-franchise-rampur",
  },
  openGraph: {
    title: "Buyzaar Mart FOCO Franchise Rampur | Company Operated",
    description:
      "Explore the Buyzaar Mart FOCO franchise in Rampur: company-operated supermarket, 2,000 sq ft minimum, sales-linked returns. Call +91 9217991727.",
    url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-foco-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Franchise Rampur | Company Operated",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCO Franchise Rampur | Company Operated",
    description:
      "Explore the Buyzaar Mart FOCO franchise in Rampur: company-operated supermarket, 2,000 sq ft minimum, sales-linked returns. Call +91 9217991727.",
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