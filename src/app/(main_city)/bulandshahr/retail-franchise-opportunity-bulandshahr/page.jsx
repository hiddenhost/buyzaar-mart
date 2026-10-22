import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
  description:
    "Start a retail franchise in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and full support.",
  keywords: [
    "retail franchise opportunity Bulandshahr",
    "retail franchise Bulandshahr",
    "retail franchise business Bulandshahr",
    "retail business opportunity Bulandshahr",
    "Buyzaar Mart retail franchise",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "franchise opportunity Bulandshahr",
    "franchise business Bulandshahr",
    "low investment retail franchise",
    "retail franchise under 20 lakh",
    "retail franchise India",
    "retail franchise Uttar Pradesh",
    "retail franchise UP",
    "supermarket franchise NCR",
    "FOCM retail franchise",
    "franchise owned company managed",
    "retail franchise with training and support",
    "organised retail franchise Bulandshahr",
    "retail franchise in Khurja Sikandrabad Siyana",
    "daily need retail franchise",
    "FMCG retail franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/retail-franchise-opportunity-bulandshahr",
  },
  openGraph: {
    title: "Retail Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a retail franchise in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and full support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/retail-franchise-opportunity-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a retail franchise in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and full support.",
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