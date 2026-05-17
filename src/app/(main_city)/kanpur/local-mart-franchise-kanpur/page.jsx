import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Local Mart Franchise Kanpur | Start Your Store with The Buyzaar Mart",
  description:
    "Looking for a local mart franchise in Kanpur? Join The Buyzaar Mart — India's trusted grocery & supermarket franchise starting from ₹15 Lakh. FOCM model, full setup support, POS, supply chain & more. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/local-mart-franchise-in-kanpur",
  },
  openGraph: {
    title:
      "Local Mart Franchise Kanpur | Start Your Store with The Buyzaar Mart",
    description:
      "Looking for a local mart franchise in Kanpur? Join The Buyzaar Mart — India's trusted grocery & supermarket franchise starting from ₹15 Lakh. FOCM model, full setup support, POS, supply chain & more. Apply now!",
    url: "https://www.thebuyzaarmart.com/kanpur/local-mart-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Local Mart Franchise Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Local Mart Franchise Kanpur | Start Your Store with The Buyzaar Mart",
    description:
      "Looking for a local mart franchise in Kanpur? Join The Buyzaar Mart — India's trusted grocery & supermarket franchise starting from ₹15 Lakh. FOCM model, full setup support, POS, supply chain & more. Apply now!",
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