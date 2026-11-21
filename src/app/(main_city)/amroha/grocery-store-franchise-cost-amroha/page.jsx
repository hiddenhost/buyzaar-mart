import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Cost in Amroha | The Buyzaar Mart",
  description:
    "Check grocery store franchise cost in Amroha with The Buyzaar Mart. Total investment ₹15–20 lakh for a Mini Mart, 18–20% gross margin, training & full support.",
  keywords: [
    "grocery store franchise cost Amroha",
    "grocery franchise cost in Amroha",
    "grocery store franchise in Amroha",
    "supermarket franchise cost Amroha",
    "Buyzaar Mart franchise cost",
    "The Buyzaar Mart",
    "grocery franchise investment",
    "grocery franchise under 20 lakh",
    "grocery franchise 15 lakh",
    "low investment grocery franchise",
    "Mini Mart franchise cost",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "supermarket franchise Uttar Pradesh",
    "FOCM franchise India",
    "franchise owned company managed",
    "kirana store upgrade franchise",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "how much does a grocery franchise cost",
    "grocery franchise with training and support",
    "grocery franchise profit margin",
    "retail franchise Amroha",
    "POS enabled grocery franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/grocery-store-franchise-cost-amroha",
  },
  openGraph: {
    title: "Grocery Store Franchise Cost in Amroha | The Buyzaar Mart",
    description:
      "Check grocery store franchise cost in Amroha with The Buyzaar Mart. Total investment ₹15–20 lakh for a Mini Mart, 18–20% gross margin, training & full support.",
    url: "https://www.thebuyzaarmart.com/amroha/grocery-store-franchise-cost-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Cost in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Cost in Amroha | The Buyzaar Mart",
    description:
      "Check grocery store franchise cost in Amroha with The Buyzaar Mart. Total investment ₹15–20 lakh for a Mini Mart, 18–20% gross margin, training & full support.",
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