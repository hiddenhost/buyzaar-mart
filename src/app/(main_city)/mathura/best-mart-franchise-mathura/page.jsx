import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Mart Franchise in Mathura | The Buyzaar Mart",
  description:
    "Find the best mart franchise in Mathura. Compare Mini, Super and Hyper Mart formats, investment, margins, locations and how to apply for Buyzaar Mart today.",
  keywords: [
    "best mart franchise Mathura",
    "mart franchise in Mathura",
    "best mart franchise in India",
    "Buyzaar Mart franchise Mathura",
    "mini mart franchise Mathura",
    "super mart franchise Mathura",
    "hyper mart franchise Mathura",
    "supermarket franchise Mathura",
    "grocery franchise Mathura",
    "neighbourhood mart franchise",
    "mart franchise cost",
    "mart franchise investment",
    "low investment mart franchise",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "retail franchise Mathura",
    "supermarket franchise Uttar Pradesh",
    "FMCG franchise Mathura",
    "franchise business in Mathura",
    "kirana to mart franchise",
    "Mathura Vrindavan franchise",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/best-mart-franchise-mathura",
  },
  openGraph: {
    title: "Best Mart Franchise in Mathura | The Buyzaar Mart",
    description:
      "Find the best mart franchise in Mathura. Compare Mini, Super and Hyper Mart formats, investment, margins, locations and how to apply for Buyzaar Mart today.",
    url: "https://www.thebuyzaarmart.com/mathura/best-mart-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mart Franchise in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mart Franchise in Mathura | The Buyzaar Mart",
    description:
      "Find the best mart franchise in Mathura. Compare Mini, Super and Hyper Mart formats, investment, margins, locations and how to apply for Buyzaar Mart today.",
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