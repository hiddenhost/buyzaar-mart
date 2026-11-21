import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Profitable Franchise in Amroha | The Buyzaar Mart",
  description:
    "Explore a profitable franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, full training and supply support.",
  keywords: [
    "profitable franchise amroha",
    "most profitable franchise amroha",
    "profitable franchise business amroha",
    "high profit franchise amroha",
    "buyzaar mart franchise amroha",
    "grocery franchise amroha",
    "supermarket franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "franchise business opportunity amroha",
    "low investment franchise amroha",
    "franchise under 20 lakh amroha",
    "grocery franchise 15 lakh amroha",
    "focm franchise amroha",
    "foco franchise amroha",
    "mini mart franchise amroha",
    "franchise with good returns india",
    "daily need franchise business",
    "franchise opportunity uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/profitable-franchise-amroha",
  },
  openGraph: {
    title: "Profitable Franchise in Amroha | The Buyzaar Mart",
    description:
      "Explore a profitable franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, full training and supply support.",
    url: "https://www.thebuyzaarmart.com/amroha/profitable-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Profitable Franchise in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profitable Franchise in Amroha | The Buyzaar Mart",
    description:
      "Explore a profitable franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, full training and supply support.",
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