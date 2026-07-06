import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Under 15 Lakh in Bareilly | Buyzaar Mart",
  description:
    "Explore a low-investment retail franchise under 15 lakh in Bareilly with Buyzaar Mart. Affordable entry, strong local demand, brand support. Enquire now!",
  keywords: [
    "retail franchise under 15 lakh Bareilly",
    "low investment franchise Bareilly",
    "Buyzaar Mart franchise cost",
    "affordable franchise business UP",
    "small budget franchise Bareilly",
    "grocery franchise low investment",
    "mini mart franchise Bareilly",
    "franchise opportunity under 15 lakh",
    "budget retail business Bareilly",
    "Buyzaar Mart Mini Mart investment",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/retail-franchise-under-15-lakh-bareilly",
  },
  openGraph: {
    title: "Retail Franchise Under 15 Lakh in Bareilly | Buyzaar Mart",
    description:
      "Explore a low-investment retail franchise under 15 lakh in Bareilly with Buyzaar Mart. Affordable entry, strong local demand, brand support. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/retail-franchise-under-15-lakh-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Under 15 Lakh in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Under 15 Lakh in Bareilly | Buyzaar Mart",
    description:
      "Explore a low-investment retail franchise under 15 lakh in Bareilly with Buyzaar Mart. Affordable entry, strong local demand, brand support. Enquire now!",
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