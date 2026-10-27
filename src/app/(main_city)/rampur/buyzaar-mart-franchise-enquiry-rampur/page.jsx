import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Enquiry in Rampur | Send Enquiry",
  description:
    "Send your Buyzaar Mart franchise enquiry from Rampur. Know the steps, questions to ask and support. Total investment from ₹15 Lakh. Response within 24 hours.",
  keywords: [
    "Buyzaar Mart franchise enquiry Rampur",
    "Buyzaar Mart franchise inquiry Rampur",
    "franchise enquiry Rampur",
    "Buyzaar Mart franchise Rampur",
    "The Buyzaar Mart Rampur",
    "supermarket franchise Rampur",
    "grocery franchise Rampur",
    "retail franchise Rampur",
    "franchise enquiry form Rampur",
    "how to enquire for supermarket franchise",
    "Buyzaar Mart franchise contact number",
    "Buyzaar Mart franchise brochure",
    "low investment franchise Rampur",
    "franchise from 15 lakh",
    "mini mart franchise Rampur",
    "super mart franchise Rampur",
    "hyper mart franchise Rampur",
    "FOCM franchise Rampur",
    "FOCO franchise Rampur",
    "franchise opportunity in Rampur",
    "franchise with full support",
    "supermarket franchise Uttar Pradesh",
    "franchise business opportunity Rampur",
    "franchise with training and support",
    "mart franchise Rampur UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-enquiry-rampur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Enquiry in Rampur | Send Enquiry",
    description:
      "Send your Buyzaar Mart franchise enquiry from Rampur. Know the steps, questions to ask and support. Total investment from ₹15 Lakh. Response within 24 hours.",
    url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-enquiry-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Enquiry in Rampur | Send Enquiry",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Enquiry in Rampur | Send Enquiry",
    description:
      "Send your Buyzaar Mart franchise enquiry from Rampur. Know the steps, questions to ask and support. Total investment from ₹15 Lakh. Response within 24 hours.",
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