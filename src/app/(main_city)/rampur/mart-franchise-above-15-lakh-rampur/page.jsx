import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Mart Franchise Above ₹15 Lakh in Rampur | The Buyzaar Mart",
  description:
    "Start a mart franchise above ₹15 lakh in Rampur with The Buyzaar Mart. Choose Mini, Super or Hyper Mart with POS, supply chain, training and marketing support.",
  keywords: [
    "mart franchise above 15 lakh rampur",
    "mart franchise rampur",
    "mart franchise above 15 lakh",
    "supermarket franchise rampur",
    "grocery franchise rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart",
    "mini mart franchise rampur",
    "super mart franchise rampur",
    "hyper mart franchise rampur",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "retail franchise rampur",
    "organised retail franchise",
    "grocery franchise uttar pradesh",
    "supermarket franchise in india",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "mart franchise with full support",
    "franchise business opportunity rampur",
    "supermarket franchise cost india",
    "how to open mart franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/mart-franchise-above-15-lakh-rampur",
  },
  openGraph: {
    title: "Mart Franchise Above ₹15 Lakh in Rampur | The Buyzaar Mart",
    description:
      "Start a mart franchise above ₹15 lakh in Rampur with The Buyzaar Mart. Choose Mini, Super or Hyper Mart with POS, supply chain, training and marketing support.",
    url: "https://www.thebuyzaarmart.com/rampur/mart-franchise-above-15-lakh-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Above ₹15 Lakh in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Above ₹15 Lakh in Rampur | The Buyzaar Mart",
    description:
      "Start a mart franchise above ₹15 lakh in Rampur with The Buyzaar Mart. Choose Mini, Super or Hyper Mart with POS, supply chain, training and marketing support.",
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