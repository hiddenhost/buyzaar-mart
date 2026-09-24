import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Explore the FOCM model franchise in Aligarh with The Buyzaar Mart — hands-on store ownership backed by training, systems & supply chain support. Apply now.",
  keywords: [
    "FOCM model franchise Aligarh",
    "FOCM franchise India",
    "Buyzaar Mart FOCM model",
    "franchise owned company managed",
    "hands on franchise investment Aligarh",
    "active franchise ownership Aligarh",
    "grocery franchise training Aligarh",
    "retail franchise support system",
    "FOCM vs independent business",
    "franchise business ownership Aligarh",
    "entrepreneur franchise model Aligarh",
    "grocery store owner operator",
    "franchise training and support",
    "family business franchise Aligarh",
    "retail franchise management Aligarh",
    "franchise model comparison",
    "grocery franchise for entrepreneurs",
    "franchise ownership experience",
    "franchise partner support Uttar Pradesh",
    "active retail investment Aligarh",
    "franchise model eligibility Aligarh",
    "day to day franchise operations",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/focm-model-franchise-aligarh",
  },
  openGraph: {
    title: "FOCM Model Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Explore the FOCM model franchise in Aligarh with The Buyzaar Mart — hands-on store ownership backed by training, systems & supply chain support. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/focm-model-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Explore the FOCM model franchise in Aligarh with The Buyzaar Mart — hands-on store ownership backed by training, systems & supply chain support. Apply now.",
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