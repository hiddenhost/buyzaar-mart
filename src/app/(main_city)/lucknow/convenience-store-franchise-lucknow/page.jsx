import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Store Franchise Lucknow | The Buyzaar Mart",
  description:
    "Start your own convenience store franchise in Lucknow with The Buyzaar Mart. Low investment starting ₹15 Lakh, FOCM model, full setup support, POS system & supply chain. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/convenience-store-franchise-in-lucknow",
  },
  openGraph: {
    title: "Convenience Store Franchise Lucknow | The Buyzaar Mart",
    description:
      "Start your own convenience store franchise in Lucknow with The Buyzaar Mart. Low investment starting ₹15 Lakh, FOCM model, full setup support, POS system & supply chain. Apply now!",
    url: "https://www.thebuyzaarmart.com/lucknow/convenience-store-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Store Franchise Lucknow | The Buyzaar Mart",
    description:
      "Start your own convenience store franchise in Lucknow with The Buyzaar Mart. Low investment starting ₹15 Lakh, FOCM model, full setup support, POS system & supply chain. Apply now!",
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