import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Mart Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Own a FOCM mart franchise in Aligarh with The Buyzaar Mart. Mini Mart from 600 sq ft, 18–20% margin, POS, training and company-managed systems. Apply today.",
  keywords: [
    "FOCM mart franchise Aligarh",
    "FOCM mart Aligarh",
    "Buyzaar Mart FOCM franchise",
    "franchise owned company managed mart",
    "FOCM supermarket franchise",
    "mart franchise in Aligarh",
    "supermarket franchise in Aligarh",
    "grocery mart franchise Aligarh",
    "Mini Mart franchise Aligarh",
    "Super Mart franchise Aligarh",
    "Hyper Mart franchise Aligarh",
    "owner operated supermarket franchise",
    "600 sq ft mart franchise",
    "retail mart franchise Aligarh",
    "franchise business in Aligarh",
    "small supermarket franchise India",
    "FMCG mart franchise Aligarh",
    "mart franchise Uttar Pradesh",
    "neighbourhood mart franchise",
    "low investment mart franchise",
    "supermarket franchise with training",
    "POS enabled supermarket franchise",
    "The Buyzaar Mart",
    "Buyzaar Mart franchise Aligarh",
    "best mart franchise Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/focm-mart-franchise-aligarh",
  },
  openGraph: {
    title: "FOCM Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Own a FOCM mart franchise in Aligarh with The Buyzaar Mart. Mini Mart from 600 sq ft, 18–20% margin, POS, training and company-managed systems. Apply today.",
    url: "https://www.thebuyzaarmart.com/aligarh/focm-mart-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Mart Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Own a FOCM mart franchise in Aligarh with The Buyzaar Mart. Mini Mart from 600 sq ft, 18–20% margin, POS, training and company-managed systems. Apply today.",
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