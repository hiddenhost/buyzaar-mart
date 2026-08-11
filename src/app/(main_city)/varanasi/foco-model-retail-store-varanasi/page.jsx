import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Retail Store in Varanasi | The Buyzaar Mart",
  description:
    "Explore the FOCO model retail store opportunity in Varanasi with The Buyzaar Mart. Franchise-owned, company-operated retail with structured returns and low involvement.",
  keywords: [
    "FOCO model retail store Varanasi",
    "franchise owned company operated",
    "The Buyzaar Mart Varanasi",
    "passive investment retail franchise",
    "FOCO grocery store",
    "retail investment model Varanasi",
    "hands off franchise business",
    "company operated mart franchise",
    "FOCO vs FOFO",
    "retail business investment UP",
    "FOCO franchise Varanasi",
    "FOCO retail franchise Varanasi",
    "franchise owned company operated Varanasi",
    "FOCO grocery franchise Varanasi",
    "retail franchise Varanasi",
    "grocery franchise Varanasi",
    "mini mart franchise Varanasi",
    "supermarket franchise Varanasi",
    "Buyzaar Mart FOCO Varanasi"
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/foco-model-retail-store-varanasi",
  },
  openGraph: {
    title: "FOCO Model Retail Store in Varanasi | The Buyzaar Mart",
    description:
      "Explore the FOCO model retail store opportunity in Varanasi with The Buyzaar Mart. Franchise-owned, company-operated retail with structured returns and low involvement.",
    url: "https://www.thebuyzaarmart.com/varanasi/foco-model-retail-store-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Retail Store in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Retail Store in Varanasi | The Buyzaar Mart",
    description:
      "Explore the FOCO model retail store opportunity in Varanasi with The Buyzaar Mart. Franchise-owned, company-operated retail with structured returns and low involvement.",
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