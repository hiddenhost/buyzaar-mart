import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Details Rampur | Models & Cost",
  description:
    "Get Buyzaar Mart franchise details for Rampur: FOCM and FOCO models, store sizes, total investment, support and documents. Call +91 9217991727.",
  keywords: [
    "buyzaar mart franchise details rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart franchise details",
    "buyzaar mart franchise information",
    "buyzaar mart franchise cost",
    "buyzaar mart franchise investment",
    "buyzaar mart franchise contact number",
    "buyzaar mart franchise models",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "mini mart franchise rampur",
    "super mart franchise rampur",
    "hyper mart franchise rampur",
    "supermarket franchise in rampur",
    "grocery franchise in rampur",
    "mart franchise rampur",
    "retail franchise in uttar pradesh",
    "grocery franchise under 20 lakh",
    "low investment supermarket franchise",
    "franchise business opportunity rampur",
    "supermarket franchise with full support",
    "neighbourhood supermarket franchise india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-details-rampur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Details Rampur | Models & Cost",
    description:
      "Get Buyzaar Mart franchise details for Rampur: FOCM and FOCO models, store sizes, total investment, support and documents. Call +91 9217991727.",
    url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-details-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Details Rampur | Models & Cost",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Details Rampur | Models & Cost",
    description:
      "Get Buyzaar Mart franchise details for Rampur: FOCM and FOCO models, store sizes, total investment, support and documents. Call +91 9217991727.",
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