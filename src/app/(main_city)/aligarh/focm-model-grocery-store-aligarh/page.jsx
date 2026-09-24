import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Grocery Store in Aligarh | The Buyzaar Mart",
  description:
    "See how a FOCM model grocery store operates in Aligarh — owner-led staffing, inventory, and customer management backed by The Buyzaar Mart's systems.",
  keywords: [
    "FOCM model grocery store Aligarh",
    "grocery store Aligarh",
    "Buyzaar Mart grocery store",
    "owner operated grocery store",
    "FOCM grocery management",
    "organized grocery store Aligarh",
    "grocery store staffing Aligarh",
    "grocery store inventory management",
    "grocery store customer experience",
    "owner run store Aligarh",
    "grocery store layout design",
    "grocery store operations India",
    "FOCM grocery investment Aligarh",
    "grocery store daily routine",
    "active retail ownership Aligarh",
    "hands on grocery store management",
    "grocery store near AMU",
    "centralized supply chain grocery store",
    "grocery store customer service Aligarh",
    "grocery store training program",
    "first time grocery store owner",
    "grocery store profit retention",
    "grocery store owner responsibilities",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/focm-model-grocery-store-aligarh",
  },
  openGraph: {
    title: "FOCM Model Grocery Store in Aligarh | The Buyzaar Mart",
    description:
      "See how a FOCM model grocery store operates in Aligarh — owner-led staffing, inventory, and customer management backed by The Buyzaar Mart's systems.",
    url: "https://www.thebuyzaarmart.com/aligarh/focm-model-grocery-store-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Grocery Store in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Grocery Store in Aligarh | The Buyzaar Mart",
    description:
      "See how a FOCM model grocery store operates in Aligarh — owner-led staffing, inventory, and customer management backed by The Buyzaar Mart's systems.",
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