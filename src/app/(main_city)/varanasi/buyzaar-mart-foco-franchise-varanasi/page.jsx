import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCO Franchise in Varanasi | Franchise Owned Company Operated Opportunity",
  description:
    "Explore The Buyzaar Mart FOCO franchise opportunity in Varanasi. Franchise Owned, Company Operated model — you invest, we operate. Low risk grocery retail business with full brand support. Apply now.",
  keywords: [
    "Buyzaar Mart FOCO franchise Varanasi",
    "FOCO franchise Varanasi",
    "franchise owned company operated Varanasi",
    "grocery FOCO franchise Varanasi",
    "retail franchise Varanasi",
    "The Buyzaar Mart franchise Varanasi",
    "FMCG franchise FOCO model Varanasi",
    "low investment franchise Varanasi",
    "supermarket franchise UP",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-foco-franchise-varanasi",
  },
  openGraph: {
    title: "Buyzaar Mart FOCO Franchise in Varanasi | Franchise Owned Company Operated Opportunity",
    description:
      "Explore The Buyzaar Mart FOCO franchise opportunity in Varanasi. Franchise Owned, Company Operated model — you invest, we operate. Low risk grocery retail business with full brand support. Apply now.",
    url: "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-foco-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Franchise in Varanasi | Franchise Owned Company Operated Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCO Franchise in Varanasi | Franchise Owned Company Operated Opportunity",
    description:
      "Explore The Buyzaar Mart FOCO franchise opportunity in Varanasi. Franchise Owned, Company Operated model — you invest, we operate. Low risk grocery retail business with full brand support. Apply now.",
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