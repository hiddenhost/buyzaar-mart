import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart Franchise Bareilly | Start Your Supermarket Business from ₹15 Lakh",
  description:
    "Looking to open a Buyzaar Mart franchise in Bareilly? Join The Buyzaar Mart — India's fastest-growing neighbourhood supermarket franchise — with full support, POS system, supply chain & more. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/buyzaar-mart-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "Buyzaar Mart Franchise Bareilly | Start Your Supermarket Business from ₹15 Lakh",
    description:
      "Looking to open a Buyzaar Mart franchise in Bareilly? Join The Buyzaar Mart — India's fastest-growing neighbourhood supermarket franchise — with full support, POS system, supply chain & more. Apply now.",
    url: "https://www.thebuyzaarmart.com/bareilly/buyzaar-mart-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Bareilly | Start Your Supermarket Business from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Franchise Bareilly | Start Your Supermarket Business from ₹15 Lakh",
    description:
      "Looking to open a Buyzaar Mart franchise in Bareilly? Join The Buyzaar Mart — India's fastest-growing neighbourhood supermarket franchise — with full support, POS system, supply chain & more. Apply now.",
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