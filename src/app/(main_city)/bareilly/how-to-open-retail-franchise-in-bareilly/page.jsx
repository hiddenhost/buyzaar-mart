import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "How to Open a Retail Franchise in Bareilly | MiniMart, SuperMart & HyperMart by The Buyzaar Mart",
  description:
    "A complete step-by-step guide to opening a retail franchise in Bareilly with The Buyzaar Mart. Choose your format — MiniMart, SuperMart, or HyperMart — and start with ₹15 Lakh. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/how-to-open-retail-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "How to Open a Retail Franchise in Bareilly | MiniMart, SuperMart & HyperMart by The Buyzaar Mart",
    description:
      "A complete step-by-step guide to opening a retail franchise in Bareilly with The Buyzaar Mart. Choose your format — MiniMart, SuperMart, or HyperMart — and start with ₹15 Lakh. Apply now!",
    url:
      "https://www.thebuyzaarmart.com/bareilly/how-to-open-retail-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Franchise in Bareilly | MiniMart, SuperMart & HyperMart by The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Open a Retail Franchise in Bareilly | MiniMart, SuperMart & HyperMart by The Buyzaar Mart",
    description:
      "A complete step-by-step guide to opening a retail franchise in Bareilly with The Buyzaar Mart. Choose your format — MiniMart, SuperMart, or HyperMart — and start with ₹15 Lakh. Apply now!",
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