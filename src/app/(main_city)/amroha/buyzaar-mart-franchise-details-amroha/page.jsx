import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Amroha | Supermarket Franchise",
  description:
    "Start a Buyzaar Mart supermarket franchise in Amroha from ₹15 lakh total investment. 18-20% gross margin, full setup, POS, training and support. Apply today.",
  keywords: [
    "Buyzaar Mart franchise Amroha",
    "The Buyzaar Mart Amroha",
    "supermarket franchise in Amroha",
    "grocery franchise in Amroha",
    "supermarket franchise Uttar Pradesh",
    "grocery franchise Uttar Pradesh",
    "Buyzaar Mart franchise details",
    "Buyzaar Mart franchise cost",
    "Buyzaar Mart franchise investment",
    "low investment grocery franchise India",
    "grocery franchise under 20 lakh",
    "mini mart franchise Amroha",
    "super mart franchise",
    "hyper mart franchise",
    "FOCM franchise India",
    "franchise owned company managed",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
    "retail franchise Amroha",
    "supermarket franchise with full support",
    "grocery store franchise with training",
    "how to start grocery franchise in Amroha",
    "franchise business opportunity Amroha",
    "Buyzaar Mart franchise apply",
    "supermarket franchise near me",
    "retail franchise UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-details-amroha",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Amroha | Supermarket Franchise",
    description:
      "Start a Buyzaar Mart supermarket franchise in Amroha from ₹15 lakh total investment. 18-20% gross margin, full setup, POS, training and support. Apply today.",
    url: "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-details-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Amroha | Supermarket Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Amroha | Supermarket Franchise",
    description:
      "Start a Buyzaar Mart supermarket franchise in Amroha from ₹15 lakh total investment. 18-20% gross margin, full setup, POS, training and support. Apply today.",
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