import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "ROI in Retail Franchise Kanpur | The Buyzaar Mart FOCM & FOCO Model",
  description:
    "Want to know the real ROI in retail franchise in Kanpur? Explore The Buyzaar Mart's FOCM and FOCO models, investment breakdown, monthly earnings, and payback period. Start from ₹15 Lakh.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-franchise-roi-kanpur",
  },
  openGraph: {
    title:
      "ROI in Retail Franchise Kanpur | The Buyzaar Mart FOCM & FOCO Model",
    description:
      "Want to know the real ROI in retail franchise in Kanpur? Explore The Buyzaar Mart's FOCM and FOCO models, investment breakdown, monthly earnings, and payback period. Start from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-franchise-roi-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "ROI in Retail Franchise Kanpur | The Buyzaar Mart FOCM & FOCO Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ROI in Retail Franchise Kanpur | The Buyzaar Mart FOCM & FOCO Model",
    description:
      "Want to know the real ROI in retail franchise in Kanpur? Explore The Buyzaar Mart's FOCM and FOCO models, investment breakdown, monthly earnings, and payback period. Start from ₹15 Lakh.",
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