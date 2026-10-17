import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Opportunity in Aligarh | The Buyzaar Mart",
  description:
    "Explore a retail franchise opportunity in Aligarh with The Buyzaar Mart. FOCM and FOCO models, Mini to Hyper Mart stores, 18–20% margin, full support. Apply now.",
  keywords: [
    "retail franchise opportunity Aligarh",
    "retail franchise in Aligarh",
    "retail franchise Aligarh",
    "retail business opportunity Aligarh",
    "organised retail franchise Aligarh",
    "supermarket franchise in Aligarh",
    "grocery franchise in Aligarh",
    "franchise opportunity in Aligarh",
    "franchise business in Aligarh",
    "retail store franchise Aligarh",
    "Buyzaar Mart franchise Aligarh",
    "FOCM retail franchise",
    "FOCO retail franchise",
    "low investment retail franchise",
    "retail franchise under 20 lakh",
    "retail franchise Uttar Pradesh",
    "retail franchise India",
    "FMCG retail franchise",
    "neighbourhood retail franchise",
    "Mini Mart retail franchise",
    "retail franchise with support",
    "company managed retail franchise",
    "independent store vs franchise",
    "how to start retail franchise Aligarh",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/retail-franchise-opportunity-aligarh",
  },
  openGraph: {
    title: "Retail Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Aligarh with The Buyzaar Mart. FOCM and FOCO models, Mini to Hyper Mart stores, 18–20% margin, full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/retail-franchise-opportunity-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Opportunity in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Aligarh with The Buyzaar Mart. FOCM and FOCO models, Mini to Hyper Mart stores, 18–20% margin, full support. Apply now.",
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