import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCM Franchise Rampur | Company Managed",
  description:
    "Start a Buyzaar Mart FOCM franchise in Rampur: you own the store, the company manages operations. Total investment from ₹15 Lakh. Call +91 9217991727.",
  keywords: [
    "buyzaar mart focm franchise rampur",
    "focm franchise rampur",
    "focm mart franchise rampur",
    "franchise owned company managed",
    "focm model franchise india",
    "buyzaar mart focm model",
    "the buyzaar mart franchise",
    "buyzaar mart franchise rampur",
    "buyzaar mart franchise cost",
    "buyzaar mart franchise investment",
    "buyzaar mart franchise contact number",
    "supermarket franchise in rampur",
    "grocery franchise in rampur",
    "mart franchise rampur",
    "company managed supermarket franchise",
    "mini mart franchise rampur",
    "super mart franchise rampur",
    "hyper mart franchise rampur",
    "grocery franchise under 20 lakh",
    "low investment supermarket franchise",
    "retail franchise in uttar pradesh",
    "franchise business opportunity rampur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-focm-franchise-rampur",
  },
  openGraph: {
    title: "Buyzaar Mart FOCM Franchise Rampur | Company Managed",
    description:
      "Start a Buyzaar Mart FOCM franchise in Rampur: you own the store, the company manages operations. Total investment from ₹15 Lakh. Call +91 9217991727.",
    url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-focm-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCM Franchise Rampur | Company Managed",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCM Franchise Rampur | Company Managed",
    description:
      "Start a Buyzaar Mart FOCM franchise in Rampur: you own the store, the company manages operations. Total investment from ₹15 Lakh. Call +91 9217991727.",
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