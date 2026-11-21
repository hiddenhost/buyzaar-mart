import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Cost in Amroha | The Buyzaar Mart",
  description:
    "Mart franchise cost in Amroha: Buyzaar Mini Mart total investment ₹15–20 lakh. Get 18–20% gross margin, 5-year FOCM model, POS, training and full store support.",
  keywords: [
    "mart franchise cost Amroha",
    "mart franchise in Amroha",
    "mart franchise cost in India",
    "supermarket franchise cost Amroha",
    "Buyzaar Mart franchise cost",
    "The Buyzaar Mart",
    "Mini Mart franchise cost",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "grocery mart franchise Amroha",
    "mart franchise investment",
    "mart franchise under 20 lakh",
    "mart franchise 15 lakh",
    "low investment mart franchise",
    "supermarket franchise Uttar Pradesh",
    "FOCM franchise India",
    "franchise owned company managed",
    "kirana store upgrade franchise",
    "FMCG store franchise",
    "neighbourhood mart franchise",
    "how much does a mart franchise cost",
    "mart franchise profit margin",
    "retail franchise Amroha",
    "POS enabled mart franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/mart-franchise-cost-amroha",
  },
  openGraph: {
    title: "Mart Franchise Cost in Amroha | The Buyzaar Mart",
    description:
      "Mart franchise cost in Amroha: Buyzaar Mini Mart total investment ₹15–20 lakh. Get 18–20% gross margin, 5-year FOCM model, POS, training and full store support.",
    url: "https://www.thebuyzaarmart.com/amroha/mart-franchise-cost-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Cost in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Cost in Amroha | The Buyzaar Mart",
    description:
      "Mart franchise cost in Amroha: Buyzaar Mini Mart total investment ₹15–20 lakh. Get 18–20% gross margin, 5-year FOCM model, POS, training and full store support.",
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