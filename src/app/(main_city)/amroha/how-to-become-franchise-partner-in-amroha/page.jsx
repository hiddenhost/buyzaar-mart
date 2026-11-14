import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Become a Franchise Partner in Amroha | Buyzaar Mart",
  description:
    "Want to become a franchise partner in Amroha? See who can apply, models, documents, process and total investment of ₹15–20 lakh with The Buyzaar Mart.",
  keywords: [
    "franchise partner in Amroha",
    "how to become franchise partner in Amroha",
    "Buyzaar Mart franchise partner",
    "Buyzaar Mart franchise Amroha",
    "supermarket franchise partner",
    "grocery franchise partner in India",
    "franchise business in Amroha",
    "franchise partner in Uttar Pradesh",
    "supermarket franchise in Amroha",
    "retail franchise partner",
    "low investment franchise partner",
    "franchise partnership India",
    "FOCM franchise model",
    "FOCO franchise model",
    "mini mart franchise in UP",
    "super mart franchise",
    "franchise partner without experience",
    "franchise partner with full support",
    "grocery franchise 15 lakh",
    "franchise total investment",
    "become a franchisee in Amroha",
    "retail franchise in Amroha",
    "apply for franchise partner",
    "organised retail franchise India",
    "franchise opportunities in Amroha",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-become-franchise-partner-in-amroha",
  },
  openGraph: {
    title: "How to Become a Franchise Partner in Amroha | Buyzaar Mart",
    description:
      "Want to become a franchise partner in Amroha? See who can apply, models, documents, process and total investment of ₹15–20 lakh with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-become-franchise-partner-in-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Become a Franchise Partner in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become a Franchise Partner in Amroha | Buyzaar Mart",
    description:
      "Want to become a franchise partner in Amroha? See who can apply, models, documents, process and total investment of ₹15–20 lakh with The Buyzaar Mart.",
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