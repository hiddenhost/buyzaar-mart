import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise in Bulandshahr | The Buyzaar Mart",
  description:
    "Looking for the best grocery franchise in Bulandshahr? Open a Buyzaar Mart with total investment from ₹15 Lakh, POS billing, training and full launch support.",
  keywords: [
    "best grocery franchise Bulandshahr",
    "best grocery franchise in Bulandshahr",
    "grocery franchise Bulandshahr",
    "grocery franchise opportunity Bulandshahr",
    "grocery store franchise Bulandshahr",
    "Buyzaar Mart grocery franchise",
    "supermarket franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "top grocery franchise India",
    "grocery franchise Uttar Pradesh",
    "grocery franchise UP",
    "supermarket franchise NCR",
    "FOCM grocery franchise",
    "grocery franchise with training and support",
    "branded grocery franchise India",
    "organised grocery retail Bulandshahr",
    "franchise business Bulandshahr",
    "grocery franchise in Khurja Sikandrabad Siyana",
    "kirana to supermarket franchise",
    "FMCG store franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/best-grocery-franchise-bulandshahr",
  },
  openGraph: {
    title: "Best Grocery Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Bulandshahr? Open a Buyzaar Mart with total investment from ₹15 Lakh, POS billing, training and full launch support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/best-grocery-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Bulandshahr? Open a Buyzaar Mart with total investment from ₹15 Lakh, POS billing, training and full launch support.",
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