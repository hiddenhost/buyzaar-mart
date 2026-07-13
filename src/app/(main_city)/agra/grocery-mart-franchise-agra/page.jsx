import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Franchise in Agra | Buyzaar Mart",
  description:
    "Start a grocery mart franchise in Agra with Buyzaar Mart's zero-royalty, Company-Managed model. Explore store formats, investment, and application process.",
  keywords: [
    "grocery mart franchise Agra",
    "Buyzaar Mart franchise Agra",
    "grocery store franchise Agra",
    "zero royalty franchise Agra",
    "supermarket franchise Agra",
    "Mini Mart Super Mart Hyper Mart",
    "company managed grocery franchise",
    "franchise investment Agra",
    "retail franchise opportunity Agra",
    "Buyzaar Mart grocery mart",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/grocery-mart-franchise-in-agra",
  },
  openGraph: {
    title: "Grocery Mart Franchise in Agra | Buyzaar Mart",
    description:
      "Start a grocery mart franchise in Agra with Buyzaar Mart's zero-royalty, Company-Managed model. Explore store formats, investment, and application process.",
    url: "https://www.thebuyzaarmart.com/agra/grocery-mart-franchise-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Franchise in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Franchise in Agra | Buyzaar Mart",
    description:
      "Start a grocery mart franchise in Agra with Buyzaar Mart's zero-royalty, Company-Managed model. Explore store formats, investment, and application process.",
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