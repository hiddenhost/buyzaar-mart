import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Profitable Franchise in Bulandshahr | The Buyzaar Mart",
  description:
    "Looking for a profitable franchise in Bulandshahr? Start a Buyzaar Mart with total investment from ₹15 Lakh, 18–20% stated margin, POS billing and full support.",
  keywords: [
    "profitable franchise Bulandshahr",
    "profitable franchise in Bulandshahr",
    "profitable business Bulandshahr",
    "franchise business Bulandshahr",
    "franchise opportunity Bulandshahr",
    "best franchise Bulandshahr",
    "Buyzaar Mart franchise Bulandshahr",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "low investment franchise Bulandshahr",
    "franchise under 20 lakh",
    "high margin franchise India",
    "18 to 20 percent margin franchise",
    "franchise Uttar Pradesh",
    "supermarket franchise UP",
    "supermarket franchise NCR",
    "FOCM franchise Bulandshahr",
    "franchise with training and support",
    "organised retail franchise Bulandshahr",
    "franchise in Khurja Sikandrabad Siyana",
    "daily need retail franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/profitable-franchise-bulandshahr",
  },
  openGraph: {
    title: "Profitable Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Looking for a profitable franchise in Bulandshahr? Start a Buyzaar Mart with total investment from ₹15 Lakh, 18–20% stated margin, POS billing and full support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/profitable-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Profitable Franchise in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profitable Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Looking for a profitable franchise in Bulandshahr? Start a Buyzaar Mart with total investment from ₹15 Lakh, 18–20% stated margin, POS billing and full support.",
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