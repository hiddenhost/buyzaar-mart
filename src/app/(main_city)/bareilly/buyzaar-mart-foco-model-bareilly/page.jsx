import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCO Model in Bareilly | Franchise Opportunity",
  description:
    "Explore the Buyzaar Mart FOCO model in Bareilly — low-risk, brand-managed retail investment with strong returns. Check investment, area & process. Enquire now!",
  keywords: [
    "Buyzaar Mart FOCO model",
    "FOCO franchise Bareilly",
    "franchise owned company operated Bareilly",
    "Buyzaar Mart investment model",
    "FOCO retail franchise",
    "grocery franchise Bareilly",
    "mart franchise investment",
    "low risk franchise model",
    "organised retail Bareilly",
    "FOCO business model India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/bareilly/buyzaar-mart-foco-model-bareilly",
  },
  openGraph: {
    title: "Buyzaar Mart FOCO Model in Bareilly | Franchise Opportunity",
    description:
      "Explore the Buyzaar Mart FOCO model in Bareilly — low-risk, brand-managed retail investment with strong returns. Check investment, area & process. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/buyzaar-mart-foco-model-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Model in Bareilly | Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCO Model in Bareilly | Franchise Opportunity",
    description:
      "Explore the Buyzaar Mart FOCO model in Bareilly — low-risk, brand-managed retail investment with strong returns. Check investment, area & process. Enquire now!",
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