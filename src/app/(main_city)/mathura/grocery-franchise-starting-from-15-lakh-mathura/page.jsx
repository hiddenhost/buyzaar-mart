import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise from ₹15 Lakh in Mathura | Buyzaar Mart",
  description:
    "Start a grocery franchise in Mathura from ₹15 lakh with The Buyzaar Mart. See what your investment covers, extra costs to plan and how to apply. Enquire today.",
  keywords: [
    "grocery franchise starting from 15 lakh Mathura",
    "grocery franchise in Mathura",
    "15 lakh franchise Mathura",
    "low investment grocery franchise",
    "Buyzaar Mart franchise Mathura",
    "supermarket franchise in Mathura",
    "retail franchise Mathura",
    "Mini Mart franchise Mathura",
    "Super Mart franchise Mathura",
    "Hyper Mart franchise Mathura",
    "FMCG franchise Mathura",
    "kirana store franchise Mathura",
    "grocery franchise cost Mathura",
    "grocery franchise investment",
    "franchise business in Mathura",
    "best grocery franchise in UP",
    "grocery franchise Uttar Pradesh",
    "small investment franchise India",
    "start grocery store in Mathura",
    "Buyzaar Mart franchise cost",
    "grocery franchise enquiry",
    "Mathura franchise opportunity",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/grocery-franchise-starting-from-15-lakh-mathura",
  },
  openGraph: {
    title: "Grocery Franchise from ₹15 Lakh in Mathura | Buyzaar Mart",
    description:
      "Start a grocery franchise in Mathura from ₹15 lakh with The Buyzaar Mart. See what your investment covers, extra costs to plan and how to apply. Enquire today.",
    url: "https://www.thebuyzaarmart.com/mathura/grocery-franchise-starting-from-15-lakh-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise from ₹15 Lakh in Mathura | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise from ₹15 Lakh in Mathura | Buyzaar Mart",
    description:
      "Start a grocery franchise in Mathura from ₹15 lakh with The Buyzaar Mart. See what your investment covers, extra costs to plan and how to apply. Enquire today.",
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