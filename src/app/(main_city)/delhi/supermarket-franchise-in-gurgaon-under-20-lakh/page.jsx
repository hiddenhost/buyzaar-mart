import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise in Gurgaon Under 20 Lakh | Buyzaar Mart",
  description:
    "Start a supermarket franchise in Gurgaon under 20 lakh with Buyzaar Mart. Low investment, brand support, and strong daily demand. Apply now!",
  keywords: [
    "supermarket franchise Gurgaon under 20 lakh",
    "Buyzaar Mart franchise Gurgaon",
    "low investment supermarket franchise",
    "grocery franchise Gurgaon",
    "Mini Mart franchise",
    "affordable franchise Gurgaon",
    "supermarket business Gurgaon",
    "franchise opportunity under 20 lakh",
    "retail franchise Gurgaon",
    "Buyzaar Mart Mini Mart",
    "supermarket franchise in Gurgaon under 20 lakh",
    "supermarket franchise Gurgaon",
    "grocery franchise Gurgaon low investment",
    "mini mart franchise Gurgaon",
    "Buyzaar Mart franchise Gurgaon",
    "low investment franchise Gurgaon",
    "retail franchise under 20 lakh",
    "FOCM franchise model",
    "best supermarket franchise India",
    "franchise business Gurgaon"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/supermarket-franchise-in-gurgaon-under-20-lakh",
  },
  openGraph: {
    title: "Supermarket Franchise in Gurgaon Under 20 Lakh | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Gurgaon under 20 lakh with Buyzaar Mart. Low investment, brand support, and strong daily demand. Apply now!",
    url: "https://www.thebuyzaarmart.com/delhi/supermarket-franchise-in-gurgaon-under-20-lakh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise in Gurgaon Under 20 Lakh | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Gurgaon Under 20 Lakh | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Gurgaon under 20 lakh with Buyzaar Mart. Low investment, brand support, and strong daily demand. Apply now!",
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