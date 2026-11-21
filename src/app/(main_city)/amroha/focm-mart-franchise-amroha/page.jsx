import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Mart Franchise in Amroha | The Buyzaar Mart",
  description:
    "Own a Buyzaar Mart in Amroha under the FOCM model. Investment ₹15–20 lakh, 18–20% margin, POS, training and supply support.",
  keywords: [
    "focm mart franchise amroha",
    "focm franchise amroha",
    "franchise owned company managed amroha",
    "focm mart amroha",
    "buyzaar mart focm amroha",
    "buyzaar mart franchise amroha",
    "mart franchise amroha",
    "supermarket franchise amroha",
    "grocery mart franchise amroha",
    "retail mart franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "grocery franchise 15 lakh amroha",
    "low investment mart franchise amroha",
    "company managed mart franchise india",
    "mart franchise uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "franchise business opportunity amroha",
    "mart franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/focm-mart-franchise-amroha",
  },
  openGraph: {
    title: "FOCM Mart Franchise in Amroha | The Buyzaar Mart",
    description:
      "Own a Buyzaar Mart in Amroha under the FOCM model. Investment ₹15–20 lakh, 18–20% margin, POS, training and supply support.",
    url: "https://www.thebuyzaarmart.com/amroha/focm-mart-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Mart Franchise in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Mart Franchise in Amroha | The Buyzaar Mart",
    description:
      "Own a Buyzaar Mart in Amroha under the FOCM model. Investment ₹15–20 lakh, 18–20% margin, POS, training and supply support.",
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