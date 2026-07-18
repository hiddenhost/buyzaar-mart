import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Low Investment Franchise in Lucknow | Mini Mart Franchise from ₹15 Lakh – The Buyzaar Mart",
  description:
    "Start a low investment franchise in Lucknow with The Buyzaar Mart. Own a Mini Mart neighbourhood store from ₹15 Lakh under the FOCM model. Full company support. Apply now at thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/low-investment-franchise-lucknow",
  },
  openGraph: {
    title:
      "Low Investment Franchise in Lucknow | Mini Mart Franchise from ₹15 Lakh – The Buyzaar Mart",
    description:
      "Start a low investment franchise in Lucknow with The Buyzaar Mart. Own a Mini Mart neighbourhood store from ₹15 Lakh under the FOCM model. Full company support. Apply now at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/lucknow/low-investment-franchise-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Franchise in Lucknow | Mini Mart Franchise from ₹15 Lakh – The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Low Investment Franchise in Lucknow | Mini Mart Franchise from ₹15 Lakh – The Buyzaar Mart",
    description:
      "Start a low investment franchise in Lucknow with The Buyzaar Mart. Own a Mini Mart neighbourhood store from ₹15 Lakh under the FOCM model. Full company support. Apply now at thebuyzaarmart.com.",
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