import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCO Franchise in Prayagraj | Apply Now",
  description:
    "Discover the Buyzaar Mart FOCO franchise opportunity in Prayagraj. Invest in a company-operated supermarket model with expert management. Apply now.",
  keywords: [
    "Buyzaar Mart franchise Prayagraj",
    "FOCO franchise model",
    "supermarket franchise Prayagraj",
    "retail franchise Uttar Pradesh",
    "Buyzaar Mart franchise opportunity",
    "FMCG franchise India",
    "franchise owned company operated",
    "organized retail Prayagraj",
    "Buyzaar Mart investment",
    "passive retail investment Prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-foco-franchise-prayagraj",
  },
  openGraph: {
    title: "Buyzaar Mart FOCO Franchise in Prayagraj | Apply Now",
    description:
      "Discover the Buyzaar Mart FOCO franchise opportunity in Prayagraj. Invest in a company-operated supermarket model with expert management. Apply now.",
    url: "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-foco-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Franchise in Prayagraj | Apply Now",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCO Franchise in Prayagraj | Apply Now",
    description:
      "Discover the Buyzaar Mart FOCO franchise opportunity in Prayagraj. Invest in a company-operated supermarket model with expert management. Apply now.",
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