import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Mart Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Find the best mart franchise in Gorakhpur. Choose a Mini, Super or Hyper Mart from The Buyzaar Mart. Start from ₹15 Lakh with full support. Apply today!",
  keywords: [
    "best mart franchise gorakhpur",
    "best mart franchise in gorakhpur",
    "mart franchise gorakhpur",
    "mart franchise in gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "grocery mart franchise gorakhpur",
    "supermarket franchise gorakhpur",
    "retail franchise gorakhpur",
    "franchise business in gorakhpur",
    "franchise opportunity gorakhpur",
    "low investment mart franchise gorakhpur",
    "open mart in gorakhpur",
    "focm mart franchise gorakhpur",
    "fofo mart franchise gorakhpur",
    "fmcg franchise gorakhpur",
    "mart franchise uttar pradesh",
    "best mart franchise in india",
    "supermarket franchise india",
    "mart franchise cost gorakhpur",
    "buyzaar mart dealership",
    "neighbourhood mart franchise gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/best-mart-franchise-gorakhpur",
  },
  openGraph: {
    title: "Best Mart Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Find the best mart franchise in Gorakhpur. Choose a Mini, Super or Hyper Mart from The Buyzaar Mart. Start from ₹15 Lakh with full support. Apply today!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/best-mart-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mart Franchise in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mart Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Find the best mart franchise in Gorakhpur. Choose a Mini, Super or Hyper Mart from The Buyzaar Mart. Start from ₹15 Lakh with full support. Apply today!",
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