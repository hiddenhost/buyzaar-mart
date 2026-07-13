import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Starting From ₹15 Lakh in Agra | Buyzaar Mart",
  description:
    "Start a branded mart franchise in Agra with investment beginning at ₹15 lakh. Explore Buyzaar Mart's Mini Mart format, costs, and application process.",
  keywords: [
    "mart franchise 15 lakh Agra",
    "low investment franchise Agra",
    "Buyzaar Mart Mini Mart Agra",
    "grocery franchise 15 lakh",
    "affordable franchise Agra",
    "Buyzaar Mart franchise cost",
    "small investment retail franchise",
    "mini mart franchise India",
    "Buyzaar Mart Agra investment",
    "budget grocery franchise Agra",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/mart-franchise-starting-from-15-lakh-in-agra",
  },
  openGraph: {
    title: "Mart Franchise Starting From ₹15 Lakh in Agra | Buyzaar Mart",
    description:
      "Start a branded mart franchise in Agra with investment beginning at ₹15 lakh. Explore Buyzaar Mart's Mini Mart format, costs, and application process.",
    url: "https://www.thebuyzaarmart.com/agra/mart-franchise-starting-from-15-lakh-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Starting From ₹15 Lakh in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Starting From ₹15 Lakh in Agra | Buyzaar Mart",
    description:
      "Start a branded mart franchise in Agra with investment beginning at ₹15 lakh. Explore Buyzaar Mart's Mini Mart format, costs, and application process.",
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