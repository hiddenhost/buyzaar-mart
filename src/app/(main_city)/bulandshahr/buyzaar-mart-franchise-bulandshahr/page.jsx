import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Bulandshahr | Grocery Retail Business Opportunity",
  description:
    "Explore the Buyzaar Mart franchise opportunity in Bulandshahr. Compare store formats, investment, franchise models and brand support before you invest.",
  keywords: [
    "buyzaar mart franchise bulandshahr",
    "grocery franchise bulandshahr",
    "supermarket franchise bulandshahr",
    "retail franchise business bulandshahr",
    "franchise opportunity uttar pradesh",
    "mini mart franchise bulandshahr",
    "super mart franchise bulandshahr",
    "hyper mart franchise bulandshahr",
    "FOCO franchise model",
    "FOCM franchise model",
    "low investment franchise bulandshahr",
    "best franchise business bulandshahr",
    "daily needs store franchise",
    "organized retail bulandshahr",
    "kirana store upgrade franchise",
    "buyzaar mart investment details",
    "franchise ROI grocery store",
    "buyzaar mart brand support",
    "POS technology grocery franchise",
    "buyzaar mart contact number",
    "FMCG retail franchise UP",
    "franchise business bulandshahr 2026",
    "buyzaar mart supply chain support",
    "start grocery business bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/buyzaar-mart-franchise-bulandshahr",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Bulandshahr | Grocery Retail Business Opportunity",
    description:
      "Explore the Buyzaar Mart franchise opportunity in Bulandshahr. Compare store formats, investment, franchise models and brand support before you invest.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/buyzaar-mart-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Bulandshahr | Grocery Retail Business Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Bulandshahr | Grocery Retail Business Opportunity",
    description:
      "Explore the Buyzaar Mart franchise opportunity in Bulandshahr. Compare store formats, investment, franchise models and brand support before you invest.",
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