import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart FOCM Franchise in Mathura | Company-Managed Retail Model",
  description:
    "Own a Buyzaar Mart FOCM franchise in Mathura — company-managed retail model with balanced involvement, ₹15 Lakh investment, and full operational support.",
  keywords: [
    "Buyzaar Mart FOCM franchise Mathura",
    "FOCM franchise model India",
    "franchise owned company managed Mathura",
    "grocery FOCM franchise Mathura",
    "supermarket FOCM franchise",
    "FOCM vs FOFO franchise",
    "FOCM vs FOCO franchise",
    "company managed grocery store Mathura",
    "Buyzaar Mart FOCM investment",
    "FOCM franchise eligibility Mathura",
    "retail franchise for first-time entrepreneurs Mathura",
    "FOCM franchise application process",
    "Buyzaar Mart FOCM support",
    "grocery franchise with company management",
    "FOCM franchise documents required",
    "supermarket investment model Mathura",
    "franchise partner involvement Mathura",
    "Buyzaar Mart franchise Uttar Pradesh",
    "FOCM retail franchise Mathura",
    "grocery franchise ROI Mathura",
    "Buyzaar Mart company managed model",
    "FOCM franchise store formats",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-focm-franchise-mathura",
  },
  openGraph: {
    title:
      "Buyzaar Mart FOCM Franchise in Mathura | Company-Managed Retail Model",
    description:
      "Own a Buyzaar Mart FOCM franchise in Mathura — company-managed retail model with balanced involvement, ₹15 Lakh investment, and full operational support.",
    url: "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-focm-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCM Franchise in Mathura | Company-Managed Retail Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart FOCM Franchise in Mathura | Company-Managed Retail Model",
    description:
      "Own a Buyzaar Mart FOCM franchise in Mathura — company-managed retail model with balanced involvement, ₹15 Lakh investment, and full operational support.",
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