import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Franchise Model Grocery Store in Delhi NCR | Buyzaar Mart",
  description:
    "Explore the FOCO franchise model for a grocery store across Delhi NCR with Buyzaar Mart. Passive investment, professional operations, steady returns. Apply now!",
  keywords: [
    "FOCO franchise model Delhi NCR",
    "Buyzaar Mart FOCO franchise",
    "grocery store investment NCR",
    "franchise owned company operated",
    "passive retail investment NCR",
    "FOCO grocery franchise",
    "retail franchise model Delhi NCR",
    "Buyzaar Mart NCR",
    "investment franchise grocery",
    "company operated store NCR",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/foco-franchise-model-grocery-store-delhi",
  },
  openGraph: {
    title: "FOCO Franchise Model Grocery Store in Delhi NCR | Buyzaar Mart",
    description:
      "Explore the FOCO franchise model for a grocery store across Delhi NCR with Buyzaar Mart. Passive investment, professional operations, steady returns. Apply now!",
    url: "https://www.thebuyzaarmart.com/delhi/foco-franchise-model-grocery-store-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Model Grocery Store in Delhi NCR | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Model Grocery Store in Delhi NCR | Buyzaar Mart",
    description:
      "Explore the FOCO franchise model for a grocery store across Delhi NCR with Buyzaar Mart. Passive investment, professional operations, steady returns. Apply now!",
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