import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Business Opportunity Mathura | Buyzaar",
  description:
    "Start a grocery franchise business in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, supply chain and full support. Apply.",
  keywords: [
    "grocery franchise business opportunity Mathura",
    "grocery franchise Mathura",
    "grocery store franchise Mathura",
    "supermarket franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "The Buyzaar Mart",
    "low investment grocery franchise Mathura",
    "grocery franchise under 20 lakh",
    "grocery franchise 15 lakh",
    "mini mart franchise Mathura",
    "super mart franchise Mathura",
    "hyper mart franchise Mathura",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "grocery business opportunity Uttar Pradesh",
    "retail franchise Mathura",
    "FMCG store franchise Mathura",
    "neighbourhood grocery franchise",
    "branded grocery franchise Mathura",
    "profitable grocery franchise Mathura",
    "grocery franchise with full support",
    "grocery franchise with training and support",
    "how to start a grocery franchise in Mathura",
    "affordable supermarket franchise India",
    "managed grocery franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/grocery-franchise-business-opportunity-mathura",
  },
  openGraph: {
    title: "Grocery Franchise Business Opportunity Mathura | Buyzaar",
    description:
      "Start a grocery franchise business in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, supply chain and full support. Apply.",
    url: "https://www.thebuyzaarmart.com/mathura/grocery-franchise-business-opportunity-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Business Opportunity Mathura | Buyzaar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Business Opportunity Mathura | Buyzaar",
    description:
      "Start a grocery franchise business in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, supply chain and full support. Apply.",
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