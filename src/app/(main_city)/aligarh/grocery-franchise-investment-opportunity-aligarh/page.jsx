import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment Opportunity in Aligarh | Buyzaar Mart",
  description:
    "Explore the grocery franchise investment opportunity in Aligarh — market timing, early-mover advantage, store formats, and setup with The Buyzaar Mart.",
  keywords: [
    "grocery franchise investment opportunity Aligarh",
    "early mover retail franchise India",
    "franchise market timing analysis",
    "organized retail opportunity Uttar Pradesh",
    "grocery franchise expansion India",
    "best franchise opportunity Aligarh",
    "first mover advantage franchise",
    "The Buyzaar Mart franchise",
    "franchise business Uttar Pradesh",
    "retail growth market India",
    "grocery franchise territory rights",
    "franchise investment timing India",
    "developing market franchise opportunity",
    "franchise expansion Tier 2 cities India",
    "Aligarh grocery store investment",
    "Mini Mart Super Mart Hyper Mart Aligarh",
    "franchise locality exclusivity",
    "grocery retail Aligarh Muslim University area",
    "Dodhpur Ramghat Road commercial investment",
    "Tier 2 city franchise growth",
    "grocery franchise ROI Aligarh",
    "organized retail early entry advantage",
    "franchise territory selection India",
    "grocery business Uttar Pradesh 2026",
    "franchise setup compliance Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-investment-opportunity-aligarh",
  },
  openGraph: {
    title: "Grocery Franchise Investment Opportunity in Aligarh | Buyzaar Mart",
    description:
      "Explore the grocery franchise investment opportunity in Aligarh — market timing, early-mover advantage, store formats, and setup with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-investment-opportunity-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment Opportunity in Aligarh | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment Opportunity in Aligarh | Buyzaar Mart",
    description:
      "Explore the grocery franchise investment opportunity in Aligarh — market timing, early-mover advantage, store formats, and setup with The Buyzaar Mart.",
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