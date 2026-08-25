import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Franchise in Bulandshahr | The Buyzaar Mart",
  description:
    "Explore the FOCO model franchise in Bulandshahr with The Buyzaar Mart, where the company manages daily operations while you own the store.",
  keywords: [
    "FOCO model franchise Bulandshahr",
    "FOCO franchise Bulandshahr",
    "franchise owned company operated",
    "grocery franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "passive franchise investment",
    "low involvement franchise",
    "Buyzaar Mart Bulandshahr",
    "franchise opportunity Bulandshahr",
    "FOCM franchise model",
    "best franchise Bulandshahr",
    "supermarket franchise UP",
    "organized retail Bulandshahr",
    "franchise apply Bulandshahr",
    "franchise for salaried professionals",
    "franchise near Delhi NCR",
    "company managed store franchise",
    "mini mart franchise Bulandshahr",
    "retail investment UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/foco-model-franchise-bulandshahr",
  },
  openGraph: {
    title: "FOCO Model Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore the FOCO model franchise in Bulandshahr with The Buyzaar Mart, where the company manages daily operations while you own the store.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/foco-model-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Franchise in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore the FOCO model franchise in Bulandshahr with The Buyzaar Mart, where the company manages daily operations while you own the store.",
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