import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Take a Grocery Mart Franchise in Mathura | Buyzaar",
  description:
    "Planning to take a grocery mart franchise in Mathura? Compare formats, evaluate the model, and start from ₹15 lakh with The Buyzaar Mart. Enquire today.",
  keywords: [
    "grocery mart franchise in Mathura",
    "how to take franchise of grocery mart in Mathura",
    "Buyzaar Mart franchise Mathura",
    "grocery franchise Mathura",
    "supermarket franchise Mathura",
    "mart franchise in Mathura",
    "retail franchise Mathura",
    "low investment franchise Mathura",
    "FMCG franchise Mathura",
    "kirana store franchise Mathura",
    "Mini Mart franchise Mathura",
    "Super Mart franchise Mathura",
    "Hyper Mart franchise Mathura",
    "grocery franchise Uttar Pradesh",
    "franchise opportunity in Mathura",
    "grocery mart franchise cost",
    "grocery franchise from 15 lakh",
    "franchise business in Mathura",
    "best grocery franchise in UP",
    "grocery store franchise enquiry",
    "Mathura franchise investment",
    "Buyzaar Mart franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-take-franchise-of-grocery-mart-in-mathura",
  },
  openGraph: {
    title: "How to Take a Grocery Mart Franchise in Mathura | Buyzaar",
    description:
      "Planning to take a grocery mart franchise in Mathura? Compare formats, evaluate the model, and start from ₹15 lakh with The Buyzaar Mart. Enquire today.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-take-franchise-of-grocery-mart-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Take a Grocery Mart Franchise in Mathura | Buyzaar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Take a Grocery Mart Franchise in Mathura | Buyzaar",
    description:
      "Planning to take a grocery mart franchise in Mathura? Compare formats, evaluate the model, and start from ₹15 lakh with The Buyzaar Mart. Enquire today.",
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