import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Retail Franchise Opportunity in Noida Extension | Buyzaar Mart",
  description:
    "Explore an organised retail franchise opportunity in Noida Extension with Buyzaar Mart. Low investment, high returns, and complete business support. Apply now!",
  keywords: [
    "organised retail franchise opportunity Noida Extension",
    "Buyzaar Mart franchise",
    "supermarket franchise Noida Extension",
    "retail franchise India",
    "low investment supermarket franchise",
    "low investment supermarket franchise in Lucknow",
    "grocery franchise business",
    "retail business opportunity Noida",
    "franchise with Buyzaar Mart",
    "supermarket chain franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/organised-retail-franchise-opportunity-noida-extension",
  },
  openGraph: {
    title: "Organised Retail Franchise Opportunity in Noida Extension | Buyzaar Mart",
    description:
      "Explore an organised retail franchise opportunity in Noida Extension with Buyzaar Mart. Low investment, high returns, and complete business support. Apply now!",
    url: "https://www.thebuyzaarmart.com/cities/noida/organised-retail-franchise-opportunity-noida-extension",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Retail Franchise Opportunity in Noida Extension | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Retail Franchise Opportunity in Noida Extension | Buyzaar Mart",
    description:
      "Explore an organised retail franchise opportunity in Noida Extension with Buyzaar Mart. Low investment, high returns, and complete business support. Apply now!",
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