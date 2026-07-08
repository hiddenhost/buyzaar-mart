import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Retail Franchise in Prayagraj | Buyzaar Mart",
  description:
    "Invest in an FMCG retail franchise in Prayagraj with Buyzaar Mart. Wide product range, strong demand, and complete franchise support for steady business growth.",
  keywords: [
    "FMCG retail franchise Prayagraj",
    "Buyzaar Mart franchise",
    "FMCG franchise India",
    "packaged goods franchise Prayagraj",
    "retail franchise opportunity UP",
    "FMCG store franchise investment",
    "branded FMCG franchise Prayagraj",
    "grocery FMCG franchise India",
    "consumer goods retail franchise",
    "FMCG business franchise Prayagraj",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/fmcg-retail-franchise-prayagraj",
  },
  openGraph: {
    title: "FMCG Retail Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Invest in an FMCG retail franchise in Prayagraj with Buyzaar Mart. Wide product range, strong demand, and complete franchise support for steady business growth.",
    url: "https://www.thebuyzaarmart.com/prayagraj/fmcg-retail-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Retail Franchise in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Retail Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Invest in an FMCG retail franchise in Prayagraj with Buyzaar Mart. Wide product range, strong demand, and complete franchise support for steady business growth.",
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