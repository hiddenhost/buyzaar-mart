import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "How to Start FMCG Franchise in Moradabad | The Buyzaar Mart",
  description:
    "Step-by-step guide to starting an FMCG franchise in Moradabad with The Buyzaar Mart — eligibility, documents, investment, and launch timeline.",
  keywords: [
    "how to start FMCG franchise Moradabad",
    "start grocery franchise Moradabad",
    "open franchise Moradabad",
    "The Buyzaar Mart franchise process",
    "FMCG franchise eligibility",
    "franchise documents required India",
    "grocery store franchise steps",
    "start supermarket franchise UP",
    "franchise application process Moradabad",
    "low investment franchise process",
    "FOCM FOCO application",
    "franchise launch timeline",
    "start retail business Moradabad",
    "franchise KYC process",
    "mini mart franchise steps",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/how-to-start-fmcg-franchise-in-moradabad",
  },
  openGraph: {
    title: "How to Start FMCG Franchise in Moradabad | The Buyzaar Mart",
    description:
      "Step-by-step guide to starting an FMCG franchise in Moradabad with The Buyzaar Mart — eligibility, documents, investment, and launch timeline.",
    url: "https://www.thebuyzaarmart.com/moradabad/how-to-start-fmcg-franchise-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start FMCG Franchise in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start FMCG Franchise in Moradabad | The Buyzaar Mart",
    description:
      "Step-by-step guide to starting an FMCG franchise in Moradabad with The Buyzaar Mart — eligibility, documents, investment, and launch timeline.",
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