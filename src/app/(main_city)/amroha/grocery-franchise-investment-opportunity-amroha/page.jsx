import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment in Amroha | The Buyzaar Mart",
  description:
    "Start a grocery franchise in Amroha with The Buyzaar Mart. Total investment ₹15–20 lakh, 18–20% gross margin, full setup, POS, training & support. Apply now.",
  keywords: [
    "grocery franchise in Amroha",
    "grocery franchise investment Amroha",
    "supermarket franchise in Amroha",
    "Buyzaar Mart franchise Amroha",
    "The Buyzaar Mart",
    "grocery store franchise Uttar Pradesh",
    "low investment grocery franchise",
    "supermarket franchise in UP",
    "Mini Mart franchise",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "FOCM franchise India",
    "franchise owned company managed",
    "retail franchise Amroha",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "grocery franchise 15 lakh",
    "grocery franchise under 20 lakh",
    "kirana store franchise Amroha",
    "supermarket franchise cost India",
    "how to start grocery franchise",
    "franchise business opportunity Amroha",
    "best grocery franchise in India",
    "grocery franchise with full support",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/grocery-franchise-investment-opportunity-amroha",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Amroha | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Amroha with The Buyzaar Mart. Total investment ₹15–20 lakh, 18–20% gross margin, full setup, POS, training & support. Apply now.",
    url: "https://www.thebuyzaarmart.com/amroha/grocery-franchise-investment-opportunity-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Amroha | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Amroha with The Buyzaar Mart. Total investment ₹15–20 lakh, 18–20% gross margin, full setup, POS, training & support. Apply now.",
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