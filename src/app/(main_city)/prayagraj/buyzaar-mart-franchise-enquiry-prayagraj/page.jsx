import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Enquiry in Prayagraj | Get Started Today",
  description:
    "Make a Buyzaar Mart franchise enquiry in Prayagraj today. Learn what to ask, what to expect, and how to start your journey into organized retail ownership.",
  keywords: [
    "Buyzaar Mart franchise enquiry Prayagraj",
    "franchise enquiry form India",
    "grocery franchise enquiry UP",
    "franchise contact Prayagraj",
    "mart franchise information India",
    "franchise business enquiry Prayagraj",
    "retail franchise enquiry India",
    "franchise investor enquiry Prayagraj",
    "franchise support enquiry India",
    "Buyzaar Mart contact franchise",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-franchise-enquiry-prayagraj",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Enquiry in Prayagraj | Get Started Today",
    description:
      "Make a Buyzaar Mart franchise enquiry in Prayagraj today. Learn what to ask, what to expect, and how to start your journey into organized retail ownership.",
    url: "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-franchise-enquiry-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Enquiry in Prayagraj | Get Started Today",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Enquiry in Prayagraj | Get Started Today",
    description:
      "Make a Buyzaar Mart franchise enquiry in Prayagraj today. Learn what to ask, what to expect, and how to start your journey into organized retail ownership.",
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