import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise from ₹15 Lakh in Amroha | Buyzaar Mart",
  description:
    "Open a mart franchise in Amroha from ₹15 lakh total investment with Buyzaar Mart. Branded store, POS billing, managed supply, training and 18-20% gross margin.",
  keywords: [
    "mart franchise starting 15 lakh Amroha",
    "mart franchise 15 lakh",
    "mart franchise Amroha",
    "Buyzaar Mart franchise Amroha",
    "supermarket franchise Amroha",
    "grocery franchise Amroha",
    "mini mart franchise Amroha",
    "neighbourhood mart franchise",
    "retail franchise Amroha",
    "grocery franchise under 20 lakh",
    "low investment mart franchise",
    "FOCM franchise Amroha",
    "supermarket franchise cost India",
    "mart franchise Uttar Pradesh",
    "grocery franchise UP",
    "franchise business opportunity Amroha",
    "apply for mart franchise",
    "supermarket franchise with full support",
    "neighborhood supermarket franchise",
    "FMCG store franchise",
    "supermarket franchise in India",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/mart-franchise-starting-from-15-lakh-amroha",
  },
  openGraph: {
    title: "Mart Franchise from ₹15 Lakh in Amroha | Buyzaar Mart",
    description:
      "Open a mart franchise in Amroha from ₹15 lakh total investment with Buyzaar Mart. Branded store, POS billing, managed supply, training and 18-20% gross margin.",
    url: "https://www.thebuyzaarmart.com/amroha/mart-franchise-starting-from-15-lakh-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Starting from 15 Lakh in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise from ₹15 Lakh in Amroha | Buyzaar Mart",
    description:
      "Open a mart franchise in Amroha from ₹15 lakh total investment with Buyzaar Mart. Branded store, POS billing, managed supply, training and 18-20% gross margin.",
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