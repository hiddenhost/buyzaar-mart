import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Neighbourhood Mart Franchise in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
  description:
    "Looking to open a neighbourhood mart franchise in Bareilly? The Buyzaar Mart offers a proven FOCM model starting from ₹15 Lakh with full setup, POS, supply chain & ongoing support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/neighbourhood-mart-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "Neighbourhood Mart Franchise in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
    description:
      "Looking to open a neighbourhood mart franchise in Bareilly? The Buyzaar Mart offers a proven FOCM model starting from ₹15 Lakh with full setup, POS, supply chain & ongoing support. Apply now!",
    url: "https://www.thebuyzaarmart.com/bareilly/neighbourhood-mart-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neighbourhood Mart Franchise in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
    description:
      "Looking to open a neighbourhood mart franchise in Bareilly? The Buyzaar Mart offers a proven FOCM model starting from ₹15 Lakh with full setup, POS, supply chain & ongoing support. Apply now!",
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