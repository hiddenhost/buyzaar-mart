import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start Grocery Store Franchise Bulandshahr | Buyzaar Mart Guide",
  description:
    "A step-by-step guide on how to start a grocery store franchise in Bulandshahr with Buyzaar Mart, covering formats, investment, process and support.",
  keywords: [
    "how to start grocery store franchise bulandshahr",
    "start grocery store bulandshahr",
    "grocery store franchise process",
    "buyzaar mart grocery store",
    "open supermarket bulandshahr",
    "mini mart grocery store",
    "super mart grocery store",
    "hyper mart grocery store",
    "grocery store investment uttar pradesh",
    "FOCO grocery store franchise",
    "FOCM grocery store franchise",
    "grocery store documentation",
    "grocery store setup process",
    "buyzaar mart supply chain",
    "POS billing grocery store franchise",
    "grocery store training program",
    "grocery store marketing support",
    "buyzaar mart contact number",
    "low investment grocery store",
    "organized grocery retail bulandshahr",
    "kirana store upgrade franchise",
    "grocery store eligibility",
    "first time grocery store owner guide",
    "grocery store franchise timeline bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/how-to-start-grocery-store-franchise-bulandshahr",
  },
  openGraph: {
    title: "How to Start Grocery Store Franchise Bulandshahr | Buyzaar Mart Guide",
    description:
      "A step-by-step guide on how to start a grocery store franchise in Bulandshahr with Buyzaar Mart, covering formats, investment, process and support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/how-to-start-grocery-store-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start Grocery Store Franchise Bulandshahr | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start Grocery Store Franchise Bulandshahr | Buyzaar Mart Guide",
    description:
      "A step-by-step guide on how to start a grocery store franchise in Bulandshahr with Buyzaar Mart, covering formats, investment, process and support.",
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