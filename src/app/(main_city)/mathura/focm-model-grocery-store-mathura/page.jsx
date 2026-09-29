import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Grocery Store in Mathura | The Buyzaar Mart",
  description:
    "Understand the FOCM (Franchise Owned Company Managed) grocery store model with The Buyzaar Mart in Mathura — company-run operations, investor visibility, from ₹15 lakh.",
  keywords: [
    "focm model grocery store Mathura",
    "franchise owned company managed",
    "focm grocery store India",
    "Buyzaar Mart Mathura",
    "company managed grocery store Mathura",
    "focm vs foco grocery franchise",
    "grocery franchise focm model",
    "low investment focm grocery store",
    "supermarket focm store India",
    "focm grocery store Uttar Pradesh",
    "company operated grocery retail",
    "focm grocery store near Vrindavan",
    "focm store cost Mathura",
    "best focm grocery store India",
    "grocery store management structure India",
    "focm store ROI Mathura",
    "passive ownership grocery store",
    "focm grocery store support India",
    "how does focm grocery store work",
    "grocery franchise operational model",
    "grocery store ownership India",
    "focm store Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/focm-model-grocery-store-mathura",
  },
  openGraph: {
    title: "FOCM Model Grocery Store in Mathura | The Buyzaar Mart",
    description:
      "Understand the FOCM (Franchise Owned Company Managed) grocery store model with The Buyzaar Mart in Mathura — company-run operations, investor visibility, from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/mathura/focm-model-grocery-store-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Grocery Store in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Grocery Store in Mathura | The Buyzaar Mart",
    description:
      "Understand the FOCM (Franchise Owned Company Managed) grocery store model with The Buyzaar Mart in Mathura — company-run operations, investor visibility, from ₹15 lakh.",
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