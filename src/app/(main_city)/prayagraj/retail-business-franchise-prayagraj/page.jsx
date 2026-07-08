import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Business Franchise in Prayagraj | Buyzaar Mart",
  description:
    "Start a retail business franchise in Prayagraj with Buyzaar Mart. Proven model, strong local demand, and complete operational support for lasting success.",
  keywords: [
    "retail business franchise Prayagraj",
    "Buyzaar Mart franchise",
    "retail franchise investment India",
    "grocery franchise Prayagraj",
    "organized retail franchise UP",
    "franchise business opportunity Prayagraj",
    "retail store franchise India",
    "small business franchise Prayagraj",
    "branded retail franchise investment",
    "retail franchise support India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/retail-business-franchise-prayagraj",
  },
  openGraph: {
    title: "Retail Business Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Start a retail business franchise in Prayagraj with Buyzaar Mart. Proven model, strong local demand, and complete operational support for lasting success.",
    url: "https://www.thebuyzaarmart.com/prayagraj/retail-business-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Business Franchise in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Business Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Start a retail business franchise in Prayagraj with Buyzaar Mart. Proven model, strong local demand, and complete operational support for lasting success.",
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