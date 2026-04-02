import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Supermarket Business in Gangoh | The Buyzaar Mart – Investment, FMCG Model & Supermart Guide",
  description:
    "Planning a supermarket business in Gangoh? Discover The Buyzaar Mart's Supermart format and FMCG model — complete investment breakdown, store modules, and franchise details for Gangoh, UP.",
  keywords: [
    "supermarket business in gangoh",
    "buyzaar mart gangoh",
    "supermart franchise gangoh",
    "fmcg business gangoh",
    "grocery franchise gangoh",
    "retail business gangoh",
    "supermarket franchise uttar pradesh",
    "buyzaar mart supermart",
    "gangoh supermarket investment",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-business-in-gangoh",
  },

  openGraph: {
    title:
      "Supermarket Business in Gangoh | The Buyzaar Mart – Investment, FMCG Model & Supermart Guide",
    description:
      "Planning a supermarket business in Gangoh? Discover The Buyzaar Mart's Supermart format and FMCG model — complete investment breakdown, store modules, and franchise details for Gangoh, UP.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-business-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Business in Gangoh | The Buyzaar Mart – Investment, FMCG Model & Supermart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Supermarket Business in Gangoh | The Buyzaar Mart – Investment, FMCG Model & Supermart Guide",
    description:
      "Planning a supermarket business in Gangoh? Discover The Buyzaar Mart's Supermart format and FMCG model — complete investment breakdown, store modules, and franchise details for Gangoh, UP.",
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