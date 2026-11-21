import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Grocery Store in Amroha | The Buyzaar Mart",
  description:
    "Open a branded grocery store in Amroha with the FOCM model. Investment ₹15–20 lakh, 18–20% margin, POS, training and supply support.",
  keywords: [
    "focm model grocery store amroha",
    "focm grocery franchise amroha",
    "franchise owned company managed amroha",
    "buyzaar mart franchise amroha",
    "grocery store franchise amroha",
    "grocery franchise amroha",
    "supermarket franchise amroha",
    "mart franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "retail franchise amroha",
    "grocery franchise 15 lakh amroha",
    "low investment grocery franchise amroha",
    "branded grocery store amroha",
    "kirana to supermarket franchise",
    "company managed grocery franchise india",
    "grocery franchise uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "grocery franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/focm-model-grocery-store-amroha",
  },
  openGraph: {
    title: "FOCM Model Grocery Store in Amroha | The Buyzaar Mart",
    description:
      "Open a branded grocery store in Amroha with the FOCM model. Investment ₹15–20 lakh, 18–20% margin, POS, training and supply support.",
    url: "https://www.thebuyzaarmart.com/amroha/focm-model-grocery-store-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Grocery Store in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Grocery Store in Amroha | The Buyzaar Mart",
    description:
      "Open a branded grocery store in Amroha with the FOCM model. Investment ₹15–20 lakh, 18–20% margin, POS, training and supply support.",
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