import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Store Franchise Kanpur | The Buyzaar Mart FOCM Model — Apply Now",
  description:
    "Open a neighbourhood store franchise in Kanpur with The Buyzaar Mart. Understand FOCM, minimart, supermart & hypermart formats. Low investment, full support. Start from ₹15 Lakh today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/neighbourhood-store-franchise-in-kanpur",
  },
  openGraph: {
    title: "Neighbourhood Store Franchise Kanpur | The Buyzaar Mart FOCM Model — Apply Now",
    description:
      "Open a neighbourhood store franchise in Kanpur with The Buyzaar Mart. Understand FOCM, minimart, supermart & hypermart formats. Low investment, full support. Start from ₹15 Lakh today!",
    url: "https://www.thebuyzaarmart.com/kanpur/neighbourhood-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Store Franchise Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Store Franchise Kanpur | The Buyzaar Mart FOCM Model — Apply Now",
    description:
      "Open a neighbourhood store franchise in Kanpur with The Buyzaar Mart. Understand FOCM, minimart, supermart & hypermart formats. Low investment, full support. Start from ₹15 Lakh today!",
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