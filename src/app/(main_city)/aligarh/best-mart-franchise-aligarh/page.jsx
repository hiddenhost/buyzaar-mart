import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Mart Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Find the best mart franchise in Aligarh. Compare Buyzaar Mart's Mini, Super and Hyper Mart formats by space, investment, products and fit. Apply today.",
  keywords: [
    "best mart franchise Aligarh",
    "best mart franchise in Aligarh",
    "mart franchise Aligarh",
    "mart franchise in Aligarh",
    "supermarket franchise in Aligarh",
    "Mini Mart franchise Aligarh",
    "Super Mart franchise Aligarh",
    "Hyper Mart franchise Aligarh",
    "Buyzaar Mart franchise Aligarh",
    "best supermarket franchise Aligarh",
    "grocery mart franchise Aligarh",
    "retail mart franchise",
    "neighbourhood mart franchise",
    "mart franchise Uttar Pradesh",
    "mart franchise under 20 lakh",
    "low investment mart franchise",
    "mart franchise with support",
    "FOCM mart franchise",
    "FOCO mart franchise",
    "600 sq ft mart franchise",
    "2000 sq ft mart franchise",
    "mart franchise cost India",
    "which mart format to choose",
    "franchise business in Aligarh",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/best-mart-franchise-aligarh",
  },
  openGraph: {
    title: "Best Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Find the best mart franchise in Aligarh. Compare Buyzaar Mart's Mini, Super and Hyper Mart formats by space, investment, products and fit. Apply today.",
    url: "https://www.thebuyzaarmart.com/aligarh/best-mart-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mart Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Find the best mart franchise in Aligarh. Compare Buyzaar Mart's Mini, Super and Hyper Mart formats by space, investment, products and fit. Apply today.",
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