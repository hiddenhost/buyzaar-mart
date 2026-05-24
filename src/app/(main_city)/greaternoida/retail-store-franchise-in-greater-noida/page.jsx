import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Store Franchise in Greater Noida | The Buyzaar Mart",
  description:
    "Looking for a retail store franchise in Greater Noida? Join The Buyzaar Mart. Low investment from ₹15 Lakh, FOCM model, full setup & brand support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/retail-store-franchise-in-greater-noida",
  },
  openGraph: {
    title: "Retail Store Franchise in Greater Noida | The Buyzaar Mart",
    description:
      "Looking for a retail store franchise in Greater Noida? Join The Buyzaar Mart. Low investment from ₹15 Lakh, FOCM model, full setup & brand support. Apply now!",
    url: "https://www.thebuyzaarmart.com/greater-noida/retail-store-franchise-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise in Greater Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Store Franchise in Greater Noida | The Buyzaar Mart",
    description:
      "Looking for a retail store franchise in Greater Noida? Join The Buyzaar Mart. Low investment from ₹15 Lakh, FOCM model, full setup & brand support. Apply now!",
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