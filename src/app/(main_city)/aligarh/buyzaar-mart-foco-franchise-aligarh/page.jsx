import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FOCO Franchise Opportunity in Aligarh | The Buyzaar Mart",
  description:
    "Explore the Buyzaar Mart FOCO franchise opportunity in Aligarh. Learn investment details, store formats, revenue sharing, and how to apply for a passive retail business.",
  keywords: [
    "FOCO franchise Aligarh",
    "Buyzaar Mart Aligarh",
    "grocery franchise Aligarh",
    "supermarket franchise Aligarh",
    "retail franchise Aligarh",
    "franchise owned company operated",
    "FOCO model franchise",
    "passive income franchise Aligarh",
    "low investment franchise Aligarh",
    "mart franchise Aligarh",
    "grocery store franchise Aligarh",
    "franchise business Aligarh",
    "Buyzaar Mart FOCO model",
    "supermarket business Aligarh",
    "best franchise in Aligarh",
    "franchise opportunity Uttar Pradesh",
    "retail investment Aligarh",
    "mini mart franchise Aligarh",
    "super mart franchise Aligarh",
    "hyper mart franchise Aligarh",
    "franchise partner Aligarh",
    "daily needs store franchise Aligarh",
    "FMCG retail franchise Aligarh",
    "passive retail investment Aligarh",
    "organized retail Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-foco-franchise-aligarh",
  },
  openGraph: {
    title: "FOCO Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Explore the Buyzaar Mart FOCO franchise opportunity in Aligarh. Learn investment details, store formats, revenue sharing, and how to apply for a passive retail business.",
    url: "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-foco-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Opportunity in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Explore the Buyzaar Mart FOCO franchise opportunity in Aligarh. Learn investment details, store formats, revenue sharing, and how to apply for a passive retail business.",
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