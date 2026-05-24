import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business in Greater Noida West | The Buyzaar Mart",
  description:
    "Start a profitable franchise business in Greater Noida West with The Buyzaar Mart from ₹15 Lakh. FOCM model, full support, POS system & 18–20% gross margin. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida-west/franchise-business-in-greater-noida-west",
  },
  openGraph: {
    title: "Franchise Business in Greater Noida West | The Buyzaar Mart",
    description:
      "Start a profitable franchise business in Greater Noida West with The Buyzaar Mart from ₹15 Lakh. FOCM model, full support, POS system & 18–20% gross margin. Apply today!",
    url: "https://www.thebuyzaarmart.com/greater-noida-west/franchise-business-in-greater-noida-west",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business in Greater Noida West | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business in Greater Noida West | The Buyzaar Mart",
    description:
      "Start a profitable franchise business in Greater Noida West with The Buyzaar Mart from ₹15 Lakh. FOCM model, full support, POS system & 18–20% gross margin. Apply today!",
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