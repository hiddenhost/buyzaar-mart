import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Details in Mathura | Investment, Fees & Terms",
  description:
    "Complete Buyzaar Mart franchise details for Mathura — investment, fees, store formats, agreement terms, support & compliance, all in one place.",
  keywords: [
    "Buyzaar Mart franchise details Mathura",
    "franchise fee details Mathura",
    "grocery franchise investment breakdown Mathura",
    "Buyzaar Mart agreement terms",
    "franchise store formats Mathura",
    "Mini Mart Super Mart Hyper Mart Mathura",
    "franchise eligibility details Mathura",
    "Buyzaar Mart documents required",
    "franchise security deposit details",
    "grocery franchise compliance Mathura",
    "FSSAI GST MSME franchise Mathura",
    "Buyzaar Mart supply chain details",
    "franchise training details Mathura",
    "grocery franchise ROI details Mathura",
    "Buyzaar Mart marketing support details",
    "franchise application timeline Mathura",
    "Buyzaar Mart expansion details",
    "supermarket franchise fact sheet Mathura",
    "grocery franchise fees India",
    "Buyzaar Mart franchise fee structure",
    "retail franchise details Uttar Pradesh",
    "franchise agreement details Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-franchise-details-mathura",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Details in Mathura | Investment, Fees & Terms",
    description:
      "Complete Buyzaar Mart franchise details for Mathura — investment, fees, store formats, agreement terms, support & compliance, all in one place.",
    url: "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-franchise-details-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Details in Mathura | Investment, Fees & Terms",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Details in Mathura | Investment, Fees & Terms",
    description:
      "Complete Buyzaar Mart franchise details for Mathura — investment, fees, store formats, agreement terms, support & compliance, all in one place.",
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