import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Mart Franchise Starting at ₹15 Lakh in Rampur | Buyzaar Mart",
  description:
    "Start a mart franchise from ₹15 lakh in Rampur with The Buyzaar Mart. Get a first-year roadmap, POS billing, supply chain, training and marketing support. Apply now.",
  keywords: [
    "mart franchise starting 15 lakh rampur",
    "mart franchise rampur",
    "mart franchise from 15 lakh",
    "mini mart franchise rampur",
    "supermarket franchise rampur",
    "grocery franchise rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart",
    "FOCM franchise rampur",
    "retail franchise rampur",
    "low investment mart franchise",
    "affordable supermarket franchise india",
    "grocery franchise under 20 lakh",
    "kirana store upgrade franchise",
    "organised retail franchise",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "grocery franchise uttar pradesh",
    "mart franchise with training and support",
    "franchise business opportunity rampur",
    "how to start mart franchise",
    "supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/mart-franchise-starting-15-lakh-rampur",
  },
  openGraph: {
    title: "Mart Franchise Starting at ₹15 Lakh in Rampur | Buyzaar Mart",
    description:
      "Start a mart franchise from ₹15 lakh in Rampur with The Buyzaar Mart. Get a first-year roadmap, POS billing, supply chain, training and marketing support. Apply now.",
    url: "https://www.thebuyzaarmart.com/rampur/mart-franchise-starting-15-lakh-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Starting at ₹15 Lakh in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Starting at ₹15 Lakh in Rampur | Buyzaar Mart",
    description:
      "Start a mart franchise from ₹15 lakh in Rampur with The Buyzaar Mart. Get a first-year roadmap, POS billing, supply chain, training and marketing support. Apply now.",
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