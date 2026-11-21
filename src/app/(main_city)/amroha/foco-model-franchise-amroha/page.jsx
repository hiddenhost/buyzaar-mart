import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Franchise in Amroha | The Buyzaar Mart",
  description:
    "FOCO model franchise in Amroha: own a supermarket while Buyzaar Mart runs it. Min. 2,000 sq ft, 10-year term, about 10% revenue share. Enquire for your total.",
  keywords: [
    "FOCO model franchise Amroha",
    "FOCO franchise India",
    "franchise owned company operated",
    "FOCO supermarket franchise",
    "FOCO model retail franchise",
    "Buyzaar Mart FOCO model",
    "The Buyzaar Mart",
    "supermarket franchise Amroha",
    "passive income franchise India",
    "hands-off franchise business",
    "investor franchise model India",
    "supermarket franchise Uttar Pradesh",
    "2000 sq ft supermarket franchise",
    "revenue share franchise model",
    "10 year franchise agreement",
    "FOCM vs FOCO franchise",
    "FOCM franchise India",
    "company operated supermarket franchise",
    "grocery franchise Amroha",
    "FMCG store franchise",
    "retail franchise Amroha",
    "supermarket franchise for investors",
    "franchise without daily involvement",
    "POS enabled supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/foco-model-franchise-amroha",
  },
  openGraph: {
    title: "FOCO Model Franchise in Amroha | The Buyzaar Mart",
    description:
      "FOCO model franchise in Amroha: own a supermarket while Buyzaar Mart runs it. Min. 2,000 sq ft, 10-year term, about 10% revenue share. Enquire for your total.",
    url: "https://www.thebuyzaarmart.com/amroha/foco-model-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Franchise in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Franchise in Amroha | The Buyzaar Mart",
    description:
      "FOCO model franchise in Amroha: own a supermarket while Buyzaar Mart runs it. Min. 2,000 sq ft, 10-year term, about 10% revenue share. Enquire for your total.",
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