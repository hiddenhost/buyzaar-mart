import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Franchise in Amroha | The Buyzaar Mart",
  description:
    "FOCM model franchise in Amroha: own your supermarket, Buyzaar Mart manages the system. Mini Mart total investment ₹15–20 lakh, 5-year term, training and POS support.",
  keywords: [
    "FOCM model franchise Amroha",
    "FOCM franchise India",
    "franchise owned company managed",
    "Buyzaar Mart FOCM model",
    "The Buyzaar Mart",
    "supermarket franchise Amroha",
    "grocery franchise Amroha",
    "Mini Mart franchise",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "FOCM vs FOCO franchise",
    "managed grocery franchise India",
    "supermarket franchise Uttar Pradesh",
    "low investment supermarket franchise",
    "grocery franchise under 20 lakh",
    "grocery franchise 15 lakh",
    "5 year franchise agreement",
    "franchise with full support",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "kirana store upgrade franchise",
    "retail franchise Amroha",
    "POS enabled supermarket franchise",
    "how to start a supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/focm-model-franchise-amroha",
  },
  openGraph: {
    title: "FOCM Model Franchise in Amroha | The Buyzaar Mart",
    description:
      "FOCM model franchise in Amroha: own your supermarket, Buyzaar Mart manages the system. Mini Mart total investment ₹15–20 lakh, 5-year term, training and POS support.",
    url: "https://www.thebuyzaarmart.com/amroha/focm-model-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Franchise in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Franchise in Amroha | The Buyzaar Mart",
    description:
      "FOCM model franchise in Amroha: own your supermarket, Buyzaar Mart manages the system. Mini Mart total investment ₹15–20 lakh, 5-year term, training and POS support.",
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