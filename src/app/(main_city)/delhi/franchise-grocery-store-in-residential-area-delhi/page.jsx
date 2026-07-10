import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Residential Delhi | Grocery Store Opportunity",
  description:
    "Explore Buyzaar Mart's grocery franchise opportunity in residential Delhi. Learn about FOCO/FOCM models, investment, store space, and application process.",
  keywords: [
    "grocery franchise Delhi",
    "Buyzaar Mart franchise",
    "supermarket franchise residential Delhi",
    "FOCO FOCM franchise",
    "grocery store business Delhi",
    "franchise opportunity Delhi",
    "organized retail franchise",
    "mini supermarket franchise Delhi",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/franchise-grocery-store-in-residential-area-delhi",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Residential Delhi | Grocery Store Opportunity",
    description:
      "Explore Buyzaar Mart's grocery franchise opportunity in residential Delhi. Learn about FOCO/FOCM models, investment, store space, and application process.'s growing market.",
    url: "https://www.thebuyzaarmart.com/delhi/franchise-grocery-store-in-residential-area-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Residential Delhi | Grocery Store Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Residential Delhi | Grocery Store Opportunity",
    description:
      "Explore Buyzaar Mart's grocery franchise opportunity in residential Delhi. Learn about FOCO/FOCM models, investment, store space, and application process.",
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