import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Mart Opportunity in Prayagraj | Buyzaar Mart",
  description:
    "Explore a franchise mart opportunity in Prayagraj with Buyzaar Mart. Growing demand, low competition, and strong franchise support make now the right time.",
  keywords: [
    "franchise mart opportunity Prayagraj",
    "Buyzaar Mart franchise",
    "retail franchise opportunity India",
    "grocery franchise investment Prayagraj",
    "franchise business opportunity UP",
    "mart franchise India",
    "Tier-2 city franchise opportunity",
    "new franchise opportunity Prayagraj",
    "retail investment opportunity India",
    "franchise mart business Prayagraj",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/franchise-mart-opportunity-prayagraj",
  },
  openGraph: {
    title: "Franchise Mart Opportunity in Prayagraj | Buyzaar Mart",
    description:
      "Explore a franchise mart opportunity in Prayagraj with Buyzaar Mart. Growing demand, low competition, and strong franchise support make now the right time.",
    url: "https://www.thebuyzaarmart.com/prayagraj/franchise-mart-opportunity-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Mart Opportunity in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Mart Opportunity in Prayagraj | Buyzaar Mart",
    description:
      "Explore a franchise mart opportunity in Prayagraj with Buyzaar Mart. Growing demand, low competition, and strong franchise support make now the right time.",
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