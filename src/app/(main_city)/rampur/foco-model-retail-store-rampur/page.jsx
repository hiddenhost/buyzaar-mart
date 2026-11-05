import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FOCO Model Retail Store in Rampur | The Buyzaar Mart",
  description:
    "Own a FOCO model retail store in Rampur with The Buyzaar Mart. Company-run operations, POS billing and launch support. Total investment from ₹15 Lakh.",
  keywords: [
    "foco model retail store rampur",
    "foco retail store rampur",
    "foco franchise rampur",
    "franchise owned company operated rampur",
    "Buyzaar Mart rampur",
    "The Buyzaar Mart franchise",
    "grocery franchise rampur",
    "supermarket franchise rampur",
    "mart franchise rampur",
    "retail store franchise rampur",
    "retail franchise rampur",
    "grocery franchise 15 lakh",
    "low investment grocery franchise rampur",
    "FOCO vs FOCM franchise",
    "Mini Mart franchise rampur",
    "Super Mart franchise rampur",
    "Hyper Mart franchise rampur",
    "grocery store franchise Uttar Pradesh",
    "supermarket franchise UP",
    "managed grocery franchise India",
    "neighbourhood supermarket franchise",
    "FMCG store franchise rampur",
    "grocery franchise with full support",
    "retail franchise 18-20% margin",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/foco-model-retail-store-rampur",
  },
  openGraph: {
    title: "FOCO Model Retail Store in Rampur | The Buyzaar Mart",
    description:
      "Own a FOCO model retail store in Rampur with The Buyzaar Mart. Company-run operations, POS billing and launch support. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/rampur/foco-model-retail-store-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Retail Store in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Retail Store in Rampur | The Buyzaar Mart",
    description:
      "Own a FOCO model retail store in Rampur with The Buyzaar Mart. Company-run operations, POS billing and launch support. Total investment from ₹15 Lakh.",
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