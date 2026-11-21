import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Franchise Opportunity in Amroha | The Buyzaar Mart",
  description:
    "Start a supermarket franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training, POS and supply support.",
  keywords: [
    "franchise opportunity in amroha",
    "franchise opportunities amroha",
    "franchise business in amroha",
    "franchise business opportunity amroha",
    "buyzaar mart franchise amroha",
    "supermarket franchise amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "low investment franchise amroha",
    "franchise under 20 lakh amroha",
    "grocery franchise 15 lakh amroha",
    "focm franchise amroha",
    "foco franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "franchise opportunity uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/franchise-opportunity-amroha",
  },
  openGraph: {
    title: "Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Start a supermarket franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training, POS and supply support.",
    url: "https://www.thebuyzaarmart.com/amroha/franchise-opportunity-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Start a supermarket franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training, POS and supply support.",
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