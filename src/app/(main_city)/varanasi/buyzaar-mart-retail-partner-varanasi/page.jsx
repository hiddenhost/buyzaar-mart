import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Retail Partner Varanasi | Franchise Opportunity 2026",
  description:
    "Become a Buyzaar Mart retail partner in Varanasi. Explore franchise investment, support, benefits & how to apply for a neighbourhood supermarket business.",
  keywords: [
    "Buyzaar Mart Varanasi",
    "Buyzaar Mart retail partner",
    "Buyzaar Mart franchise",
    "supermarket franchise Varanasi",
    "retail business Varanasi",
    "grocery store franchise UP",
    "neighbourhood mart franchise India",
    "Buyzaar Mart investment",
    "franchise opportunity Varanasi",
    "retail partnership India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-retail-partner-varanasi",
  },
  openGraph: {
    title: "Buyzaar Mart Retail Partner Varanasi | Franchise Opportunity 2026",
    description:
      "Become a Buyzaar Mart retail partner in Varanasi. Explore franchise investment, support, benefits & how to apply for a neighbourhood supermarket business.",
    url: "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-retail-partner-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Partner Varanasi | Franchise Opportunity 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Retail Partner Varanasi | Franchise Opportunity 2026",
    description:
      "Become a Buyzaar Mart retail partner in Varanasi. Explore franchise investment, support, benefits & how to apply for a neighbourhood supermarket business.",
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