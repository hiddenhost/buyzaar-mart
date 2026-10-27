import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Registration Rampur | Checklist",
  description:
    "Buyzaar Mart franchise registration in Rampur? Use this checklist for documents, declaration, site survey, ₹15-20 lakh Mini Mart investment and support.",
  keywords: [
    "Buyzaar Mart franchise registration Rampur",
    "franchise registration checklist",
    "Buyzaar Mart franchise Rampur",
    "how to register franchise in Rampur",
    "Buyzaar Mart franchise application",
    "franchise documents required India",
    "supermarket franchise in Rampur",
    "grocery franchise in Rampur",
    "retail franchise in Rampur",
    "mini mart franchise Rampur",
    "franchise site survey approval",
    "franchise agreement India",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "supermarket franchise Uttar Pradesh",
    "grocery store franchise UP",
    "FOCM franchise India",
    "The Buyzaar Mart",
    "grocery franchise with training and support",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
    "franchise partner Rampur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-registration-rampur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Registration Rampur | Checklist",
    description:
      "Buyzaar Mart franchise registration in Rampur? Use this checklist for documents, declaration, site survey, ₹15-20 lakh Mini Mart investment and support.",
    url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-registration-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Registration Rampur | Checklist",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Registration Rampur | Checklist",
    description:
      "Buyzaar Mart franchise registration in Rampur? Use this checklist for documents, declaration, site survey, ₹15-20 lakh Mini Mart investment and support.",
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