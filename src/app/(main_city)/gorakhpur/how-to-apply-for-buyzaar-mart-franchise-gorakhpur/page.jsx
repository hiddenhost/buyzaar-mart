import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Apply for Buyzaar Mart Franchise in Gorakhpur",
  description:
    "Learn how to apply for a Buyzaar Mart franchise in Gorakhpur. Step-by-step process, FOCM & FOCO models, documents and support. Investment from ₹15 lakh.",
  keywords: [
    "how to apply for Buyzaar Mart franchise Gorakhpur",
    "Buyzaar Mart franchise Gorakhpur",
    "The Buyzaar Mart",
    "Buyzaar Mart franchise apply",
    "grocery franchise in Gorakhpur",
    "supermarket franchise Gorakhpur",
    "how to get grocery franchise in Gorakhpur",
    "grocery franchise Uttar Pradesh",
    "grocery franchise 15 lakh",
    "low investment grocery franchise India",
    "FOCM franchise India",
    "FOCO franchise India",
    "franchise owned company managed",
    "franchise owned company operated",
    "Mini Mart franchise Gorakhpur",
    "Super Mart franchise Gorakhpur",
    "Hyper Mart franchise Gorakhpur",
    "franchise application process",
    "retail franchise Gorakhpur",
    "FMCG store franchise",
    "neighborhood supermarket franchise",
    "supermarket franchise cost India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-apply-for-buyzaar-mart-franchise-gorakhpur",
  },
  openGraph: {
    title: "How to Apply for Buyzaar Mart Franchise in Gorakhpur",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Gorakhpur. Step-by-step process, FOCM & FOCO models, documents and support. Investment from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-apply-for-buyzaar-mart-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Apply for Buyzaar Mart Franchise in Gorakhpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply for Buyzaar Mart Franchise in Gorakhpur",
    description:
      "Learn how to apply for a Buyzaar Mart franchise in Gorakhpur. Step-by-step process, FOCM & FOCO models, documents and support. Investment from ₹15 lakh.",
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