import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment in Gurugram | Buyzaar Mart Cost & ROI",
  description:
    "Explore grocery franchise investment in Gurugram with Buyzaar Mart. Low investment supermarket franchise costs, ROI potential & funding details. Enquire now!",
  keywords: [
    "grocery franchise investment Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "grocery franchise cost India",
    "franchise ROI Gurugram",
    "supermarket franchise investment",
    "low investment supermarket franchise in gurgaon",
    "retail franchise funding India",
    "franchise breakeven period",
    "grocery business investment",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-investment-gurugram",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Gurugram | Buyzaar Mart Cost & ROI",
    description:
      "Explore grocery franchise investment in Gurugram with Buyzaar Mart. Low investment supermarket franchise costs, ROI potential & funding details. Enquire now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-investment-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Gurugram | Buyzaar Mart Cost & ROI",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Gurugram | Buyzaar Mart Cost & ROI",
    description:
      "Explore grocery franchise investment in Gurugram with Buyzaar Mart. Low investment supermarket franchise costs, ROI potential & funding details. Enquire now!",
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