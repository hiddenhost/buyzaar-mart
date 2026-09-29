import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Retail Franchise Investment in Mathura | The Buyzaar Mart",
  description:
    "Explore retail franchise investment opportunities in Mathura with The Buyzaar Mart. Low-investment supermarket franchise from ₹15 lakh, FOCM/FOFO models, full support.",
  keywords: [
    "retail franchise investment Mathura",
    "supermarket franchise Mathura",
    "grocery franchise Mathura",
    "franchise business Mathura",
    "Buyzaar Mart Mathura",
    "low investment franchise Mathura",
    "grocery store franchise UP",
    "retail business opportunity Mathura",
    "FOCM franchise Mathura",
    "FOFO franchise India",
    "supermarket franchise cost Mathura",
    "grocery franchise under 20 lakh",
    "franchise opportunities Uttar Pradesh",
    "small investment franchise India",
    "neighborhood supermarket franchise Mathura",
    "retail franchise near Vrindavan",
    "best franchise business Mathura",
    "grocery franchise with support",
    "FMCG store franchise India",
    "franchise business Braj region",
    "supermarket franchise ROI Mathura",
    "how to start grocery franchise Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/retail-franchise-investment-mathura",
  },
  openGraph: {
    title: "Retail Franchise Investment in Mathura | The Buyzaar Mart",
    description:
      "Explore retail franchise investment opportunities in Mathura with The Buyzaar Mart. Low-investment supermarket franchise from ₹15 lakh, FOCM/FOFO models, full support.",
    url: "https://www.thebuyzaarmart.com/mathura/retail-franchise-investment-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Investment in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Investment in Mathura | The Buyzaar Mart",
    description:
      "Explore retail franchise investment opportunities in Mathura with The Buyzaar Mart. Low-investment supermarket franchise from ₹15 lakh, FOCM/FOFO models, full support.",
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