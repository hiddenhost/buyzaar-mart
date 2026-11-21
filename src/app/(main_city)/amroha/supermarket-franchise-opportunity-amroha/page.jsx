import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity in Amroha | Buyzaar Mart",
  description:
    "Start a supermarket franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, POS, training and full support.",
  keywords: [
    "supermarket franchise opportunity amroha",
    "supermarket franchise amroha",
    "supermarket business opportunity amroha",
    "supermarket franchise in amroha",
    "buyzaar mart franchise amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "organised retail franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "low investment supermarket franchise amroha",
    "supermarket franchise under 20 lakh",
    "supermarket franchise 15 lakh amroha",
    "focm supermarket franchise amroha",
    "foco supermarket franchise amroha",
    "supermarket franchise uttar pradesh",
    "franchise business opportunity amroha",
    "apply buyzaar mart franchise",
    "supermarket franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/supermarket-franchise-opportunity-amroha",
  },
  openGraph: {
    title: "Supermarket Franchise Opportunity in Amroha | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, POS, training and full support.",
    url: "https://www.thebuyzaarmart.com/amroha/supermarket-franchise-opportunity-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity in Amroha | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, POS, training and full support.",
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