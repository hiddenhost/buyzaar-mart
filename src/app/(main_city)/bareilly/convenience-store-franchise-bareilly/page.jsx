import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Convenience Store Franchise Bareilly | SuperMart & HyperMart by The Buyzaar Mart",
  description:
    "Open a profitable convenience store franchise in Bareilly with The Buyzaar Mart. Choose from SuperMart or HyperMart formats. Low investment, full brand support, FOCM model. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/convenience-store-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "Convenience Store Franchise Bareilly | SuperMart & HyperMart by The Buyzaar Mart",
    description:
      "Open a profitable convenience store franchise in Bareilly with The Buyzaar Mart. Choose from SuperMart or HyperMart formats. Low investment, full brand support, FOCM model. Apply today!",
    url:
      "https://www.thebuyzaarmart.com/bareilly/convenience-store-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise Bareilly | SuperMart & HyperMart by The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Convenience Store Franchise Bareilly | SuperMart & HyperMart by The Buyzaar Mart",
    description:
      "Open a profitable convenience store franchise in Bareilly with The Buyzaar Mart. Choose from SuperMart or HyperMart formats. Low investment, full brand support, FOCM model. Apply today!",
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