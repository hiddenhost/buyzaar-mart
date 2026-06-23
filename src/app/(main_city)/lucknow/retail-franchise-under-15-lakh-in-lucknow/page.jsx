import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Under 15 Lakh in Lucknow | The Buyzaar Mart",
  description:
    "Start a profitable retail franchise under 15 lakh in Lucknow with The Buyzaar Mart. Low investment, high returns, full operational support, and a proven FOCM model. Apply now.",
  keywords: [
    "low investment franchise Lucknow",
    "grocery franchise under 15 lakh",
    "affordable franchise opportunity Lucknow",
    "small business franchise Lucknow",
    "FMCG franchise low investment Lucknow",
    "The Buyzaar Mart franchise Lucknow",
    "best franchise under 15 lakh UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/retail-franchise-under-15-lakh-in-lucknow",
  },
  openGraph: {
    title: "Retail Franchise Under 15 Lakh in Lucknow | The Buyzaar Mart",
    description:
      "Start a profitable retail franchise under 15 lakh in Lucknow with The Buyzaar Mart. Low investment, high returns, full operational support, and a proven FOCM model. Apply now.",
    url: "https://www.thebuyzaarmart.com/lucknow/retail-franchise-under-15-lakh-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Under 15 Lakh in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Under 15 Lakh in Lucknow | The Buyzaar Mart",
    description:
      "Start a profitable retail franchise under 15 lakh in Lucknow with The Buyzaar Mart. Low investment, high returns, full operational support, and a proven FOCM model. Apply now.",
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