import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Retail Franchise in Gurugram | Buyzaar Mart Franchise Opportunity",
  description:
    "Start an FMCG retail franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, strong product range & full support. Enquire now!",
  keywords: [
    "FMCG retail franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "FMCG store business India",
    "FMCG distribution franchise",
    "fast moving consumer goods retail",
    "low investment supermarket franchise in Lucknow",
    "FMCG franchise opportunity",
    "retail franchise Gurugram",
    "FMCG supermarket business",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/fmcg-retail-franchise-gurugram",
  },
  openGraph: {
    title: "FMCG Retail Franchise in Gurugram | Buyzaar Mart Franchise Opportunity",
    description:
      "Start an FMCG retail franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, strong product range & full support. Enquire now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/fmcg-retail-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Retail Franchise in Gurugram | Buyzaar Mart Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Retail Franchise in Gurugram | Buyzaar Mart Franchise Opportunity",
    description:
      "Start an FMCG retail franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, strong product range & full support. Enquire now!",
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