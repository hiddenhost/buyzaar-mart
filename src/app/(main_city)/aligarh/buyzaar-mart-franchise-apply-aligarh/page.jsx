import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Aligarh | Apply for Grocery Franchise – Start from ₹15 Lakh",
  description:
    "Apply for The Buyzaar Mart franchise in Aligarh. FOCM/FOCO models, Mini/Super/Hyper Mart formats, full training & support. Start your grocery store from ₹15 Lakh today.",
  keywords: [
    "Buyzaar Mart franchise Aligarh",
    "grocery franchise Aligarh",
    "supermarket franchise Aligarh",
    "apply franchise Aligarh",
    "franchise business Aligarh",
    "retail franchise Uttar Pradesh",
    "best franchise under 20 lakh Aligarh",
    "FOCM franchise model",
    "FOCO franchise model",
    "Mini Mart franchise",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "grocery store investment Aligarh",
    "franchise opportunity Aligarh",
    "low investment franchise UP",
    "franchise apply online Aligarh",
    "supermarket business Aligarh",
    "franchise near AMU Aligarh",
    "Dodhpur franchise store",
    "Ramghat Road grocery store",
    "Civil Lines Aligarh business",
    "small business Aligarh",
    "retail business opportunity UP",
    "franchisee inquiry Aligarh",
    "buyzaar mart apply now",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-franchise-apply-aligarh",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Aligarh | Apply for Grocery Franchise – Start from ₹15 Lakh",
    description:
      "Apply for The Buyzaar Mart franchise in Aligarh. FOCM/FOCO models, Mini/Super/Hyper Mart formats, full training & support. Start your grocery store from ₹15 Lakh today.",
    url: "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-franchise-apply-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Aligarh | Apply for Grocery Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Aligarh | Apply for Grocery Franchise – Start from ₹15 Lakh",
    description:
      "Apply for The Buyzaar Mart franchise in Aligarh. FOCM/FOCO models, Mini/Super/Hyper Mart formats, full training & support. Start your grocery store from ₹15 Lakh today.",
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