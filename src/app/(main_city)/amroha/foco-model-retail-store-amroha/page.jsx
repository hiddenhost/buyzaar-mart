import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Retail Store in Amroha | The Buyzaar Mart",
  description:
    "Own a Buyzaar Mart supermarket in Amroha under the FOCO model. Company-run operations, 10% revenue share, 10-year agreement. Apply now.",
  keywords: [
    "foco model retail store amroha",
    "foco franchise amroha",
    "franchise owned company operated amroha",
    "foco mart franchise amroha",
    "buyzaar mart foco amroha",
    "supermarket franchise amroha",
    "retail store franchise amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "passive income franchise amroha",
    "company operated supermarket amroha",
    "foco supermarket franchise uttar pradesh",
    "2000 sq ft supermarket franchise",
    "revenue share franchise india",
    "buyzaar mart franchise amroha",
    "organised retail franchise amroha",
    "hands-off retail franchise india",
    "foco model franchise india",
    "retail franchise business opportunity amroha",
    "apply buyzaar mart foco franchise",
    "supermarket investment amroha",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/foco-model-retail-store-amroha",
  },
  openGraph: {
    title: "FOCO Model Retail Store in Amroha | The Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket in Amroha under the FOCO model. Company-run operations, 10% revenue share, 10-year agreement. Apply now.",
    url: "https://www.thebuyzaarmart.com/amroha/foco-model-retail-store-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Retail Store in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Retail Store in Amroha | The Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket in Amroha under the FOCO model. Company-run operations, 10% revenue share, 10-year agreement. Apply now.",
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