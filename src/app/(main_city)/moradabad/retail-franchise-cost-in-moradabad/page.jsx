import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Cost Moradabad 2026 | The Buyzaar Mart Pricing Guide",
  description:
    "Retail franchise cost in Moradabad explained format-wise with The Buyzaar Mart. Compare Mini Mart, Super Mart and Hyper Mart pricing, fees, and ROI.",
  keywords: [
    "retail franchise cost moradabad",
    "franchise pricing moradabad",
    "grocery store investment moradabad",
    "supermarket franchise price moradabad",
    "low cost franchise moradabad",
    "best retail franchise moradabad",
    "franchise business cost UP",
    "small investment supermarket moradabad",
    "buyzaar mart pricing",
    "franchise ROI moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/retail-franchise-cost-in-moradabad",
  },
  openGraph: {
    title: "Retail Franchise Cost Moradabad 2026 | The Buyzaar Mart Pricing Guide",
    description:
      "Retail franchise cost in Moradabad explained format-wise with The Buyzaar Mart. Compare Mini Mart, Super Mart and Hyper Mart pricing, fees, and ROI.",
    url: "https://www.thebuyzaarmart.com/moradabad/retail-franchise-cost-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Cost Moradabad 2026 | The Buyzaar Mart Pricing Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Cost Moradabad 2026 | The Buyzaar Mart Pricing Guide",
    description:
      "Retail franchise cost in Moradabad explained format-wise with The Buyzaar Mart. Compare Mini Mart, Super Mart and Hyper Mart pricing, fees, and ROI.",
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