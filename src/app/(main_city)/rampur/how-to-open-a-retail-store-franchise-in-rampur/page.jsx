import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "How to Open a Retail Store Franchise in Rampur | Buyzaar Mart",
  description:
    "Learn how to open a retail store franchise in Rampur with The Buyzaar Mart. Total investment from ₹15 Lakh, POS billing, training and full launch support.",
  keywords: [
    "how to open a retail store franchise in Rampur",
    "retail store franchise Rampur",
    "retail franchise Rampur",
    "open retail store in Rampur",
    "retail franchise Uttar Pradesh",
    "retail franchise near Moradabad",
    "Buyzaar Mart franchise Rampur",
    "mini mart franchise Rampur",
    "supermarket franchise Rampur",
    "grocery franchise Rampur",
    "mart franchise Rampur",
    "franchise opportunity Rampur",
    "franchise business Rampur",
    "low investment retail franchise",
    "retail franchise under 20 lakh",
    "daily need retail franchise",
    "how to evaluate a retail franchise",
    "FOCM retail franchise",
    "franchise owned company managed",
    "POS enabled retail store",
    "retail franchise documents required",
    "retail franchise application process",
    "retail business basics",
    "retail franchise in Bilaspur Milak Suar",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-open-a-retail-store-franchise-in-rampur",
  },
  openGraph: {
    title: "How to Open a Retail Store Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to open a retail store franchise in Rampur with The Buyzaar Mart. Total investment from ₹15 Lakh, POS billing, training and full launch support.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-open-a-retail-store-franchise-in-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Store Franchise in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Retail Store Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to open a retail store franchise in Rampur with The Buyzaar Mart. Total investment from ₹15 Lakh, POS billing, training and full launch support.",
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