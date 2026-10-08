import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Mart Franchise in Mathura | The Buyzaar Mart",
  description:
    "Own a Buyzaar Mart in Mathura with the FOCO model while the company runs daily operations. Know investment, store formats, locations and how to apply.",
  keywords: [
    "FOCO mart franchise Mathura",
    "Buyzaar Mart FOCO franchise",
    "FOCO franchise model",
    "franchise owned company operated",
    "mart franchise in Mathura",
    "supermarket franchise Mathura",
    "grocery franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "mini mart franchise Mathura",
    "passive income franchise India",
    "low investment mart franchise",
    "retail franchise Mathura",
    "FOCO vs FOCM",
    "FOCM and FOCO franchise",
    "supermarket franchise Uttar Pradesh",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "Mini Mart franchise cost",
    "franchise business in Mathura",
    "Mathura Vrindavan franchise",
    "FMCG franchise Mathura",
    "best mart franchise in India",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/foco-mart-franchise-mathura",
  },
  openGraph: {
    title: "FOCO Mart Franchise in Mathura | The Buyzaar Mart",
    description:
      "Own a Buyzaar Mart in Mathura with the FOCO model while the company runs daily operations. Know investment, store formats, locations and how to apply.",
    url: "https://www.thebuyzaarmart.com/mathura/foco-mart-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Mart Franchise in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Mart Franchise in Mathura | The Buyzaar Mart",
    description:
      "Own a Buyzaar Mart in Mathura with the FOCO model while the company runs daily operations. Know investment, store formats, locations and how to apply.",
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