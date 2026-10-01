import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Starting ₹15 Lakh in Gorakhpur | Buyzaar Mart",
  description:
    "Explore a mart franchise starting ₹15 lakh in Gorakhpur. Compare FOCM and FOCO models, Mini Mart costs, documents, margins and launch support from The Buyzaar Mart.",
  keywords: [
    "mart franchise starting 15 lakh Gorakhpur",
    "Mini Mart franchise Gorakhpur",
    "supermarket franchise Gorakhpur",
    "grocery franchise in Gorakhpur",
    "The Buyzaar Mart franchise",
    "Buyzaar Mart Gorakhpur",
    "FOCM franchise India",
    "FOCO franchise India",
    "franchise owned company managed",
    "franchise owned company operated",
    "low investment supermarket franchise",
    "grocery franchise Uttar Pradesh",
    "retail franchise in Gorakhpur",
    "15 lakh franchise business",
    "franchise business for beginners",
    "best franchise business in Gorakhpur",
    "FMCG retail franchise",
    "neighborhood grocery store franchise",
    "grocery franchise with training and support",
    "supermarket franchise investment calculator",
    "mini mart franchise cost",
    "passive income franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-starting-15-lakh-gorakhpur",
  },
  openGraph: {
    title: "Mart Franchise Starting ₹15 Lakh in Gorakhpur | Buyzaar Mart",
    description:
      "Explore a mart franchise starting ₹15 lakh in Gorakhpur. Compare FOCM and FOCO models, Mini Mart costs, documents, margins and launch support from The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-starting-15-lakh-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Starting ₹15 Lakh in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Starting ₹15 Lakh in Gorakhpur | Buyzaar Mart",
    description:
      "Explore a mart franchise starting ₹15 lakh in Gorakhpur. Compare FOCM and FOCO models, Mini Mart costs, documents, margins and launch support from The Buyzaar Mart.",
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