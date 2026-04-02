import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Cost Gangoh | The Buyzaar Mart Investment Guide",
  description:
    "Understand grocery franchise cost Gangoh with The Buyzaar Mart. Flexible models for Saharanpur retail, complete ROI analysis, support structure. Make informed investment decision today!",
  keywords: [
    "retail franchise in gangoh",
    "the buyzaar mart gangoh",
    "supermart franchise gangoh",
    "minimart franchise gangoh",
    "grocery franchise gangoh",
    "modern grocery store franchise in gangoh",
    "retail business gangoh",
    "supermarket franchise gangoh",
    "buyzaar mart focm",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/grocery-franchise-cost-gangoh",
  },

  openGraph: {
    title: "Grocery Franchise Cost Gangoh | The Buyzaar Mart Investment Guide",
    description:
      "Understand grocery franchise cost Gangoh with The Buyzaar Mart. Flexible models for Saharanpur retail, complete ROI analysis, support structure. Make informed investment decision today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-franchise-cost-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Cost Gangoh | The Buyzaar Mart Investment Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Cost Gangoh | The Buyzaar Mart Investment Guide",
    description:
      "Understand grocery franchise cost Gangoh with The Buyzaar Mart. Flexible models for Saharanpur retail, complete ROI analysis, support structure. Make informed investment decision today!",
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