import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Retail Store Franchise in Bulandshahr | Buyzaar Mart",
  description:
    "A complete guide on how to open a retail store franchise in Bulandshahr with Buyzaar Mart, covering formats, investment, process and support.",
  keywords: [
    "how to open a retail store franchise in bulandshahr",
    "open retail store bulandshahr",
    "retail store franchise process",
    "buyzaar mart retail store",
    "start retail store bulandshahr",
    "mini mart retail store",
    "super mart retail store",
    "hyper mart retail store",
    "retail store investment uttar pradesh",
    "FOCO retail store franchise",
    "FOCM retail store franchise",
    "retail store documentation",
    "retail store setup process",
    "buyzaar mart supply chain support",
    "POS billing retail store franchise",
    "retail store training program",
    "retail store marketing support",
    "buyzaar mart contact number",
    "low investment retail store franchise",
    "organized retail store bulandshahr",
    "kirana to branded store upgrade",
    "retail store eligibility",
    "first time retail store owner guide",
    "retail store franchise timeline bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/how-to-open-a-retail-store-franchise-in-bulandshahr",
  },
  openGraph: {
    title: "How to Open a Retail Store Franchise in Bulandshahr | Buyzaar Mart",
    description:
      "A complete guide on how to open a retail store franchise in Bulandshahr with Buyzaar Mart, covering formats, investment, process and support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/how-to-open-a-retail-store-franchise-in-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Store Franchise in Bulandshahr | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Retail Store Franchise in Bulandshahr | Buyzaar Mart",
    description:
      "A complete guide on how to open a retail store franchise in Bulandshahr with Buyzaar Mart, covering formats, investment, process and support.",
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