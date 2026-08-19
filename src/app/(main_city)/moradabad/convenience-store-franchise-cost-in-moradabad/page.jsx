import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Store Franchise Cost in Moradabad | Buyzaar Mart",
  description:
    "Complete convenience store franchise cost breakdown for Moradabad with The Buyzaar Mart. Transparent pricing, low investment, zero royalty structure.",
  keywords: [
    "convenience store franchise cost moradabad",
    "buyzaar mart mini mart cost",
    "small format store investment moradabad",
    "neighbourhood store franchise price",
    "low investment convenience store moradabad",
    "grocery kiosk franchise cost",
    "compact store franchise UP",
    "quick shop franchise cost moradabad",
    "budget franchise moradabad",
    "convenience retail investment guide",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/convenience-store-franchise-cost-in-moradabad",
  },
  openGraph: {
    title: "Convenience Store Franchise Cost in Moradabad | Buyzaar Mart",
    description:
      "Complete convenience store franchise cost breakdown for Moradabad with The Buyzaar Mart. Transparent pricing, low investment, zero royalty structure.",
    url: "https://www.thebuyzaarmart.com/moradabad/convenience-store-franchise-cost-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise Cost in Moradabad | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Store Franchise Cost in Moradabad | Buyzaar Mart",
    description:
      "Complete convenience store franchise cost breakdown for Moradabad with The Buyzaar Mart. Transparent pricing, low investment, zero royalty structure.",
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