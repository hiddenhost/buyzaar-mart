import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise in Mathura | The Buyzaar Mart",
  description:
    "Compare the best grocery franchise in Mathura with a simple scorecard. See Buyzaar Mart investment, margins, formats, support and how to apply today.",
  keywords: [
    "best grocery franchise Mathura",
    "best grocery franchise in India",
    "grocery franchise Mathura",
    "grocery franchise opportunity Mathura",
    "supermarket franchise Mathura",
    "Buyzaar Mart grocery franchise",
    "mart franchise in Mathura",
    "mini mart franchise Mathura",
    "kirana store franchise Mathura",
    "low investment grocery franchise",
    "top grocery franchise Uttar Pradesh",
    "grocery franchise cost",
    "grocery franchise margin",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "retail franchise Mathura",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "FMCG franchise Mathura",
    "franchise business in Mathura",
    "Mathura Vrindavan franchise",
    "supermarket franchise Uttar Pradesh",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/best-grocery-franchise-mathura",
  },
  openGraph: {
    title: "Best Grocery Franchise in Mathura | The Buyzaar Mart",
    description:
      "Compare the best grocery franchise in Mathura with a simple scorecard. See Buyzaar Mart investment, margins, formats, support and how to apply today.",
    url: "https://www.thebuyzaarmart.com/mathura/best-grocery-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Mathura | The Buyzaar Mart",
    description:
      "Compare the best grocery franchise in Mathura with a simple scorecard. See Buyzaar Mart investment, margins, formats, support and how to apply today.",
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