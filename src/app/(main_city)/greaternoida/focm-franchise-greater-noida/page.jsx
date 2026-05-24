import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "FOCM Franchise in Greater Noida | The Buyzaar Mart – Franchise Owned Company Managed",
  description:
    "Invest in a FOCM franchise in Greater Noida with The Buyzaar Mart. Starting from ₹15 Lakh, enjoy company-managed operations, POS technology, full supply chain support & a 5-year agreement. Apply today.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/focm-franchise-in-greater-noida",
  },
  openGraph: {
    title:
      "FOCM Franchise in Greater Noida | The Buyzaar Mart – Franchise Owned Company Managed",
    description:
      "Invest in a FOCM franchise in Greater Noida with The Buyzaar Mart. Starting from ₹15 Lakh, enjoy company-managed operations, POS technology, full supply chain support & a 5-year agreement. Apply today.",
    url: "https://www.thebuyzaarmart.com/greater-noida/focm-franchise-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise in Greater Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FOCM Franchise in Greater Noida | The Buyzaar Mart – Franchise Owned Company Managed",
    description:
      "Invest in a FOCM franchise in Greater Noida with The Buyzaar Mart. Starting from ₹15 Lakh, enjoy company-managed operations, POS technology, full supply chain support & a 5-year agreement. Apply today.",
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