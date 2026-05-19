import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Best Franchise Investment Kanpur 2025 | The Buyzaar Mart Grocery & Supermarket Franchise",
  description:
    "Looking for the best franchise investment in Kanpur? Join The Buyzaar Mart – India's trusted grocery & supermarket franchise starting from ₹15 Lakh. FOCM model, full support, high ROI. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
  },
  openGraph: {
    title:
      "Best Franchise Investment Kanpur 2025 | The Buyzaar Mart Grocery & Supermarket Franchise",
    description:
      "Looking for the best franchise investment in Kanpur? Join The Buyzaar Mart – India's trusted grocery & supermarket franchise starting from ₹15 Lakh. FOCM model, full support, high ROI. Apply now!",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Investment Kanpur 2025 | The Buyzaar Mart Grocery & Supermarket Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Franchise Investment Kanpur 2025 | The Buyzaar Mart Grocery & Supermarket Franchise",
    description:
      "Looking for the best franchise investment in Kanpur? Join The Buyzaar Mart – India's trusted grocery & supermarket franchise starting from ₹15 Lakh. FOCM model, full support, high ROI. Apply now!",
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