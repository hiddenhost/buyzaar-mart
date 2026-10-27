import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Apply in Rampur | Apply Now",
  description:
    "Apply for a Buyzaar Mart franchise in Rampur. Know the documents, application steps and support. Total investment from ₹15 Lakh. Submit your inquiry today.",
  keywords: [
    "Buyzaar Mart franchise apply Rampur",
    "apply for Buyzaar Mart franchise",
    "Buyzaar Mart franchise Rampur",
    "The Buyzaar Mart Rampur",
    "supermarket franchise Rampur",
    "grocery franchise Rampur",
    "retail franchise Rampur",
    "franchise application Rampur",
    "franchise apply online Rampur",
    "Buyzaar Mart franchise application form",
    "Buyzaar Mart franchise documents",
    "how to apply for supermarket franchise",
    "low investment franchise Rampur",
    "franchise from 15 lakh",
    "mini mart franchise Rampur",
    "super mart franchise Rampur",
    "hyper mart franchise Rampur",
    "FOCM franchise Rampur",
    "FOCO franchise Rampur",
    "franchise opportunity in Rampur",
    "franchise with full support",
    "supermarket franchise Uttar Pradesh",
    "franchise business opportunity Rampur",
    "franchise with training and support",
    "mart franchise Rampur UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-apply-rampur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Apply in Rampur | Apply Now",
    description:
      "Apply for a Buyzaar Mart franchise in Rampur. Know the documents, application steps and support. Total investment from ₹15 Lakh. Submit your inquiry today.",
    url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-apply-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Apply in Rampur | Apply Now",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Apply in Rampur | Apply Now",
    description:
      "Apply for a Buyzaar Mart franchise in Rampur. Know the documents, application steps and support. Total investment from ₹15 Lakh. Submit your inquiry today.",
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