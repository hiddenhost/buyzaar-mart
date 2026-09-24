import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Explore the FOCO model franchise in Aligarh with The Buyzaar Mart — a passive, company-operated grocery retail investment. Compare FOCO vs FOCM. Apply now.",
  keywords: [
    "FOCO model franchise Aligarh",
    "FOCO franchise India",
    "Buyzaar Mart FOCO model",
    "passive franchise investment Aligarh",
    "company operated franchise Aligarh",
    "FOCO vs FOCM",
    "grocery franchise passive income",
    "retail investment Aligarh",
    "franchise owned company operated",
    "low involvement franchise model",
    "property investment franchise Aligarh",
    "hands off franchise investment",
    "FOCO grocery franchise India",
    "franchise profit sharing model",
    "passive retail investment Uttar Pradesh",
    "FOCO model benefits",
    "franchise model comparison Aligarh",
    "grocery store passive investment",
    "franchise investment for working professionals",
    "company managed grocery store Aligarh",
    "retail asset investment Aligarh",
    "FOCO model eligibility",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/foco-model-franchise-aligarh",
  },
  openGraph: {
    title: "FOCO Model Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Explore the FOCO model franchise in Aligarh with The Buyzaar Mart — a passive, company-operated grocery retail investment. Compare FOCO vs FOCM. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/foco-model-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Explore the FOCO model franchise in Aligarh with The Buyzaar Mart — a passive, company-operated grocery retail investment. Compare FOCO vs FOCM. Apply now.",
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