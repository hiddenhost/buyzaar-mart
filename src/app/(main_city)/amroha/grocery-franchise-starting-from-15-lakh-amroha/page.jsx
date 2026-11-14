import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise from ₹15 Lakh in Amroha | Buyzaar Mart",
  description:
    "Start a grocery franchise in Amroha from ₹15 lakh total investment with Buyzaar Mart. Get branding, POS billing, supply support, training and 18-20% gross margin.",
  keywords: [
    "grocery franchise starting from 15 lakh Amroha",
    "grocery franchise 15 lakh",
    "grocery franchise in Amroha",
    "Buyzaar Mart franchise Amroha",
    "low investment grocery franchise Amroha",
    "grocery franchise under 20 lakh",
    "supermarket franchise Amroha",
    "mart franchise Amroha",
    "mini mart franchise Amroha",
    "retail franchise Amroha",
    "grocery store franchise Amroha",
    "FOCM franchise Amroha",
    "affordable supermarket franchise India",
    "supermarket franchise cost India",
    "low investment franchise Uttar Pradesh",
    "grocery franchise UP",
    "franchise business opportunity Amroha",
    "apply for grocery franchise",
    "grocery franchise with full support",
    "neighborhood supermarket franchise",
    "FMCG store franchise",
    "supermarket franchise in India",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/grocery-franchise-starting-from-15-lakh-amroha",
  },
  openGraph: {
    title: "Grocery Franchise from ₹15 Lakh in Amroha | Buyzaar Mart",
    description:
      "Start a grocery franchise in Amroha from ₹15 lakh total investment with Buyzaar Mart. Get branding, POS billing, supply support, training and 18-20% gross margin.",
    url: "https://www.thebuyzaarmart.com/amroha/grocery-franchise-starting-from-15-lakh-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Starting from 15 Lakh in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise from ₹15 Lakh in Amroha | Buyzaar Mart",
    description:
      "Start a grocery franchise in Amroha from ₹15 lakh total investment with Buyzaar Mart. Get branding, POS billing, supply support, training and 18-20% gross margin.",
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