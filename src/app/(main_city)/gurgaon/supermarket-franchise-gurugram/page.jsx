import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise in Gurugram | Buyzaar Mart Franchise Opportunity",
  description:
    "Own a supermarket franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, complete brand support & strong ROI. Apply today!",
  keywords: [
    "supermarket franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "supermarket business Gurugram",
    "grocery franchise India",
    "retail franchise opportunity",
    "low investment supermarket franchise in Lucknow",
    "supermarket chain franchise",
    "franchise business Gurugram",
    "mini supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/supermarket-franchise-gurugram",
  },
  openGraph: {
    title: "Supermarket Franchise in Gurugram | Buyzaar Mart Franchise Opportunity",
    description:
      "Own a supermarket franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, complete brand support & strong ROI. Apply today!",
    url: "https://www.thebuyzaarmart.com/gurgaon/supermarket-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise in Gurugram | Buyzaar Mart Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Gurugram | Buyzaar Mart Franchise Opportunity",
    description:
      "Own a supermarket franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, complete brand support & strong ROI. Apply today!",
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