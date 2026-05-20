import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Become a Franchise Owner in Kanpur | The Buyzaar Mart Grocery Franchise",
  description:
    "Want to become a franchise owner in Kanpur? Join The Buyzaar Mart and start your own supermarket with investment from ₹15 Lakh. FOCM & FOCO models available. Full setup, POS, supply chain & ongoing support. Apply now at thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
  },
  openGraph: {
    title:
      "Become a Franchise Owner in Kanpur | The Buyzaar Mart Grocery Franchise",
    description:
      "Want to become a franchise owner in Kanpur? Join The Buyzaar Mart and start your own supermarket with investment from ₹15 Lakh. FOCM & FOCO models available. Full setup, POS, supply chain & ongoing support. Apply now at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Become a Franchise Owner in Kanpur | The Buyzaar Mart Grocery Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Become a Franchise Owner in Kanpur | The Buyzaar Mart Grocery Franchise",
    description:
      "Want to become a franchise owner in Kanpur? Join The Buyzaar Mart and start your own supermarket with investment from ₹15 Lakh. FOCM & FOCO models available. Full setup, POS, supply chain & ongoing support. Apply now at thebuyzaarmart.com.",
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