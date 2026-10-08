import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Grocery Franchise in Mathura | The Buyzaar Mart",
  description:
    "Start a branded grocery franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with brand support, POS and training. Apply now.",
  keywords: [
    "branded grocery franchise Mathura",
    "branded grocery store franchise Mathura",
    "grocery franchise Mathura",
    "supermarket franchise Mathura",
    "mart franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "The Buyzaar Mart",
    "low investment grocery franchise Mathura",
    "grocery franchise under 20 lakh",
    "grocery franchise 15 lakh",
    "mini mart franchise Mathura",
    "super mart franchise Mathura",
    "hyper mart franchise Mathura",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "retail franchise Mathura",
    "trusted brand grocery franchise",
    "grocery franchise with brand support",
    "grocery franchise with full support",
    "grocery franchise with training",
    "FMCG store franchise Mathura",
    "organised retail franchise Mathura",
    "profitable grocery franchise Mathura",
    "branded retail franchise Uttar Pradesh",
    "how to start a branded grocery franchise in Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/branded-grocery-franchise-mathura",
  },
  openGraph: {
    title: "Branded Grocery Franchise in Mathura | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with brand support, POS and training. Apply now.",
    url: "https://www.thebuyzaarmart.com/mathura/branded-grocery-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Grocery Franchise in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Grocery Franchise in Mathura | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with brand support, POS and training. Apply now.",
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