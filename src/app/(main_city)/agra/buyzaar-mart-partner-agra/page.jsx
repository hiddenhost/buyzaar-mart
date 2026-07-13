import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Partner in Agra | Grocery Franchise Partnership",
  description:
    "Become a Buyzaar Mart partner in Agra with a zero-royalty, Company-Managed grocery franchise model. Explore investment, formats, and the partnership process.",
  keywords: [
    "Buyzaar Mart partner Agra",
    "grocery franchise partner Agra",
    "Buyzaar Mart franchise Agra",
    "zero royalty partnership Agra",
    "become a franchise partner Agra",
    "Mini Mart Super Mart Hyper Mart",
    "company managed grocery franchise",
    "retail partnership Agra",
    "Buyzaar Mart investment Agra",
    "franchise opportunity Agra",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/buyzaar-mart-partner-in-agra",
  },
  openGraph: {
    title: "Buyzaar Mart Partner in Agra | Grocery Franchise Partnership",
    description:
      "Become a Buyzaar Mart partner in Agra with a zero-royalty, Company-Managed grocery franchise model. Explore investment, formats, and the partnership process.",
    url: "https://www.thebuyzaarmart.com/agra/buyzaar-mart-partner-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Partner in Agra | Grocery Franchise Partnership",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Partner in Agra | Grocery Franchise Partnership",
    description:
      "Become a Buyzaar Mart partner in Agra with a zero-royalty, Company-Managed grocery franchise model. Explore investment, formats, and the partnership process.",
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