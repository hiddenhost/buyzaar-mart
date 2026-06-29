import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Low Cost Grocery Franchise in Prayagraj | Buyzaar Mart Mini Mart",
  description:
    "Start a low cost grocery franchise in Prayagraj with Buyzaar Mart's Mini Mart format — affordable investment, full brand support & flexible ownership.",
  keywords: [
    "low cost grocery franchise prayagraj",
    "affordable franchise business",
    "buyzaar mart mini mart",
    "low investment retail franchise",
    "budget grocery store franchise",
    "small grocery franchise prayagraj",
    "FOCO grocery franchise",
    "mini mart franchise cost",
    "cheap franchise opportunity UP",
    "entry level retail franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/low-cost-grocery-franchise-prayagraj",
  },
  openGraph: {
    title: "Low Cost Grocery Franchise in Prayagraj | Buyzaar Mart Mini Mart",
    description:
      "Start a low cost grocery franchise in Prayagraj with Buyzaar Mart's Mini Mart format — affordable investment, full brand support & flexible ownership.",
    url: "https://www.thebuyzaarmart.com/prayagraj/low-cost-grocery-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Cost Grocery Franchise in Prayagraj | Buyzaar Mart Mini Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Cost Grocery Franchise in Prayagraj | Buyzaar Mart Mini Mart",
    description:
      "Start a low cost grocery franchise in Prayagraj with Buyzaar Mart's Mini Mart format — affordable investment, full brand support & flexible ownership.",
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