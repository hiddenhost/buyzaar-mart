import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity Bulandshahr | Buyzaar Mart",
  description:
    "Explore a supermarket franchise opportunity in Bulandshahr with The Buyzaar Mart. Choose FOCM or FOCO, get POS, training, marketing and buyback support. Apply now.",
  keywords: [
    "supermarket franchise opportunity bulandshahr",
    "supermarket franchise in bulandshahr",
    "super mart franchise bulandshahr",
    "the buyzaar mart",
    "buyzaar mart franchise",
    "buyzaar mart supermarket",
    "FOCM franchise bulandshahr",
    "FOCO franchise bulandshahr",
    "franchise owned company managed",
    "franchise owned company operated",
    "supermarket franchise uttar pradesh",
    "supermarket franchise western UP",
    "retail franchise opportunity bulandshahr",
    "franchise business opportunity bulandshahr",
    "hyper mart franchise bulandshahr",
    "neighbourhood supermarket franchise",
    "organised retail franchise india",
    "low investment supermarket franchise",
    "supermarket franchise with training and support",
    "FMCG supermarket franchise",
    "supermarket business in bulandshahr",
    "how to open a supermarket in bulandshahr",
    "passive income retail franchise",
    "supermarket franchise near delhi ncr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/supermarket-franchise-opportunity-bulandshahr",
  },
  openGraph: {
    title: "Supermarket Franchise Opportunity Bulandshahr | Buyzaar Mart",
    description:
      "Explore a supermarket franchise opportunity in Bulandshahr with The Buyzaar Mart. Choose FOCM or FOCO, get POS, training, marketing and buyback support. Apply now.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/supermarket-franchise-opportunity-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity Bulandshahr | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity Bulandshahr | Buyzaar Mart",
    description:
      "Explore a supermarket franchise opportunity in Bulandshahr with The Buyzaar Mart. Choose FOCM or FOCO, get POS, training, marketing and buyback support. Apply now.",
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