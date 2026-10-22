import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
  description:
    "Start a grocery franchise in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and full support.",
  keywords: [
    "grocery franchise opportunity Bulandshahr",
    "grocery franchise Bulandshahr",
    "grocery store franchise Bulandshahr",
    "Buyzaar Mart grocery franchise",
    "supermarket franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "grocery franchise Uttar Pradesh",
    "grocery franchise UP",
    "supermarket franchise NCR",
    "FOCM grocery franchise",
    "franchise owned company managed",
    "grocery franchise with training and support",
    "branded grocery franchise India",
    "neighbourhood grocery franchise",
    "organised grocery retail Bulandshahr",
    "grocery business opportunity Bulandshahr",
    "franchise business Bulandshahr",
    "grocery franchise in Khurja Sikandrabad Siyana",
    "kirana to supermarket franchise",
    "FMCG store franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/grocery-franchise-opportunity-bulandshahr",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and full support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/grocery-franchise-opportunity-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and full support.",
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