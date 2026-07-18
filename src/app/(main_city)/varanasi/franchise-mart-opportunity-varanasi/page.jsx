import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Mart Opportunity in Varanasi | Buyzaar Mart",
  description:
    "Explore a profitable franchise mart opportunity in Varanasi with Buyzaar Mart. Learn about store formats, investment, support, and growth potential.",
  keywords: [
    "franchise mart opportunity Varanasi",
    "Buyzaar Mart franchise",
    "retail franchise business Varanasi",
    "supermarket franchise opportunity",
    "mart franchise investment",
    "grocery franchise Varanasi",
    "franchise business ideas Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/franchise-mart-opportunity-varanasi",
  },
  openGraph: {
    title: "Franchise Mart Opportunity in Varanasi | Buyzaar Mart",
    description:
      "Explore a profitable franchise mart opportunity in Varanasi with Buyzaar Mart. Learn about store formats, investment, support, and growth potential.",
    url: "https://www.thebuyzaarmart.com/varanasi/franchise-mart-opportunity-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Mart Opportunity in Varanasi | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Mart Opportunity in Varanasi | Buyzaar Mart",
    description:
      "Explore a profitable franchise mart opportunity in Varanasi with Buyzaar Mart. Learn about store formats, investment, support, and growth potential.",
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