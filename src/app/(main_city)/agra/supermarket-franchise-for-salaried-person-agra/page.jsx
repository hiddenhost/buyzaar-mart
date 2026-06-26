import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise for Salaried Person in Agra | Buyzaar Mart",
  description:
    "Invest in a supermarket franchise in Agra alongside your job. FOCM model, POS billing & full operational support from Buyzaar Mart. Low investment. Enquire now!",
  keywords: [
    "supermarket franchise for salaried person Agra",
    "franchise for working professionals Agra",
    "passive income franchise India",
    "FOCM supermarket franchise",
    "Buyzaar Mart franchise Agra",
    "side business franchise for employees",
    "low investment franchise salaried person",
    "grocery franchise without daily involvement",
    "second income franchise India",
    "mini mart franchise Agra",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/supermarket-franchise-for-salaried-person-in-agra",
  },
  openGraph: {
    title: "Supermarket Franchise for Salaried Person in Agra | Buyzaar Mart",
    description:
      "Invest in a supermarket franchise in Agra alongside your job. FOCM model, POS billing & full operational support from Buyzaar Mart. Low investment. Enquire now!",
    url: "https://www.thebuyzaarmart.com/agra/supermarket-franchise-for-salaried-person-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise for Salaried Person in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise for Salaried Person in Agra | Buyzaar Mart",
    description:
      "Invest in a supermarket franchise in Agra alongside your job. FOCM model, POS billing & full operational support from Buyzaar Mart. Low investment. Enquire now!",
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