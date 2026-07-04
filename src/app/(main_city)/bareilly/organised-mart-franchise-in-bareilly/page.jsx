import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Mart Franchise in Bareilly | Buyzaar Mart",
  description:
    "Explore the organised mart franchise opportunity in Bareilly with Buyzaar Mart. Proven retail model, brand support & strong growth potential. Enquire now!",
  keywords: [
    "organised mart franchise Bareilly",
    "mart franchise in Bareilly",
    "Buyzaar Mart franchise",
    "organised retail Bareilly",
    "grocery mart franchise",
    "retail business Bareilly",
    "franchise opportunity Uttar Pradesh",
    "branded mart franchise India",
    "supermarket mart Bareilly",
    "low investment mart franchise",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/bareilly/organised-mart-franchise-in-bareilly",
  },
  openGraph: {
    title: "Organised Mart Franchise in Bareilly | Buyzaar Mart",
    description:
      "Explore the organised mart franchise opportunity in Bareilly with Buyzaar Mart. Proven retail model, brand support & strong growth potential. Enquire now!",
            url: "https://www.thebuyzaarmart.com/bareilly/organised-mart-franchise-in-bareilly",
            siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise in Bareilly | Buyzaar Mart",
    description:
      "Explore the organised mart franchise opportunity in Bareilly with Buyzaar Mart. Proven retail model, brand support & strong growth potential. Enquire now!",
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