import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Retail Partner Rampur | Join the Network",
  description:
    "Become a Buyzaar Mart retail partner in Rampur. Get branding, managed supply chain and launch support. Total investment from ₹15 Lakh. Call +91 9217991727.",
  keywords: [
    "buyzaar mart retail partner rampur",
    "buyzaar mart retail partner",
    "become retail partner rampur",
    "buyzaar mart partnership rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart franchise partner",
    "buyzaar mart store owner",
    "supermarket franchise in rampur",
    "grocery franchise in rampur",
    "mart franchise rampur",
    "retail franchise in rampur",
    "retail partner opportunity uttar pradesh",
    "FOCM franchise rampur",
    "mini mart franchise rampur",
    "super mart franchise rampur",
    "hyper mart franchise rampur",
    "grocery franchise under 20 lakh",
    "low investment supermarket franchise",
    "buyzaar mart franchise cost",
    "buyzaar mart franchise contact number",
    "neighbourhood supermarket franchise india",
    "supermarket franchise with full support",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-retail-partner-rampur",
  },
  openGraph: {
    title: "Buyzaar Mart Retail Partner Rampur | Join the Network",
    description:
      "Become a Buyzaar Mart retail partner in Rampur. Get branding, managed supply chain and launch support. Total investment from ₹15 Lakh. Call +91 9217991727.",
    url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-retail-partner-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Partner Rampur | Join the Network",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Retail Partner Rampur | Join the Network",
    description:
      "Become a Buyzaar Mart retail partner in Rampur. Get branding, managed supply chain and launch support. Total investment from ₹15 Lakh. Call +91 9217991727.",
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