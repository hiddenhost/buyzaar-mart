import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business Investment in Amroha | The Buyzaar Mart",
  description:
    "Looking for a franchise business in Amroha? Buyzaar Mart Mini Mart total investment ₹15–20 lakh, 18–20% gross margin, training, POS and full support. Apply today.",
  keywords: [
    "franchise business investment Amroha",
    "franchise business in Amroha",
    "supermarket franchise Amroha",
    "grocery franchise in Amroha",
    "Buyzaar Mart franchise",
    "The Buyzaar Mart",
    "retail franchise Amroha",
    "franchise opportunity Uttar Pradesh",
    "Mini Mart franchise",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "FOCM franchise model",
    "franchise owned company managed",
    "low investment franchise business",
    "franchise business under 20 lakh",
    "supermarket franchise in UP",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "franchise business for beginners",
    "best franchise business in India",
    "franchise with training and support",
    "grocery store franchise cost",
    "how to start a franchise business",
    "POS enabled supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/franchise-business-investment-amroha",
  },
  openGraph: {
    title: "Franchise Business Investment in Amroha | The Buyzaar Mart",
    description:
      "Looking for a franchise business in Amroha? Buyzaar Mart Mini Mart total investment ₹15–20 lakh, 18–20% gross margin, training, POS and full support. Apply today.",
    url: "https://www.thebuyzaarmart.com/amroha/franchise-business-investment-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Investment in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Investment in Amroha | The Buyzaar Mart",
    description:
      "Looking for a franchise business in Amroha? Buyzaar Mart Mini Mart total investment ₹15–20 lakh, 18–20% gross margin, training, POS and full support. Apply today.",
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