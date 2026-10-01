import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Retail Store Franchise in Gorakhpur | Buyzaar Mart",
  description:
    "Learn how to open a retail store franchise in Gorakhpur with The Buyzaar Mart. Cost from ₹15 Lakh, licences, funding, agreement checks and setup steps.",
  keywords: [
    "how to open a retail store franchise in gorakhpur",
    "retail store franchise in gorakhpur",
    "open retail store in gorakhpur",
    "retail franchise in gorakhpur",
    "the buyzaar mart",
    "buyzaar mart retail store franchise",
    "retail store franchise cost india",
    "low investment retail franchise",
    "retail franchise under 20 lakh",
    "retail franchise agreement checklist",
    "retail store licence and compliance",
    "FSSAI and GST for retail store",
    "retail franchise loan and funding",
    "mini mart franchise gorakhpur",
    "supermarket franchise in gorakhpur",
    "franchise business in gorakhpur",
    "FOCM franchise india",
    "retail franchise in uttar pradesh",
    "retail franchise with full support",
    "retail store setup guide",
    "FMCG store franchise india",
    "neighborhood retail store franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-open-a-retail-store-franchise-in-gorakhpur",
  },
  openGraph: {
    title: "How to Open Retail Store Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to open a retail store franchise in Gorakhpur with The Buyzaar Mart. Cost from ₹15 Lakh, licences, funding, agreement checks and setup steps.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-open-a-retail-store-franchise-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Retail Store Franchise in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Retail Store Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to open a retail store franchise in Gorakhpur with The Buyzaar Mart. Cost from ₹15 Lakh, licences, funding, agreement checks and setup steps.",
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