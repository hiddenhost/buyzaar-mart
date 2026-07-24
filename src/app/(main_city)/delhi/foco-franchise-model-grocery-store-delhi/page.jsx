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
    "FOCO franchise model grocery store Delhi",
    "FOCO grocery franchise Delhi",
    "FOCO supermarket franchise Delhi",
    "FOCO mini mart franchise Delhi",
    "Buyzaar Mart FOCO franchise Delhi",
    "grocery franchise FOCO model Delhi",
    "franchise owned company operated Delhi",
    "company operated grocery franchise Delhi",
    "FOCO retail franchise Delhi",
    "grocery store franchise Delhi",
    "supermarket franchise Delhi",
    "mini mart franchise Delhi",
    "mart franchise Delhi",
    "organized retail franchise Delhi",
    "low investment grocery franchise Delhi",
    "best grocery franchise Delhi",
    "grocery business opportunity Delhi",
    "retail business opportunity Delhi",
    "daily essentials franchise Delhi",
    "FMCG franchise Delhi",
    "FOCO business model Delhi",
    "company managed grocery franchise Delhi",
    "retail franchise FOCO model Delhi",
    "Buyzaar Mart franchise owned company operated Delhi",
    "best FOCO franchise Delhi"
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