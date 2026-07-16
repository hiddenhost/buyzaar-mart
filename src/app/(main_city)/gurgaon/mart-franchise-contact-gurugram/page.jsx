import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Contact Gurugram | The Buyzaar Mart Franchise Enquiry",
  description:
    "Contact The Buyzaar Mart for a low investment supermarket franchise in Gurugram. Get guidance on investment, store formats, and setup process from our franchise team.",
  keywords: [
    "mart franchise contact Gurugram",
    "Buyzaar Mart franchise enquiry",
    "low investment supermarket franchise",
    "supermarket franchise Gurugram",
    "grocery franchise contact number",
    "low investment supermarket franchise Lucknow",
    "FOCM FOCO franchise model",
    "mini mart super mart hyper mart",
    "grocery franchise business India",
    "supermarket franchise opportunities NCR",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/mart-franchise-contact-gurugram",
  },
  openGraph: {
    title: "Mart Franchise Contact Gurugram | The Buyzaar Mart Franchise Enquiry",
    description:
      "Contact The Buyzaar Mart for a low investment supermarket franchise in Gurugram. Get guidance on investment, store formats, and setup process from our franchise team.",
    url: "https://www.thebuyzaarmart.com/gurgaon/mart-franchise-contact-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Contact Gurugram | The Buyzaar Mart Franchise Enquiry",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Contact Gurugram | The Buyzaar Mart Franchise Enquiry",
    description:
      "Contact The Buyzaar Mart for a low investment supermarket franchise in Gurugram. Get guidance on investment, store formats, and setup process from our franchise team.",
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