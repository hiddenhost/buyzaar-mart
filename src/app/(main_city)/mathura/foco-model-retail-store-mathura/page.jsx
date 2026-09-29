import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Retail Store in Mathura | The Buyzaar Mart",
  description:
    "Explore the FOCO (Franchise Owned, Company Operated) retail model with The Buyzaar Mart in Mathura — passive ownership, professional operations, from ₹15 lakh.",
  keywords: [
    "foco model retail store Mathura",
    "franchise owned company operated",
    "foco retail store India",
    "Buyzaar Mart Mathura",
    "passive retail investment Mathura",
    "company operated store UP",
    "foco vs focm franchise",
    "grocery retail foco model",
    "low investment foco retail store",
    "supermarket foco store India",
    "foco retail store Uttar Pradesh",
    "passive retail ownership India",
    "foco retail store near Vrindavan",
    "foco store cost Mathura",
    "best foco retail store India",
    "retail store management model India",
    "foco retail ROI Mathura",
    "hands off retail investment",
    "foco retail store support India",
    "how does foco retail store work",
    "retail business ownership model",
    "foco store Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/foco-model-retail-store-mathura",
  },
  openGraph: {
    title: "FOCO Model Retail Store in Mathura | The Buyzaar Mart",
    description:
      "Explore the FOCO (Franchise Owned, Company Operated) retail model with The Buyzaar Mart in Mathura — passive ownership, professional operations, from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/mathura/foco-model-retail-store-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Retail Store in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Retail Store in Mathura | The Buyzaar Mart",
    description:
      "Explore the FOCO (Franchise Owned, Company Operated) retail model with The Buyzaar Mart in Mathura — passive ownership, professional operations, from ₹15 lakh.",
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