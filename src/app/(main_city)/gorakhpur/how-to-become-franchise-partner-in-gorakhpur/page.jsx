import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Become Franchise Partner in Gorakhpur | Buyzaar Mart",
  description:
    "Become a Buyzaar Mart franchise partner in Gorakhpur. Know eligibility, documents, cost from ₹15 Lakh, FOCM model and the step-by-step process. Apply now.",
  keywords: [
    "how to become franchise partner in gorakhpur",
    "franchise partner in gorakhpur",
    "buyzaar mart franchise partner",
    "the buyzaar mart",
    "become a franchise partner",
    "franchise partnership gorakhpur",
    "franchise business in gorakhpur",
    "franchise opportunities in gorakhpur",
    "supermarket franchise in gorakhpur",
    "grocery franchise in gorakhpur",
    "franchise eligibility and documents",
    "franchise application process",
    "low investment franchise gorakhpur",
    "franchise under 20 lakh",
    "mini mart franchise gorakhpur",
    "FOCM franchise india",
    "franchise with training and support",
    "supermarket franchise in uttar pradesh",
    "franchise partner benefits",
    "retail franchise in eastern UP",
    "join buyzaar mart",
    "franchise dealership in gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-become-franchise-partner-in-gorakhpur",
  },
  openGraph: {
    title: "How to Become Franchise Partner in Gorakhpur | Buyzaar Mart",
    description:
      "Become a Buyzaar Mart franchise partner in Gorakhpur. Know eligibility, documents, cost from ₹15 Lakh, FOCM model and the step-by-step process. Apply now.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-become-franchise-partner-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Become Franchise Partner in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become Franchise Partner in Gorakhpur | Buyzaar Mart",
    description:
      "Become a Buyzaar Mart franchise partner in Gorakhpur. Know eligibility, documents, cost from ₹15 Lakh, FOCM model and the step-by-step process. Apply now.",
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