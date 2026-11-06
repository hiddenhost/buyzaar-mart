import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Organised Mart Franchise in Rampur | The Buyzaar Mart",
  description:
    "Organised mart franchise in Rampur: open a branded Buyzaar Mart with POS billing, supply support and training. ₹15–20 lakh total investment for Mini Mart. Apply now.",
  keywords: [
    "organised mart franchise Rampur",
    "organized mart franchise Rampur",
    "organised retail franchise Rampur",
    "branded mart franchise Rampur",
    "Buyzaar Mart franchise Rampur",
    "supermarket franchise Rampur",
    "grocery franchise Rampur",
    "retail franchise Rampur",
    "mini mart franchise Rampur",
    "super mart franchise Rampur",
    "hyper mart franchise Rampur",
    "FOCM franchise Rampur",
    "FOCO franchise Rampur",
    "mart franchise Rampur",
    "organised grocery store franchise",
    "grocery franchise 15 lakh",
    "grocery franchise under 20 lakh",
    "low investment supermarket franchise",
    "supermarket franchise Uttar Pradesh",
    "organised retail business Uttar Pradesh",
    "neighbourhood supermarket franchise",
    "franchise business Rampur",
    "supermarket franchise India",
    "mart franchise with training and support",
    "POS enabled grocery franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/organised-mart-franchise-rampur",
  },
  openGraph: {
    title: "Organised Mart Franchise in Rampur | The Buyzaar Mart",
    description:
      "Organised mart franchise in Rampur: open a branded Buyzaar Mart with POS billing, supply support and training. ₹15–20 lakh total investment for Mini Mart. Apply now.",
    url: "https://www.thebuyzaarmart.com/rampur/organised-mart-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise in Rampur | The Buyzaar Mart",
    description:
      "Organised mart franchise in Rampur: open a branded Buyzaar Mart with POS billing, supply support and training. ₹15–20 lakh total investment for Mini Mart. Apply now.",
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