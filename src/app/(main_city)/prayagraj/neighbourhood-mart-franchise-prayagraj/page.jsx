import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Mart Franchise in Prayagraj | The Buyzaar Mart",
  description:
    "Open a neighbourhood mart franchise in Prayagraj with The Buyzaar Mart. Serve your local community with a branded grocery store, full supply chain, and operational support.",
  keywords: [
    "neighbourhood mart franchise Prayagraj",
    "local grocery franchise Prayagraj",
    "colony mart franchise UP",
    "The Buyzaar Mart franchise",
    "residential grocery store franchise",
    "neighbourhood store business Prayagraj",
    "society shop franchise Prayagraj",
    "local supermarket franchise",
    "community grocery franchise UP",
    "Mini Mart franchise Prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/neighbourhood-mart-franchise-prayagraj",
  },
  openGraph: {
    title: "Neighbourhood Mart Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Open a neighbourhood mart franchise in Prayagraj with The Buyzaar Mart. Serve your local community with a branded grocery store, full supply chain, and operational support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/neighbourhood-mart-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Mart Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Open a neighbourhood mart franchise in Prayagraj with The Buyzaar Mart. Serve your local community with a branded grocery store, full supply chain, and operational support.",
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