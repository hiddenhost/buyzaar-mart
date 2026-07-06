import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mini Supermarket Franchise in Bareilly UP | The Buyzaar Mart",
  description:
    "Own a Mini Supermarket franchise in Bareilly with The Buyzaar Mart. Low investment, FOCM model, complete training & support. Enquire today!",
  keywords: [
    "mini supermarket franchise Bareilly",
    "mini mart franchise Bareilly UP",
    "grocery franchise Bareilly",
    "low investment supermarket franchise",
    "FMCG franchise Bareilly",
    "Buyzaar Mart Mini Mart",
    "small format retail franchise",
    "best mini mart franchise UP",
    "retail business Bareilly",
    "FOCM franchise model",
    "supermarket franchise near me",
    "franchise opportunity Bareilly Uttar Pradesh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/mini-supermarket-franchise-in-bareilly-up",
  },
  openGraph: {
    title: "Mini Supermarket Franchise in Bareilly UP | The Buyzaar Mart",
    description:
      "Own a Mini Supermarket franchise in Bareilly with The Buyzaar Mart. Low investment, FOCM model, complete training & support. Enquire today!",
    url: "https://www.thebuyzaarmart.com/bareilly/mini-supermarket-franchise-in-bareilly-up",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Supermarket Franchise in Bareilly UP | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Supermarket Franchise in Bareilly UP | The Buyzaar Mart",
    description:
      "Own a Mini Supermarket franchise in Bareilly with The Buyzaar Mart. Low investment, FOCM model, complete training & support. Enquire today!",
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