import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Cost in Hapur | The Buyzaar Mart",
  description:
    "Understand the complete mart franchise cost in Hapur with The Buyzaar Mart. Explore cost components, store formats, ongoing expenses, and how to get an accurate estimate.",
  keywords: [
    "mart franchise cost Hapur",
    "Buyzaar Mart franchise cost Hapur",
    "franchise cost breakdown Hapur",
    "grocery franchise investment cost Hapur",
    "Mini Mart franchise cost Hapur",
    "Super Mart franchise cost Hapur",
    "Hyper Mart franchise cost Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "franchise fee grocery Hapur",
    "franchise setup cost Hapur",
    "supermarket franchise cost Hapur",
    "retail franchise cost Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business cost Hapur",
    "franchise apply Hapur",
    "low cost mart franchise Hapur",
    "affordable franchise cost Hapur",
    "neighbourhood store franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/mart-franchise-cost-hapur",
  },
  openGraph: {
    title: "Mart Franchise Cost in Hapur | The Buyzaar Mart",
    description:
      "Understand the complete mart franchise cost in Hapur with The Buyzaar Mart. Explore cost components, store formats, ongoing expenses, and how to get an accurate estimate.",
    url: "https://www.thebuyzaarmart.com/hapur/mart-franchise-cost-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Cost in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Cost in Hapur | The Buyzaar Mart",
    description:
      "Understand the complete mart franchise cost in Hapur with The Buyzaar Mart. Explore cost components, store formats, ongoing expenses, and how to get an accurate estimate.",
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