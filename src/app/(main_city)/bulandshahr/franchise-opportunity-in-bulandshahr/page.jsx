import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
  description:
    "Explore a franchise opportunity in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and full support.",
  keywords: [
    "franchise opportunity in Bulandshahr",
    "franchise opportunity Bulandshahr",
    "franchise business Bulandshahr",
    "franchise in Bulandshahr",
    "Buyzaar Mart franchise Bulandshahr",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "low investment franchise Bulandshahr",
    "franchise under 20 lakh",
    "business opportunity Bulandshahr",
    "franchise for first-time entrepreneurs",
    "franchise Uttar Pradesh",
    "supermarket franchise UP",
    "supermarket franchise NCR",
    "FOCM franchise Bulandshahr",
    "franchise owned company managed",
    "franchise with training and support",
    "organised retail franchise Bulandshahr",
    "franchise in Khurja Sikandrabad Siyana",
    "daily need retail franchise",
    "franchise business ideas Bulandshahr",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/franchise-opportunity-in-bulandshahr",
  },
  openGraph: {
    title: "Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore a franchise opportunity in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and full support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/franchise-opportunity-in-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore a franchise opportunity in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and full support.",
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