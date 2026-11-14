import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Investment in Amroha | TheBuyzaar Mart",
  description:
    "Planning a retail franchise investment in Amroha? Buyzaar Mart starts from ₹15 lakh total investment with setup, POS billing, training and 18-20% gross margin.",
  keywords: [
    "retail franchise investment Amroha",
    "retail franchise Amroha",
    "franchise investment Amroha",
    "Buyzaar Mart franchise Amroha",
    "grocery franchise investment Amroha",
    "supermarket franchise investment",
    "mart franchise Amroha",
    "total investment grocery franchise",
    "grocery franchise 15 lakh",
    "grocery franchise under 20 lakh",
    "low investment retail franchise",
    "FOCM franchise Amroha",
    "retail franchise Uttar Pradesh",
    "grocery franchise UP",
    "franchise business opportunity Amroha",
    "supermarket franchise cost India",
    "retail franchise with full support",
    "apply for retail franchise",
    "neighborhood supermarket franchise",
    "FMCG store franchise",
    "supermarket franchise in India",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/retail-franchise-investment-amroha",
  },
  openGraph: {
    title: "Retail Franchise Investment in Amroha | The Buyzaar Mart",
    description:
      "Planning a retail franchise investment in Amroha? Buyzaar Mart starts from ₹15 lakh total investment with setup, POS billing, training and 18-20% gross margin.",
    url: "https://www.thebuyzaarmart.com/amroha/retail-franchise-investment-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Investment in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Investment in Amroha | The Buyzaar Mart",
    description:
      "Planning a retail franchise investment in Amroha? The Buyzaar Mart starts from ₹15 lakh total investment with setup, POS billing, training and 18-20% gross margin.",
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