import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Franchise Opportunity in Agra | Buyzaar Mart Investment Guide",
  description:
    "Explore the FMCG franchise opportunity in Agra with Buyzaar Mart — product categories, store formats, investment, and application process.",
  keywords: [
    "FMCG franchise Agra",
    "FMCG retail franchise India",
    "Buyzaar Mart Agra",
    "FMCG business opportunity Agra",
    "packaged goods franchise Agra",
    "Buyzaar Mart investment",
    "FMCG store franchise",
    "grocery FMCG franchise Uttar Pradesh",
    "organized FMCG retail Agra",
    "Buyzaar Mart FMCG franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/fmcg-franchise-opportunity-in-agra",
  },
  openGraph: {
    title: "FMCG Franchise Opportunity in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the FMCG franchise opportunity in Agra with Buyzaar Mart — product categories, store formats, investment, and application process.",
    url: "https://www.thebuyzaarmart.com/agra/fmcg-franchise-opportunity-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Franchise Opportunity in Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Franchise Opportunity in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the FMCG franchise opportunity in Agra with Buyzaar Mart — product categories, store formats, investment, and application process.",
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