import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FOCM Model Franchise in Rampur | The Buyzaar Mart Supermarket",
  description:
    "FOCM model franchise in Rampur: own your supermarket while Buyzaar Mart manages systems, POS and training. ₹15–20 lakh total investment for Mini Mart. Apply now.",
  keywords: [
    "FOCM model franchise Rampur",
    "FOCM franchise Rampur",
    "FOCM franchise opportunity Rampur",
    "Buyzaar Mart FOCM model",
    "franchise owned company managed",
    "company managed supermarket franchise",
    "FOCM supermarket franchise Uttar Pradesh",
    "FOCM mart franchise",
    "FOCM vs FOCO",
    "Buyzaar Mart franchise Rampur",
    "supermarket franchise Rampur",
    "grocery franchise Rampur",
    "retail franchise Rampur",
    "mini mart franchise Rampur",
    "super mart franchise Rampur",
    "hyper mart franchise Rampur",
    "grocery franchise 15 lakh",
    "low investment supermarket franchise",
    "5 year franchise agreement",
    "mart franchise Rampur",
    "organised retail franchise Rampur",
    "franchise business Rampur",
    "supermarket franchise India",
    "managed grocery franchise",
    "franchise with training and support",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/focm-model-franchise-rampur",
  },
  openGraph: {
    title: "FOCM Model Franchise in Rampur | The Buyzaar Mart Supermarket",
    description:
      "FOCM model franchise in Rampur: own your supermarket while Buyzaar Mart manages systems, POS and training. ₹15–20 lakh total investment for Mini Mart. Apply now.",
    url: "https://www.thebuyzaarmart.com/rampur/focm-model-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Franchise in Rampur | The Buyzaar Mart Supermarket",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Franchise in Rampur | The Buyzaar Mart Supermarket",
    description:
      "FOCM model franchise in Rampur: own your supermarket while Buyzaar Mart manages systems, POS and training. ₹15–20 lakh total investment for Mini Mart. Apply now.",
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