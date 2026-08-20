import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Investment in Hapur | The Buyzaar Mart Planning Guide",
  description:
    "Plan your mart franchise investment in Hapur with The Buyzaar Mart. Learn about formats, models, investment breakdown, returns, and the step-by-step process to get started.",
  keywords: [
    "mart franchise investment Hapur",
    "Buyzaar Mart franchise Hapur",
    "retail investment planning Hapur",
    "grocery franchise investment Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "best mart franchise Hapur",
    "supermarket franchise Hapur",
    "franchise fee grocery Hapur",
    "franchise profit margin Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "low investment franchise Hapur",
    "franchise investment breakdown Hapur",
    "neighbourhood store franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/mart-franchise-investment-hapur",
  },
  openGraph: {
    title: "Mart Franchise Investment in Hapur | The Buyzaar Mart Planning Guide",
    description:
      "Plan your mart franchise investment in Hapur with The Buyzaar Mart. Learn about formats, models, investment breakdown, returns, and the step-by-step process to get started.",
    url: "https://www.thebuyzaarmart.com/hapur/mart-franchise-investment-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Investment in Hapur | The Buyzaar Mart Planning Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Investment in Hapur | The Buyzaar Mart Planning Guide",
    description:
      "Plan your mart franchise investment in Hapur with The Buyzaar Mart. Learn about formats, models, investment breakdown, returns, and the step-by-step process to get started.",
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