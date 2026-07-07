import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Profit Margin in Varanasi | Buyzaar Mart",
  description:
    "Know the real profit margin of a mart franchise in Varanasi with Buyzaar Mart. Explore investment, ROI, category-wise margins, and growth potential.",
  keywords: [
    "mart franchise profit margin Varanasi",
    "Buyzaar Mart franchise",
    "retail franchise Varanasi",
    "supermarket franchise profit",
    "grocery franchise business",
    "franchise ROI Varanasi",
    "low investment franchise Varanasi",
    "Buyzaar Mart profit margin",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/mart-franchise-profit-margin-in-varanasi",
  },
  openGraph: {
    title: "Mart Franchise Profit Margin in Varanasi | Buyzaar Mart",
    description:
      "Know the real profit margin of a mart franchise in Varanasi with Buyzaar Mart. Explore investment, ROI, category-wise margins, and growth potential.",
    url: "https://www.thebuyzaarmart.com/varanasi/mart-franchise-profit-margin-in-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Profit Margin in Varanasi | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Profit Margin in Varanasi | Buyzaar Mart",
    description:
      "Know the real profit margin of a mart franchise in Varanasi with Buyzaar Mart. Explore investment, ROI, category-wise margins, and growth potential.",
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