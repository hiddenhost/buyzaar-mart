import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mart Franchise Investment in Mathura — Mini, Super & Hyper Mart | The Buyzaar Mart",
  description:
    "Compare Mini, Super, and Hyper Mart franchise investment options in Mathura with The Buyzaar Mart. Find the right format, cost breakdown, and support for your budget.",
  keywords: [
    "mart franchise investment Mathura",
    "mini mart franchise Mathura",
    "super mart franchise Mathura",
    "hyper mart franchise Mathura",
    "Buyzaar Mart Mathura",
    "mart franchise cost UP",
    "grocery mart franchise India",
    "mart franchise format comparison",
    "low investment mart franchise",
    "mart franchise Uttar Pradesh",
    "mart franchise near Vrindavan",
    "FOCM mart franchise",
    "FOCO mart franchise India",
    "best mart franchise Mathura",
    "supermarket mart franchise India",
    "mart franchise supply chain",
    "mart franchise ROI Mathura",
    "mart store investment India",
    "franchise business Braj region",
    "mart franchise support India",
    "how to start mart franchise Mathura",
    "mart franchise store formats",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/mart-franchise-investment-mathura",
  },
  openGraph: {
    title:
      "Mart Franchise Investment in Mathura — Mini, Super & Hyper Mart | The Buyzaar Mart",
    description:
      "Compare Mini, Super, and Hyper Mart franchise investment options in Mathura with The Buyzaar Mart. Find the right format, cost breakdown, and support for your budget.",
    url: "https://www.thebuyzaarmart.com/mathura/mart-franchise-investment-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Investment in Mathura — Mini, Super & Hyper Mart | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mart Franchise Investment in Mathura — Mini, Super & Hyper Mart | The Buyzaar Mart",
    description:
      "Compare Mini, Super, and Hyper Mart franchise investment options in Mathura with The Buyzaar Mart. Find the right format, cost breakdown, and support for your budget.",
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