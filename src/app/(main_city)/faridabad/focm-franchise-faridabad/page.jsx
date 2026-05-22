import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "FOCM Franchise in Faridabad | The Buyzaar Mart – Franchise Owned Company Managed Model",
  description:
    "Explore The Buyzaar Mart's FOCM franchise opportunity in Faridabad. Own a supermarket, let us manage it. Starting from ₹15 Lakh with full setup, POS, training & marketing support. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/focm-franchise-faridabad",
  },
  openGraph: {
    title:
      "FOCM Franchise in Faridabad | The Buyzaar Mart – Franchise Owned Company Managed Model",
    description:
      "Explore The Buyzaar Mart's FOCM franchise opportunity in Faridabad. Own a supermarket, let us manage it. Starting from ₹15 Lakh with full setup, POS, training & marketing support. Apply today!",
    url: "https://www.thebuyzaarmart.com/faridabad/focm-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise in Faridabad | The Buyzaar Mart – Franchise Owned Company Managed Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FOCM Franchise in Faridabad | The Buyzaar Mart – Franchise Owned Company Managed Model",
    description:
      "Explore The Buyzaar Mart's FOCM franchise opportunity in Faridabad. Own a supermarket, let us manage it. Starting from ₹15 Lakh with full setup, POS, training & marketing support. Apply today!",
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