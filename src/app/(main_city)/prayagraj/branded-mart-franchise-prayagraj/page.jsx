import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Mart Franchise in Prayagraj | Buyzaar Mart",
  description:
    "Explore the opportunity to start a branded mart franchise in Prayagraj with Buyzaar Mart. Low risk, strong support, and growing retail demand await.",
  keywords: [
    "branded mart franchise Prayagraj",
    "Buyzaar Mart franchise",
    "retail franchise Prayagraj",
    "branded retail store franchise",
    "supermarket franchise Prayagraj",
    "grocery mart franchise UP",
    "organized retail franchise India",
    "franchise business opportunity Prayagraj",
    "low investment retail franchise",
    "branded store franchise India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/branded-mart-franchise-prayagraj",
  },
  openGraph: {
    title: "Branded Mart Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Explore the opportunity to start a branded mart franchise in Prayagraj with Buyzaar Mart. Low risk, strong support, and growing retail demand await.",
    url: "https://www.thebuyzaarmart.com/prayagraj/branded-mart-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Mart Franchise in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Mart Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Explore the opportunity to start a branded mart franchise in Prayagraj with Buyzaar Mart. Low risk, strong support, and growing retail demand await.",
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