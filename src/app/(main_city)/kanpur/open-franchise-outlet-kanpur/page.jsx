import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Open a Franchise Outlet Kanpur | The Buyzaar Mart Supermarket Franchise",
  description:
    "Ready to open a franchise outlet in Kanpur? The Buyzaar Mart offers grocery supermarket franchise opportunities from ₹15 Lakh with FOCM & FOCO models, complete store setup, supply chain, POS technology & brand support. Visit thebuyzaarmart.com to get started.",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/kanpur/open-franchise-outlet-kanpur",
  },
  openGraph: {
    title:
      "Open a Franchise Outlet Kanpur | The Buyzaar Mart Supermarket Franchise",
    description:
      "Ready to open a franchise outlet in Kanpur? The Buyzaar Mart offers grocery supermarket franchise opportunities from ₹15 Lakh with FOCM & FOCO models, complete store setup, supply chain, POS technology & brand support. Visit thebuyzaarmart.com to get started.",
    url: "https://www.thebuyzaarmart.com/kanpur/open-franchise-outlet-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Open a Franchise Outlet Kanpur | The Buyzaar Mart Supermarket Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Open a Franchise Outlet Kanpur | The Buyzaar Mart Supermarket Franchise",
    description:
      "Ready to open a franchise outlet in Kanpur? The Buyzaar Mart offers grocery supermarket franchise opportunities from ₹15 Lakh with FOCM & FOCO models, complete store setup, supply chain, POS technology & brand support. Visit thebuyzaarmart.com to get started.",
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