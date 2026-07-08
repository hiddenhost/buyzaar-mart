import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Starting From 15 Lakh in Prayagraj | Buyzaar Mart",
  description:
    "Start a grocery franchise in Prayagraj from just 15 lakh with Buyzaar Mart. Affordable investment, strong local demand, and complete franchise support.",
  keywords: [
    "grocery franchise 15 lakh Prayagraj",
    "low investment grocery franchise",
    "Buyzaar Mart franchise",
    "affordable franchise business Prayagraj",
    "grocery store franchise India",
    "budget grocery franchise UP",
    "retail franchise 15 lakh investment",
    "small investment franchise Prayagraj",
    "grocery business opportunity India",
    "franchise under 15 lakh",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-starting-from-15-lakh-prayagraj",
  },
  openGraph: {
    title: "Grocery Franchise Starting From 15 Lakh in Prayagraj | Buyzaar Mart",
    description:
      "Start a grocery franchise in Prayagraj from just 15 lakh with Buyzaar Mart. Affordable investment, strong local demand, and complete franchise support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-starting-from-15-lakh-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Starting From 15 Lakh in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Starting From 15 Lakh in Prayagraj | Buyzaar Mart",
    description:
      "Start a grocery franchise in Prayagraj from just 15 lakh with Buyzaar Mart. Affordable investment, strong local demand, and complete franchise support.",
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