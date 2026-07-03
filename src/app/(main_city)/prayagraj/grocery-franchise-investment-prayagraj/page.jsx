import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment in Prayagraj | The Buyzaar Mart",
  description:
    "Evaluate the grocery franchise investment opportunity in Prayagraj with The Buyzaar Mart — costs, returns, risk factors, and what your money actually buys.",
  keywords: [
    "grocery franchise investment Prayagraj",
    "franchise investment cost UP",
    "grocery business ROI Prayagraj",
    "The Buyzaar Mart investment",
    "franchise investment breakdown",
    "retail investment opportunity Prayagraj",
    "supermarket franchise cost UP",
    "franchise return on investment",
    "investment plan grocery franchise",
    "Mini Mart investment Prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-investment-prayagraj",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Prayagraj | The Buyzaar Mart",
    description:
      "Evaluate the grocery franchise investment opportunity in Prayagraj with The Buyzaar Mart — costs, returns, risk factors, and what your money actually buys.",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-investment-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Prayagraj | The Buyzaar Mart",
    description:
      "Evaluate the grocery franchise investment opportunity in Prayagraj with The Buyzaar Mart — costs, returns, risk factors, and what your money actually buys.",
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