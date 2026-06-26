import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Mart Franchise Opportunity in Agra, UP | Buyzaar Mart",
  description:
    "Explore an organised mart franchise opportunity in Agra, UP with Buyzaar Mart. Standardized systems, POS billing & full brand support. Low investment. Enquire now!",
  keywords: [
    "organised mart franchise Agra UP",
    "organised retail franchise opportunity",
    "supermarket franchise Uttar Pradesh",
    "Buyzaar Mart franchise Agra",
    "branded mart franchise India",
    "mini mart franchise Agra",
    "FOCM organised retail franchise",
    "low investment retail franchise UP",
    "grocery franchise tier 2 city",
    "retail franchise opportunity Agra",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/organised-mart-franchise-opportunity-in-agra-up",
  },
  openGraph: {
    title: "Organised Mart Franchise Opportunity in Agra, UP | Buyzaar Mart",
    description:
      "Explore an organised mart franchise opportunity in Agra, UP with Buyzaar Mart. Standardized systems, POS billing & full brand support. Low investment. Enquire now!",
    url: "https://www.thebuyzaarmart.com/agra/organised-mart-franchise-opportunity-in-agra-up",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise Opportunity in Agra, UP | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise Opportunity in Agra, UP | Buyzaar Mart",
    description:
      "Explore an organised mart franchise opportunity in Agra, UP with Buyzaar Mart. Standardized systems, POS billing & full brand support. Low investment. Enquire now!",
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