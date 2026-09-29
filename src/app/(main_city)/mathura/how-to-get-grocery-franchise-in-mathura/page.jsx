import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Get a Grocery Franchise in Mathura | Buyzaar Mart",
  description:
    "Learn how to get a grocery franchise in Mathura with The Buyzaar Mart. Eligibility, approval process, documents and investment from ₹15 lakh. Apply today.",
  keywords: [
    "grocery franchise in Mathura",
    "how to get grocery franchise in Mathura",
    "Buyzaar Mart franchise Mathura",
    "supermarket franchise in Mathura",
    "retail franchise Mathura",
    "grocery store franchise Mathura",
    "franchise business in Mathura",
    "low investment franchise Mathura",
    "FMCG franchise Mathura",
    "kirana store franchise Mathura",
    "Mini Mart franchise Mathura",
    "Super Mart franchise Mathura",
    "Hyper Mart franchise Mathura",
    "grocery franchise Uttar Pradesh",
    "best grocery franchise in UP",
    "franchise opportunity in Mathura",
    "grocery franchise from 15 lakh",
    "start grocery store in Mathura",
    "grocery franchise apply online",
    "franchise eligibility and documents",
    "GST and FSSAI for grocery store",
    "Buyzaar Mart franchise enquiry",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-get-grocery-franchise-in-mathura",
  },
  openGraph: {
    title: "How to Get a Grocery Franchise in Mathura | Buyzaar Mart",
    description:
      "Learn how to get a grocery franchise in Mathura with The Buyzaar Mart. Eligibility, approval process, documents and investment from ₹15 lakh. Apply today.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-get-grocery-franchise-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Get a Grocery Franchise in Mathura | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get a Grocery Franchise in Mathura | Buyzaar Mart",
    description:
      "Learn how to get a grocery franchise in Mathura with The Buyzaar Mart. Eligibility, approval process, documents and investment from ₹15 lakh. Apply today.",
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