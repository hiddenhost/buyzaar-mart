import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Starting at 15 Lakh in Prayagraj | Buyzaar Mart",
  description:
    "Start a supermarket franchise in Prayagraj from 15 lakh with Buyzaar Mart. Wide product range, strong local demand, and complete franchise support included.",
  keywords: [
    "supermarket franchise 15 lakh Prayagraj",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "supermarket franchise India",
    "affordable supermarket franchise Prayagraj",
    "grocery supermarket franchise UP",
    "retail franchise 15 lakh investment",
    "supermarket business opportunity Prayagraj",
    "franchise under 15 lakh India",
    "supermarket franchise support Prayagraj",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/supermarket-franchise-starting-at-15-lakh-prayagraj",
  },
  openGraph: {
    title: "Supermarket Franchise Starting at 15 Lakh in Prayagraj | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Prayagraj from 15 lakh with Buyzaar Mart. Wide product range, strong local demand, and complete franchise support included.",
    url: "https://www.thebuyzaarmart.com/prayagraj/supermarket-franchise-starting-at-15-lakh-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Starting at 15 Lakh in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Starting at 15 Lakh in Prayagraj | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Prayagraj from 15 lakh with Buyzaar Mart. Wide product range, strong local demand, and complete franchise support included.",
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