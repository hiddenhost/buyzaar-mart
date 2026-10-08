import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity in Mathura | Buyzaar Mart",
  description:
    "Start a grocery franchise in Mathura with The Buyzaar Mart. See store formats, investment, margins, product categories, locations and how to apply today.",
  keywords: [
    "grocery franchise opportunity Mathura",
    "grocery franchise Mathura",
    "grocery store franchise in Mathura",
    "Buyzaar Mart grocery franchise",
    "supermarket franchise Mathura",
    "mart franchise in Mathura",
    "kirana store franchise Mathura",
    "mini mart franchise Mathura",
    "low investment grocery franchise",
    "grocery business in Mathura",
    "FMCG franchise Mathura",
    "retail franchise Mathura",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "grocery franchise Uttar Pradesh",
    "supermarket franchise Uttar Pradesh",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "grocery franchise cost India",
    "grocery franchise margin",
    "franchise business in Mathura",
    "Mathura Vrindavan franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/grocery-franchise-opportunity-mathura",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity in Mathura | Buyzaar Mart",
    description:
      "Start a grocery franchise in Mathura with The Buyzaar Mart. See store formats, investment, margins, product categories, locations and how to apply today.",
    url: "https://www.thebuyzaarmart.com/mathura/grocery-franchise-opportunity-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity in Mathura | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity in Mathura | Buyzaar Mart",
    description:
      "Start a grocery franchise in Mathura with The Buyzaar Mart. See store formats, investment, margins, product categories, locations and how to apply today.",
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