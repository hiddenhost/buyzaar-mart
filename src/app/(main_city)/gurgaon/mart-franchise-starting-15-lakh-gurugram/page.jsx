import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Starting 15 Lakh in Gurugram | The Buyzaar Mart",
  description:
    "Start a mart franchise in Gurugram from 15 lakh with The Buyzaar Mart. Low investment supermarket franchise with full setup, staff, and marketing support.",
  keywords: [
    "mart franchise 15 lakh Gurugram",
    "low investment supermarket franchise",
    "Buyzaar Mart franchise cost",
    "grocery franchise budget Gurugram",
    "mini mart franchise investment",
    "low investment supermarket franchise Lucknow",
    "FOCM FOCO franchise model",
    "supermarket franchise starting cost",
    "best grocery franchise NCR",
    "affordable franchise Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/mart-franchise-starting-15-lakh-gurugram",
  },
  openGraph: {
    title: "Mart Franchise Starting 15 Lakh in Gurugram | The Buyzaar Mart",
    description:
      "Start a mart franchise in Gurugram from 15 lakh with The Buyzaar Mart. Low investment supermarket franchise with full setup, staff, and marketing support.",
    url: "https://www.thebuyzaarmart.com/gurgaon/mart-franchise-starting-15-lakh-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Starting 15 Lakh in Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Starting 15 Lakh in Gurugram | The Buyzaar Mart",
    description:
      "Start a mart franchise in Gurugram from 15 lakh with The Buyzaar Mart. Low investment supermarket franchise with full setup, staff, and marketing support.",
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