import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Franchise Opportunity in Aligarh | The Buyzaar Mart",
  description:
    "Explore the FOCO franchise opportunity in Aligarh with The Buyzaar Mart. Invest from ₹15 lakh, earn passive returns while the company runs your store.",
  keywords: [
    "foco franchise opportunity aligarh",
    "foco franchise aligarh",
    "foco model franchise india",
    "franchise owned company operated",
    "buyzaar mart foco franchise",
    "the buyzaar mart franchise aligarh",
    "passive income franchise aligarh",
    "low investment franchise aligarh",
    "grocery franchise aligarh",
    "supermarket franchise aligarh",
    "mini mart franchise aligarh",
    "super mart franchise aligarh",
    "hyper mart franchise aligarh",
    "retail franchise opportunity aligarh",
    "franchise business in aligarh",
    "best franchise in aligarh",
    "company operated franchise",
    "revenue sharing franchise india",
    "franchise investment from 15 lakh",
    "franchise for property owners",
    "franchise for working professionals",
    "FOCO vs FOCM franchise",
    "buyzaar mart franchise cost",
    "open grocery store aligarh",
    "franchise opportunity uttar pradesh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/foco-franchise-opportunity-aligarh",
  },
  openGraph: {
    title: "FOCO Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Aligarh with The Buyzaar Mart. Invest from ₹15 lakh, earn passive returns while the company runs your store.",
    url: "https://www.thebuyzaarmart.com/aligarh/foco-franchise-opportunity-aligarh",
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
      "Explore the FOCO franchise opportunity in Aligarh with The Buyzaar Mart. Invest from ₹15 lakh, earn passive returns while the company runs your store.",
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