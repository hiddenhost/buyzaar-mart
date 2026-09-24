import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Cost in Aligarh | Buyzaar Mart – ₹15 Lakh+",
  description:
    "Mart franchise cost in Aligarh starts from ₹15 lakh. Compare Mini, Super & Hyper Mart investment, margins, support and apply with The Buyzaar Mart today.",
  keywords: [
    "mart franchise cost in aligarh",
    "grocery franchise cost in aligarh",
    "supermarket franchise cost in aligarh",
    "buyzaar mart franchise aligarh",
    "the buyzaar mart franchise cost",
    "mini mart franchise aligarh",
    "super mart franchise aligarh",
    "hyper mart franchise aligarh",
    "retail franchise aligarh",
    "franchise investment in aligarh",
    "grocery store franchise aligarh",
    "supermarket franchise in aligarh",
    "low investment franchise aligarh",
    "FOCM franchise aligarh",
    "FOCO franchise model",
    "franchise business in aligarh",
    "kirana store franchise aligarh",
    "FMCG franchise aligarh",
    "open mart in aligarh",
    "mart franchise investment from 15 lakh",
    "best franchise in aligarh",
    "franchise opportunity aligarh",
    "retail franchise cost india",
    "franchise owned company managed",
    "buyzaar mart franchise fees",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/mart-franchise-cost-aligarh",
  },
  openGraph: {
    title: "Mart Franchise Cost in Aligarh | Buyzaar Mart – ₹15 Lakh+",
    description:
      "Mart franchise cost in Aligarh starts from ₹15 lakh. Compare Mini, Super & Hyper Mart investment, margins, support and apply with The Buyzaar Mart today.",
    url: "https://www.thebuyzaarmart.com/aligarh/mart-franchise-cost-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Cost in Aligarh | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Cost in Aligarh | Buyzaar Mart – ₹15 Lakh+",
    description:
      "Mart franchise cost in Aligarh starts from ₹15 lakh. Compare Mini, Super & Hyper Mart investment, margins, support and apply with The Buyzaar Mart today.",
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