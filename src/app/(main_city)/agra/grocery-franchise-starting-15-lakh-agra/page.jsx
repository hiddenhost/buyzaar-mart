import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Starting ₹15 Lakh in Agra | Buyzaar Mart",
  description:
    "Start a grocery franchise in Agra from ₹15 lakh with Buyzaar Mart's Mini Mart format. Zero-royalty, Company-Managed model with full operational support.",
  keywords: [
    "grocery franchise 15 lakh Agra",
    "low investment franchise Agra",
    "Buyzaar Mart Mini Mart Agra",
    "affordable grocery franchise Agra",
    "zero royalty franchise Agra",
    "small investment retail franchise",
    "Buyzaar Mart franchise cost",
    "company managed franchise Agra",
    "franchise under 20 lakh Agra",
    "Buyzaar Mart grocery store",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/grocery-franchise-starting-15-lakh-in-agra",
  },
  openGraph: {
    title: "Grocery Franchise Starting ₹15 Lakh in Agra | Buyzaar Mart",
    description:
      "Start a grocery franchise in Agra from ₹15 lakh with Buyzaar Mart's Mini Mart format. Zero-royalty, Company-Managed model with full operational support.",
    url: "https://www.thebuyzaarmart.com/agra/grocery-franchise-starting-15-lakh-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Starting ₹15 Lakh in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Starting ₹15 Lakh in Agra | Buyzaar Mart",
    description:
      "Start a grocery franchise in Agra from ₹15 lakh with Buyzaar Mart's Mini Mart format. Zero-royalty, Company-Managed model with full operational support.",
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