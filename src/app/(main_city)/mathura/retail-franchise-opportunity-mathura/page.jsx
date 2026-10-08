import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Opportunity in Mathura | Buyzaar Mart",
  description:
    "Start a retail franchise in Mathura with The Buyzaar Mart. Investment from ₹15 Lakh, 18-20% margin, full setup, POS, supply chain and training. Apply now.",
  keywords: [
    "retail franchise opportunity Mathura",
    "retail franchise Mathura",
    "grocery franchise Mathura",
    "supermarket franchise Mathura",
    "mart franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "The Buyzaar Mart",
    "low investment franchise Mathura",
    "franchise business opportunity Mathura",
    "FOCM franchise Mathura",
    "grocery store franchise Mathura",
    "mini mart franchise Mathura",
    "super mart franchise Mathura",
    "hyper mart franchise Mathura",
    "retail franchise Uttar Pradesh",
    "grocery franchise under 20 lakh",
    "supermarket franchise cost India",
    "franchise owned company managed",
    "FMCG store franchise Mathura",
    "organised retail franchise Mathura",
    "neighbourhood supermarket franchise",
    "best retail franchise Mathura",
    "profitable franchise Mathura",
    "franchise with full support",
    "how to start a grocery franchise in Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/retail-franchise-opportunity-mathura",
  },
  openGraph: {
    title: "Retail Franchise Opportunity in Mathura | Buyzaar Mart",
    description:
      "Start a retail franchise in Mathura with The Buyzaar Mart. Investment from ₹15 Lakh, 18-20% margin, full setup, POS, supply chain and training. Apply now.",
    url: "https://www.thebuyzaarmart.com/mathura/retail-franchise-opportunity-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Opportunity in Mathura | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Opportunity in Mathura | Buyzaar Mart",
    description:
      "Start a retail franchise in Mathura with The Buyzaar Mart. Investment from ₹15 Lakh, 18-20% margin, full setup, POS, supply chain and training. Apply now.",
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