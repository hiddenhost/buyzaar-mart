import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCO Model in Lucknow | Franchise Owned, Company Operated",
  description:
    "Understand The Buyzaar Mart's FOCO model in Lucknow — a passive, company-operated grocery franchise. Learn how it works, who it suits, and investment details.",
  keywords: [
    "Buyzaar Mart FOCO model",
    "FOCO franchise Lucknow",
    "franchise owned company operated Lucknow",
    "passive grocery franchise Lucknow",
    "The Buyzaar Mart franchise model",
    "grocery franchise investment Lucknow",
    "retail franchise UP",
    "FOCO vs FOCM Lucknow",
    "passive income franchise Lucknow",
    "company operated store franchise",
    "Mini Mart franchise Lucknow",
    "Super Mart franchise Lucknow",
    "grocery franchise for NRI investors",
    "low involvement franchise India",
    "supermarket franchise investment Lucknow",
    "franchise for property owners Lucknow",
    "hands-off retail investment India",
    "organized retail franchise UP",
    "Buyzaar Mart Lucknow franchise",
    "grocery store franchise near me Lucknow",
    "retail investment opportunity Lucknow",
    "FMCG franchise Lucknow",
    "franchise business without experience",
    "best grocery franchise in Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/buyzaar-mart-foco-model-lucknow",
  },
  openGraph: {
    title: "Buyzaar Mart FOCO Model in Lucknow | Franchise Owned, Company Operated",
    description:
      "Understand The Buyzaar Mart's FOCO model in Lucknow — a passive, company-operated grocery franchise. Learn how it works, who it suits, and investment details.",
    url: "https://www.thebuyzaarmart.com/lucknow/buyzaar-mart-foco-model-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Model in Lucknow | Franchise Owned, Company Operated",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCO Model in Lucknow | Franchise Owned, Company Operated",
    description:
      "Understand The Buyzaar Mart's FOCO model in Lucknow — a passive, company-operated grocery franchise. Learn how it works, who it suits, and investment details.",
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