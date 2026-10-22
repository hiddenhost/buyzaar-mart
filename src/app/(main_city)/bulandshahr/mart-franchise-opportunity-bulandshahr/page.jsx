import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
  description:
    "Explore a mart franchise opportunity in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and support.",
  keywords: [
    "mart franchise opportunity Bulandshahr",
    "mart franchise Bulandshahr",
    "mart franchise business Bulandshahr",
    "Buyzaar Mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "super mart franchise Bulandshahr",
    "hyper mart franchise Bulandshahr",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "franchise opportunity Bulandshahr",
    "franchise business Bulandshahr",
    "neighbourhood mart franchise",
    "low investment mart franchise",
    "mart franchise under 20 lakh",
    "mart franchise Uttar Pradesh",
    "mart franchise UP",
    "supermarket franchise NCR",
    "FOCM mart franchise",
    "franchise owned company managed",
    "mart franchise with training and support",
    "organised retail franchise Bulandshahr",
    "mart franchise in Khurja Sikandrabad Siyana",
    "daily need mart franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/mart-franchise-opportunity-bulandshahr",
  },
  openGraph: {
    title: "Mart Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/mart-franchise-opportunity-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, 18–20% stated margin, POS billing, training and support.",
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