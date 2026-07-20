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
    "Buyzaar Mart franchise enquiry Agra",
    "grocery franchise enquiry Agra",
    "supermarket franchise enquiry Agra",
    "mini mart franchise enquiry Agra",
    "retail franchise enquiry Agra",
    "daily essentials franchise enquiry Agra",
    "neighbourhood mart franchise enquiry Agra",
    "convenience store franchise enquiry Agra",
    "FMCG franchise enquiry Agra",
    "grocery store franchise enquiry Agra",
    "organised retail franchise enquiry Agra",
    "franchise enquiry for grocery business Agra",
    "Buyzaar Mart Agra enquiry",
    "grocery business enquiry Agra",
    "retail business opportunity Agra",
    "apply for mart franchise Agra",
    "mart dealership enquiry Agra",
    "grocery franchise application Agra",
    "franchise registration Agra",
    "best grocery franchise Agra",
    "low investment mart franchise Agra",
    "modern retail franchise Agra",
    "food and grocery franchise Agra",
    "supermarket business opportunity Agra",
    "Buyzaar Mart dealership Agra",
    "franchise opportunity Agra",
    "start mart franchise Agra",
    "retail store franchise Agra",
    "Buyzaar Mart grocery franchise Agra"
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