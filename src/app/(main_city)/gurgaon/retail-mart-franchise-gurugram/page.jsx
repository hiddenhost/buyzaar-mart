import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Mart Franchise in Gurugram | Buyzaar Mart Business Opportunity",
  description:
    "Start a retail mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, proven systems & strong support. Enquire now!",
  keywords: [
    "retail mart franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "retail business franchise India",
    "retail store franchise opportunity",
    "general retail franchise Gurugram",
    "low investment supermarket franchise in Lucknow",
    "retail chain business India",
    "franchise retail model",
    "everyday retail franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/retail-mart-franchise-gurugram",
  },
  openGraph: {
    title: "Retail Mart Franchise in Gurugram | Buyzaar Mart Business Opportunity",
    description:
      "Start a retail mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, proven systems & strong support. Enquire now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/retail-mart-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Mart Franchise in Gurugram | Buyzaar Mart Business Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Mart Franchise in Gurugram | Buyzaar Mart Business Opportunity",
    description:
      "Start a retail mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, proven systems & strong support. Enquire now!",
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