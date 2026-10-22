import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Grocery Franchise in Bulandshahr | The Buyzaar Mart",
  description:
    "Start a branded grocery franchise in Bulandshahr with The Buyzaar Mart. FOCM model, 18-20% gross margin, POS, training and buyback support. Apply today.",
  keywords: [
    "branded grocery franchise bulandshahr",
    "grocery franchise in bulandshahr",
    "supermarket franchise bulandshahr",
    "mart franchise bulandshahr",
    "the buyzaar mart",
    "buyzaar mart franchise",
    "buyzaar mart bulandshahr",
    "grocery store franchise uttar pradesh",
    "FOCM franchise bulandshahr",
    "franchise owned company managed",
    "retail franchise bulandshahr",
    "mini mart franchise bulandshahr",
    "super mart franchise bulandshahr",
    "hyper mart franchise bulandshahr",
    "low investment grocery franchise",
    "franchise business in bulandshahr",
    "FMCG store franchise UP",
    "neighbourhood supermarket franchise",
    "grocery franchise with full support",
    "best grocery franchise near me",
    "supermarket franchise in western UP",
    "grocery franchise opportunity",
    "how to open grocery franchise bulandshahr",
    "grocery business in bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/branded-grocery-franchise-bulandshahr",
  },
  openGraph: {
    title: "Branded Grocery Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Bulandshahr with The Buyzaar Mart. FOCM model, 18-20% gross margin, POS, training and buyback support. Apply today.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/branded-grocery-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Grocery Franchise in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Grocery Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Bulandshahr with The Buyzaar Mart. FOCM model, 18-20% gross margin, POS, training and buyback support. Apply today.",
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