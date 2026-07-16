import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Contact Gurugram | Get in Touch Today",
  description:
    "Contact The Buyzaar Mart franchise team in Gurugram for a low investment supermarket franchise. Get guidance on formats, investment, and setup process.",
  keywords: [
    "Buyzaar Mart franchise contact Gurugram",
    "grocery franchise enquiry Gurugram",
    "low investment supermarket franchise",
    "supermarket franchise contact number",
    "franchise team Gurugram",
    "low investment supermarket franchise Lucknow",
    "FOCM FOCO franchise model",
    "mini mart super mart hyper mart",
    "grocery franchise business India",
    "supermarket franchise opportunities NCR",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/buyzaar-mart-franchise-contact-gurugram",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Contact Gurugram | Get in Touch Today",
    description:
      "Contact The Buyzaar Mart franchise team in Gurugram for a low investment supermarket franchise. Get guidance on formats, investment, and setup process.",
    url: "https://www.thebuyzaarmart.com/gurgaon/buyzaar-mart-franchise-contact-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Contact Gurugram | Get in Touch Today",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Contact Gurugram | Get in Touch Today",
    description:
      "Contact The Buyzaar Mart franchise team in Gurugram for a low investment supermarket franchise. Get guidance on formats, investment, and setup process.",
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