import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise to Open in Gorakhpur | The Buyzaar Mart",
  description:
    "Looking for the best franchise to open in Gorakhpur? The Buyzaar Mart offers mini, super & hyper mart models from ₹15 Lakh with full support. Apply now!",
  keywords: [
    "best franchise to open in gorakhpur",
    "best franchise in gorakhpur",
    "franchise business in gorakhpur",
    "top franchise gorakhpur",
    "franchise opportunity gorakhpur",
    "grocery franchise gorakhpur",
    "supermarket franchise gorakhpur",
    "mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "retail franchise gorakhpur",
    "low investment franchise gorakhpur",
    "profitable franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "focm franchise gorakhpur",
    "fico franchise gorakhpur",
    "fofo franchise gorakhpur",
    "open mart in gorakhpur",
    "franchise business opportunity uttar pradesh",
    "best franchise in uttar pradesh",
    "grocery store franchise india",
    "supermarket franchise india",
    "buyzaar mart dealership",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/best-franchise-to-open-in-gorakhpur",
  },
  openGraph: {
    title: "Best Franchise to Open in Gorakhpur | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Gorakhpur? The Buyzaar Mart offers mini, super & hyper mart models from ₹15 Lakh with full support. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/best-franchise-to-open-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise to Open in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise to Open in Gorakhpur | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Gorakhpur? The Buyzaar Mart offers mini, super & hyper mart models from ₹15 Lakh with full support. Apply now!",
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