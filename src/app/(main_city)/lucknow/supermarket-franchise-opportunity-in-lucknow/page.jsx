import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity in Lucknow | The Buyzaar Mart",
  description:
    "Explore the best supermarket franchise opportunity in Lucknow with The Buyzaar Mart. FOCM & FOCO models, investment from ₹15 lakh, full brand support. Apply now and own your neighborhood supermarket.",
  keywords: [
    "supermarket franchise for first time investors",
    "franchise grocery mart Lucknow",
    "trusted supermarket franchise Lucknow",
    "India supermarket franchise",
    "franchise mart in Lucknow",
    "daily grocery franchise Lucknow",
    "supermarket business in Lucknow",
    "retail chain franchise Lucknow",
    "multi product supermarket franchise Lucknow",
    "supermarket store franchise Lucknow",
    "supermarket brand franchise Lucknow",
    "buy supermarket franchise Lucknow",
    "investment in supermarket franchise Lucknow",
    "supermarket franchise opportunity in Lucknow",
    "supermarket franchise in Lucknow",
    "Lucknow supermarket franchise",
    "The Buyzaar Mart Lucknow",
    "The Buyzaar Mart franchise",
    "grocery store franchise in Lucknow",
    "retail franchise in Lucknow",
    "mini mart franchise in Lucknow",
    "super mart franchise in Lucknow",
    "neighborhood supermarket franchise",
    "FOCM franchise model",
    "FOCO franchise model",
    "organized retail franchise in Lucknow",
    "daily needs franchise in Lucknow",
    "best supermarket franchise in Lucknow",
    "top supermarket franchise in Lucknow",
    "supermarket business opportunity Lucknow",
    "supermarket chain franchise Lucknow",
    "grocery supermarket franchise Lucknow",
    "branded supermarket franchise Lucknow",
    "franchise supermarket business Lucknow",
    "low investment supermarket franchise Lucknow",
    "affordable supermarket franchise Lucknow",
    "profitable supermarket franchise Lucknow"
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/supermarket-franchise-opportunity-in-lucknow",
  },
  openGraph: {
    title: "Supermarket Franchise Opportunity in Lucknow | The Buyzaar Mart",
    description:
      "Explore the best supermarket franchise opportunity in Lucknow with The Buyzaar Mart. FOCM & FOCO models, investment from ₹15 lakh, full brand support. Apply now and own your neighborhood supermarket.",
    url: "https://www.thebuyzaarmart.com/lucknow/supermarket-franchise-opportunity-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity in Lucknow | The Buyzaar Mart",
    description:
      "Explore the best supermarket franchise opportunity in Lucknow with The Buyzaar Mart. FOCM & FOCO models, investment from ₹15 lakh, full brand support. Apply now and own your neighborhood supermarket.",
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