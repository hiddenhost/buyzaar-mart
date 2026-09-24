import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Retail Store in Aligarh | The Buyzaar Mart",
  description:
    "Discover how a FOCO model retail store operates in Aligarh — staffing, inventory, quality control, customer experience & investor reporting. Apply now.",
  keywords: [
    "FOCO model retail store Aligarh",
    "retail store Aligarh",
    "Buyzaar Mart retail store",
    "company operated retail store",
    "FOCO retail management",
    "grocery retail store Aligarh",
    "organized retail store Aligarh",
    "retail store staffing model",
    "retail store customer experience",
    "professionally managed store Aligarh",
    "retail store inventory management",
    "POS enabled retail store",
    "branded grocery store Aligarh",
    "retail store layout design",
    "retail store operations India",
    "FOCO retail investment Aligarh",
    "retail store reporting system",
    "passive retail ownership Aligarh",
    "modern grocery store Aligarh",
    "retail store near AMU",
    "centralized supply chain retail store",
    "retail store customer service Aligarh",
    "retail store quality control",
    "retail store maintenance standards",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/foco-model-retail-store-aligarh",
  },
  openGraph: {
    title: "FOCO Model Retail Store in Aligarh | The Buyzaar Mart",
    description:
      "Discover how a FOCO model retail store operates in Aligarh — staffing, inventory, quality control, customer experience & investor reporting. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/foco-model-retail-store-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Retail Store in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Retail Store in Aligarh | The Buyzaar Mart",
    description:
      "Discover how a FOCO model retail store operates in Aligarh — staffing, inventory, quality control, customer experience & investor reporting. Apply now.",
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