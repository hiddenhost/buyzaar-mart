import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Opportunity in Mathura | The Buyzaar Mart",
  description:
    "Explore the franchise opportunity in Mathura with The Buyzaar Mart. See FOCM and FOCO models, store formats, investment, margins, locations and how to apply.",
  keywords: [
    "franchise opportunity in Mathura",
    "Mathura franchise opportunities",
    "franchise business in Mathura",
    "Buyzaar Mart franchise Mathura",
    "supermarket franchise Mathura",
    "grocery franchise Mathura",
    "mart franchise in Mathura",
    "mini mart franchise Mathura",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "low investment franchise Mathura",
    "retail franchise Mathura",
    "franchise opportunity Uttar Pradesh",
    "supermarket franchise Uttar Pradesh",
    "franchise investment 15 lakh",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "FMCG franchise Mathura",
    "best franchise in Mathura",
    "franchise in Vrindavan",
    "Mathura Vrindavan franchise",
    "grocery store franchise India",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/franchise-opportunity-in-mathura",
  },
  openGraph: {
    title: "Franchise Opportunity in Mathura | The Buyzaar Mart",
    description:
      "Explore the franchise opportunity in Mathura with The Buyzaar Mart. See FOCM and FOCO models, store formats, investment, margins, locations and how to apply.",
    url: "https://www.thebuyzaarmart.com/mathura/franchise-opportunity-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Opportunity in Mathura | The Buyzaar Mart",
    description:
      "Explore the franchise opportunity in Mathura with The Buyzaar Mart. See FOCM and FOCO models, store formats, investment, margins, locations and how to apply.",
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