import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Retail Partner in Prayagraj | Franchise Partnership Guide",
  description:
    "Become a Buyzaar Mart retail partner in Prayagraj. Enjoy collaborative support, local market insight, and a genuine growth partnership in organized retail.",
  keywords: [
    "Buyzaar Mart retail partner Prayagraj",
    "retail partnership franchise India",
    "Buyzaar Mart franchise Prayagraj",
    "grocery retail partner UP",
    "franchise collaboration Prayagraj",
    "retail business partnership India",
    "mart franchise partner Prayagraj",
    "organized retail partnership India",
    "franchise growth partner Prayagraj",
    "retail partner opportunity India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-retail-partner-prayagraj",
  },
  openGraph: {
    title: "Buyzaar Mart Retail Partner in Prayagraj | Franchise Partnership Guide",
    description:
      "Become a Buyzaar Mart retail partner in Prayagraj. Enjoy collaborative support, local market insight, and a genuine growth partnership in organized retail.",
    url: "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-retail-partner-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Partner in Prayagraj | Franchise Partnership Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Retail Partner in Prayagraj | Franchise Partnership Guide",
    description:
      "Become a Buyzaar Mart retail partner in Prayagraj. Enjoy collaborative support, local market insight, and a genuine growth partnership in organized retail.",
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