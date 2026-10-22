import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Mart Franchise in Bulandshahr | The Buyzaar Mart",
  description:
    "Looking for the best mart franchise in Bulandshahr? Open a Buyzaar Mart with total investment from ₹15 Lakh, POS billing, training and full launch support.",
  keywords: [
    "best mart franchise Bulandshahr",
    "best mart franchise in Bulandshahr",
    "mart franchise Bulandshahr",
    "mart franchise opportunity Bulandshahr",
    "Buyzaar Mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "super mart franchise Bulandshahr",
    "hyper mart franchise Bulandshahr",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
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
    "franchise business Bulandshahr",
    "mart franchise in Khurja Sikandrabad Siyana",
    "daily need mart franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/best-mart-franchise-in-bulandshahr",
  },
  openGraph: {
    title: "Best Mart Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Looking for the best mart franchise in Bulandshahr? Open a Buyzaar Mart with total investment from ₹15 Lakh, POS billing, training and full launch support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/best-mart-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mart Franchise in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mart Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Looking for the best mart franchise in Bulandshahr? Open a Buyzaar Mart with total investment from ₹15 Lakh, POS billing, training and full launch support.",
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