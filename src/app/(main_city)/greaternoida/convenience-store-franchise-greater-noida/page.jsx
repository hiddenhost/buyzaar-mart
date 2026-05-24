import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Convenience Store Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
  description:
    "Start your own convenience store franchise in Greater Noida with The Buyzaar Mart. Low investment from ₹15 Lakh, FOCM model, full operational support, POS system & supply chain included. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/buyzaar-mart-franchise-in-greater-noida",
  },
  openGraph: {
    title:
      "Convenience Store Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
    description:
      "Start your own convenience store franchise in Greater Noida with The Buyzaar Mart. Low investment from ₹15 Lakh, FOCM model, full operational support, POS system & supply chain included. Apply now.",
    url: "https://www.thebuyzaarmart.com/greater-noida/buyzaar-mart-franchise-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Convenience Store Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
    description:
      "Start your own convenience store franchise in Greater Noida with The Buyzaar Mart. Low investment from ₹15 Lakh, FOCM model, full operational support, POS system & supply chain included. Apply now.",
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