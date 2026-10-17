import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise Opportunity in Aligarh | The Buyzaar Mart",
  description:
    "Start a FOCM supermarket franchise in Aligarh with The Buyzaar Mart. Investment from ₹15 lakh, 18–20% gross margin, supply chain and full support. Apply now.",
  keywords: [
    "FOCM franchise opportunity Aligarh",
    "FOCM franchise Aligarh",
    "Buyzaar Mart franchise Aligarh",
    "supermarket franchise in Aligarh",
    "grocery franchise in Aligarh",
    "mart franchise Aligarh",
    "franchise opportunity in Aligarh",
    "retail franchise Aligarh",
    "low investment franchise Aligarh",
    "best franchise in Aligarh",
    "franchise owned company managed",
    "FOCM franchise India",
    "grocery franchise under 20 lakh",
    "Mini Mart franchise Aligarh",
    "Super Mart franchise Aligarh",
    "Hyper Mart franchise Aligarh",
    "supermarket franchise Uttar Pradesh",
    "grocery store franchise UP",
    "neighbourhood supermarket franchise",
    "FMCG store franchise India",
    "supermarket franchise cost India",
    "franchise with training and support",
    "The Buyzaar Mart",
    "Aligarh business opportunity",
    "profitable franchise Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/focm-franchise-opportunity-aligarh",
  },
  openGraph: {
    title: "FOCM Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Start a FOCM supermarket franchise in Aligarh with The Buyzaar Mart. Investment from ₹15 lakh, 18–20% gross margin, supply chain and full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/focm-franchise-opportunity-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Opportunity in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Start a FOCM supermarket franchise in Aligarh with The Buyzaar Mart. Investment from ₹15 lakh, 18–20% gross margin, supply chain and full support. Apply now.",
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