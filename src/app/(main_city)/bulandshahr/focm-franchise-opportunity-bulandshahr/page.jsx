import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
  description:
    "Start a FOCM supermarket franchise in Bulandshahr with The Buyzaar Mart. Investment from ₹15 Lakh, full setup, POS and training support. Apply today.",
  keywords: [
    "FOCM franchise opportunity Bulandshahr",
    "FOCM franchise Bulandshahr",
    "Buyzaar Mart franchise Bulandshahr",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "franchise owned company managed Bulandshahr",
    "low investment franchise Bulandshahr",
    "grocery franchise under 20 lakh",
    "franchise business opportunity Bulandshahr",
    "supermarket franchise Uttar Pradesh",
    "grocery franchise UP",
    "mini mart franchise Bulandshahr",
    "super mart franchise Bulandshahr",
    "hyper mart franchise Bulandshahr",
    "FOCM franchise India",
    "managed grocery franchise India",
    "franchise with full support",
    "grocery franchise with training and support",
    "organised retail franchise Bulandshahr",
    "neighbourhood supermarket franchise",
    "supermarket franchise NCR",
    "franchise in Khurja Sikandrabad Siyana",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/focm-franchise-opportunity-bulandshahr",
  },
  openGraph: {
    title: "FOCM Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a FOCM supermarket franchise in Bulandshahr with The Buyzaar Mart. Investment from ₹15 Lakh, full setup, POS and training support. Apply today.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/focm-franchise-opportunity-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a FOCM supermarket franchise in Bulandshahr with The Buyzaar Mart. Investment from ₹15 Lakh, full setup, POS and training support. Apply today.",
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