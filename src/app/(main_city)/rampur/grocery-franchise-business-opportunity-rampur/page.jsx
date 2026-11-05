import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Franchise Business Opportunity Rampur | Buyzaar",
  description:
    "Plan a grocery franchise business in Rampur. See customers, competition, a 90-day launch plan, the ₹15-20 lakh Mini Mart investment, support and how to apply.",
  keywords: [
    "grocery franchise business opportunity Rampur",
    "grocery franchise opportunity Rampur",
    "grocery business opportunity in Rampur",
    "grocery franchise in Rampur",
    "grocery franchise business plan",
    "business opportunity in Rampur",
    "Buyzaar Mart franchise Rampur",
    "Buyzaar Mart franchise",
    "supermarket franchise in Rampur",
    "retail franchise in Rampur",
    "franchise business in Rampur",
    "franchise opportunities in Rampur",
    "mini mart franchise Rampur",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "supermarket franchise Uttar Pradesh",
    "grocery store franchise UP",
    "FOCM franchise India",
    "The Buyzaar Mart",
    "grocery franchise with training and support",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/grocery-franchise-business-opportunity-rampur",
  },
  openGraph: {
    title: "Grocery Franchise Business Opportunity Rampur | Buyzaar",
    description:
      "Plan a grocery franchise business in Rampur. See customers, competition, a 90-day launch plan, the ₹15-20 lakh Mini Mart investment, support and how to apply.",
    url: "https://www.thebuyzaarmart.com/rampur/grocery-franchise-business-opportunity-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Business Opportunity Rampur | Buyzaar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Business Opportunity Rampur | Buyzaar",
    description:
      "Plan a grocery franchise business in Rampur. See customers, competition, a 90-day launch plan, the ₹15-20 lakh Mini Mart investment, support and how to apply.",
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