import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment in Amroha | Buyzaar Mart",
  description:
    "Grocery franchise investment in Amroha starts from ₹15 lakh total with Buyzaar Mart. Get branding, POS billing, managed supply, training and 18-20% gross margin.",
  keywords: [
    "grocery franchise investment Amroha",
    "grocery franchise Amroha",
    "Buyzaar Mart franchise Amroha",
    "grocery franchise cost Amroha",
    "total investment grocery franchise",
    "grocery franchise 15 lakh",
    "grocery franchise under 20 lakh",
    "low investment grocery franchise",
    "supermarket franchise Amroha",
    "mart franchise Amroha",
    "mini mart franchise Amroha",
    "retail franchise Amroha",
    "FOCM franchise Amroha",
    "grocery store franchise Amroha",
    "grocery franchise Uttar Pradesh",
    "grocery franchise UP",
    "franchise business opportunity Amroha",
    "apply for grocery franchise",
    "supermarket franchise cost India",
    "neighborhood supermarket franchise",
    "FMCG store franchise",
    "supermarket franchise in India",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/grocery-franchise-investment-amroha",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Amroha | Buyzaar Mart",
    description:
      "Grocery franchise investment in Amroha starts from ₹15 lakh total with Buyzaar Mart. Get branding, POS billing, managed supply, training and 18-20% gross margin.",
    url: "https://www.thebuyzaarmart.com/amroha/grocery-franchise-investment-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Amroha | Buyzaar Mart",
    description:
      "Grocery franchise investment in Amroha starts from ₹15 lakh total with Buyzaar Mart. Get branding, POS billing, managed supply, training and 18-20% gross margin.",
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