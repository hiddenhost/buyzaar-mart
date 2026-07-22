import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Franchise Opportunity in Gurugram | The Buyzaar Mart",
  description:
    "Explore an FMCG franchise opportunity in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed daily needs retail format.",
  keywords: [
    "FMCG franchise opportunity Gurugram",
    "Buyzaar Mart Gurugram",
    "FMCG retail franchise India",
    "low investment supermarket franchise",
    "grocery franchise Gurugram",
    "FOCM franchise model",
    "daily needs store franchise",
    "retail business franchise Gurugram",
    "low investment supermarket franchise Lucknow",
    "FMCG distribution franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/fmcg-franchise-opportunity-gurugram",
  },
  openGraph: {
    title: "FMCG Franchise Opportunity in Gurugram | The Buyzaar Mart",
    description:
      "Explore an FMCG franchise opportunity in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed daily needs retail format.",
    url: "https://www.thebuyzaarmart.com/gurgaon/fmcg-franchise-opportunity-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Franchise Opportunity in Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Franchise Opportunity in Gurugram | The Buyzaar Mart",
    description:
      "Explore an FMCG franchise opportunity in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed daily needs retail format.",
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