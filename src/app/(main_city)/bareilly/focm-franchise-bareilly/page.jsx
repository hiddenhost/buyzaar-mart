import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "FOCM Franchise in Bareilly | Own a HyperMart with The Buyzaar Mart",
  description:
    "Invest in a FOCM franchise in Bareilly with The Buyzaar Mart. Own a HyperMart neighbourhood store — company managed, investor owned. Transparent investment breakdown. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/focm-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "FOCM Franchise in Bareilly | Own a HyperMart with The Buyzaar Mart",
    description:
      "Invest in a FOCM franchise in Bareilly with The Buyzaar Mart. Own a HyperMart neighbourhood store — company managed, investor owned. Transparent investment breakdown. Apply today!",
    url: "https://www.thebuyzaarmart.com/bareilly/focm-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise in Bareilly | Own a HyperMart with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FOCM Franchise in Bareilly | Own a HyperMart with The Buyzaar Mart",
    description:
      "Invest in a FOCM franchise in Bareilly with The Buyzaar Mart. Own a HyperMart neighbourhood store — company managed, investor owned. Transparent investment breakdown. Apply today!",
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