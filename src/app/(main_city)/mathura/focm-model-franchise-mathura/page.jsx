import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Franchise in Mathura | The Buyzaar Mart",
  description:
    "Understand the FOCM, Franchise Owned Company Managed, model with The Buyzaar Mart in Mathura — company-managed operations, investor visibility, and opportunities from ₹15 lakh onwards.",
  keywords: [
    "focm model franchise Mathura",
    "franchise owned company managed",
    "focm franchise India",
    "Buyzaar Mart Mathura",
    "company managed franchise Mathura",
    "focm vs foco franchise",
    "grocery franchise focm model",
    "low investment focm franchise",
    "supermarket focm franchise India",
    "focm franchise Uttar Pradesh",
    "company operated retail franchise",
    "focm franchise near Vrindavan",
    "focm franchise cost Mathura",
    "best focm franchise India",
    "franchise management structure India",
    "focm franchise ROI Mathura",
    "passive ownership franchise",
    "focm franchise support India",
    "how does focm franchise work",
    "franchise operational model India",
    "franchise business ownership India",
    "focm store management",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/focm-model-franchise-mathura",
  },
  openGraph: {
    title: "FOCM Model Franchise in Mathura | The Buyzaar Mart",
    description:
      "Understand the FOCM, Franchise Owned Company Managed, model with The Buyzaar Mart in Mathura — company-managed operations, investor visibility, and opportunities from ₹15 lakh onwards.",
    url: "https://www.thebuyzaarmart.com/mathura/focm-model-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Franchise in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Franchise in Mathura | The Buyzaar Mart",
    description:
      "Understand the FOCM, Franchise Owned Company Managed, model with The Buyzaar Mart in Mathura — company-managed operations, investor visibility, and opportunities from ₹15 lakh onwards.",
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