import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Become a Franchise Partner in Rampur | Buyzaar Mart",
  description:
    "Want to become a franchise partner in Rampur? See eligibility, documents, steps, ₹15-20 lakh Mini Mart investment and the support Buyzaar Mart provides.",
  keywords: [
    "how to become franchise partner in Rampur",
    "franchise partner in Rampur",
    "Buyzaar Mart franchise partner",
    "Buyzaar Mart franchise Rampur",
    "supermarket franchise in Rampur",
    "grocery franchise in Rampur",
    "retail franchise in Rampur",
    "franchise business in Rampur",
    "franchise opportunities in Rampur",
    "mini mart franchise Rampur",
    "low investment franchise Rampur",
    "supermarket franchise Uttar Pradesh",
    "grocery store franchise UP",
    "retail franchise in UP",
    "FOCM franchise India",
    "FOCO franchise India",
    "The Buyzaar Mart",
    "supermarket franchise cost India",
    "grocery franchise 15 lakh",
    "franchise with training and support",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-become-franchise-partner-in-rampur",
  },
  openGraph: {
    title: "How to Become a Franchise Partner in Rampur | Buyzaar Mart",
    description:
      "Want to become a franchise partner in Rampur? See eligibility, documents, steps, ₹15-20 lakh Mini Mart investment and the support Buyzaar Mart provides.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-become-franchise-partner-in-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Become a Franchise Partner in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become a Franchise Partner in Rampur | Buyzaar Mart",
    description:
      "Want to become a franchise partner in Rampur? See eligibility, documents, steps, ₹15-20 lakh Mini Mart investment and the support Buyzaar Mart provides.",
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