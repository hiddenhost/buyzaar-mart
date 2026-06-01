import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Low Investment Franchise in Bareilly – The Buyzaar Mart | Mini Mart from ₹15 Lakh",
  description:
    "Start a low investment franchise in Bareilly with The Buyzaar Mart. Mini Mart from ₹15 Lakh, FOCM model, 18–20% gross margins, 50+ FMCG brands & complete support. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/low-investment-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "Low Investment Franchise in Bareilly – The Buyzaar Mart | Mini Mart from ₹15 Lakh",
    description:
      "Start a low investment franchise in Bareilly with The Buyzaar Mart. Mini Mart from ₹15 Lakh, FOCM model, 18–20% gross margins, 50+ FMCG brands & complete support. Apply today!",
    url:
      "https://www.thebuyzaarmart.com/bareilly/low-investment-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Franchise in Bareilly – The Buyzaar Mart | Mini Mart from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Low Investment Franchise in Bareilly – The Buyzaar Mart | Mini Mart from ₹15 Lakh",
    description:
      "Start a low investment franchise in Bareilly with The Buyzaar Mart. Mini Mart from ₹15 Lakh, FOCM model, 18–20% gross margins, 50+ FMCG brands & complete support. Apply today!",
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