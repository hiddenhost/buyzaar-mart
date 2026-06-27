import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Varanasi | Retail Business Opportunity in UP",
  description:
    "Looking for a profitable franchise business in Varanasi? Join Buyzaar Mart — a trusted organized retail franchise offering full support, low investment, and high returns. Apply now!",
  keywords: [
    "Buyzaar Mart franchise Varanasi",
    "Buyzaar Mart franchise opportunity",
    "retail franchise Varanasi",
    "franchise business in Varanasi",
    "organized retail franchise UP",
    "supermart franchise Varanasi",
    "best franchise in Uttar Pradesh",
    "low investment franchise Varanasi",
    "grocery franchise Varanasi",
    "FMCG franchise Varanasi",
    "Buyzaar Mart apply online",
    "retail store franchise India",
    "franchise business opportunity UP",
    "supermarket franchise Varanasi",
    "Buyzaar Mart store Varanasi",
    "profitable franchise Varanasi",
    "kirana to franchise Varanasi",
    "Buyzaar Mart partner",
    "franchise in Tier 2 city India",
    "retail franchise low cost India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-franchise-varanasi",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Varanasi | Retail Business Opportunity in UP",
    description:
      "Looking for a profitable franchise business in Varanasi? Join Buyzaar Mart — a trusted organized retail franchise offering full support, low investment, and high returns. Apply now!",
    url: "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Varanasi | Retail Business Opportunity in UP",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Varanasi | Retail Business Opportunity in UP",
    description:
      "Looking for a profitable franchise business in Varanasi? Join Buyzaar Mart — a trusted organized retail franchise offering full support, low investment, and high returns. Apply now!",
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