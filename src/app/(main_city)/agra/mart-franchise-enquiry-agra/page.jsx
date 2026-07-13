import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Enquiry in Agra | Buyzaar Mart",
  description:
    "Submit your mart franchise enquiry for Agra with Buyzaar Mart. Explore store formats, investment, zero-royalty model, and the step-by-step enquiry process.",
  keywords: [
    "mart franchise enquiry Agra",
    "Buyzaar Mart franchise Agra",
    "grocery franchise enquiry Agra",
    "franchise apply Agra",
    "supermarket franchise enquiry",
    "zero royalty franchise Agra",
    "franchise investment Agra",
    "Mini Mart Super Mart Hyper Mart Agra",
    "Buyzaar Mart contact franchise",
    "franchise opportunity Agra",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/mart-franchise-enquiry-in-agra",
  },
  openGraph: {
    title: "Mart Franchise Enquiry in Agra | Buyzaar Mart",
    description:
      "Submit your mart franchise enquiry for Agra with Buyzaar Mart. Explore store formats, investment, zero-royalty model, and the step-by-step enquiry process.",
    url: "https://www.thebuyzaarmart.com/agra/mart-franchise-enquiry-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Enquiry in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Enquiry in Agra | Buyzaar Mart",
    description:
      "Submit your mart franchise enquiry for Agra with Buyzaar Mart. Explore store formats, investment, zero-royalty model, and the step-by-step enquiry process.",
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