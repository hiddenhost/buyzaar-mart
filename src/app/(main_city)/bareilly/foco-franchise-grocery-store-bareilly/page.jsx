import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Franchise Grocery Store in Bareilly | Buyzaar Mart",
  description:
    "Own a FOCO grocery store franchise in Bareilly with Buyzaar Mart. Company-managed operations, low involvement & strong return potential. Enquire now!",
  keywords: [
    "FOCO grocery store Bareilly",
    "FOCO franchise Bareilly",
    "Buyzaar Mart FOCO grocery",
    "franchise owned company operated grocery",
    "grocery store investment Bareilly",
    "passive income grocery franchise",
    "FOCO retail model Bareilly",
    "organised grocery franchise UP",
    "company operated store Bareilly",
    "low involvement franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/foco-franchise-grocery-store-bareilly",
  },
  openGraph: {
    title: "FOCO Franchise Grocery Store in Bareilly | Buyzaar Mart",
    description:
      "Own a FOCO grocery store franchise in Bareilly with Buyzaar Mart. Company-managed operations, low involvement & strong return potential. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/foco-franchise-grocery-store-bareilly",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Grocery Store in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Grocery Store in Bareilly | Buyzaar Mart",
    description:
      "Own a FOCO grocery store franchise in Bareilly with Buyzaar Mart. Company-managed operations, low involvement & strong return potential. Enquire now!",
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