import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart Franchise in Greater Noida | Low Investment Grocery Store",
  description:
    "Open a Buyzaar Mart grocery franchise in Greater Noida. Low investment from ₹15 Lakh, FOCM model, full brand & supply chain support. Apply now at thebuyzaarmart.com!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greaternoida/buyzaar-mart-franchise-greater-noida",
  },
  openGraph: {
    title:
      "Buyzaar Mart Franchise in Greater Noida | Low Investment Grocery Store",
    description:
      "Open a Buyzaar Mart grocery franchise in Greater Noida. Low investment from ₹15 Lakh, FOCM model, full brand & supply chain support. Apply now at thebuyzaarmart.com!",
    url: "https://www.thebuyzaarmart.com/greaternoida/buyzaar-mart-franchise-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Greater Noida | Low Investment Grocery Store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Franchise in Greater Noida | Low Investment Grocery Store",
    description:
      "Open a Buyzaar Mart grocery franchise in Greater Noida. Low investment from ₹15 Lakh, FOCM model, full brand & supply chain support. Apply now at thebuyzaarmart.com!",
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