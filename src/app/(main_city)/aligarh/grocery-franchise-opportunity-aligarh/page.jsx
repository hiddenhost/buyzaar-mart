import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity in Aligarh | The Buyzaar Mart",
  description:
    "Explore a grocery franchise opportunity in Aligarh with The Buyzaar Mart. Mini Mart from 600 sq ft, 18–20% gross margin, managed supply chain and full support.",
  keywords: [
    "grocery franchise opportunity Aligarh",
    "grocery franchise in Aligarh",
    "grocery store franchise Aligarh",
    "grocery franchise Uttar Pradesh",
    "grocery franchise under 20 lakh",
    "low investment grocery franchise",
    "Buyzaar Mart grocery franchise",
    "FMCG franchise Aligarh",
    "kirana franchise Aligarh",
    "supermarket franchise in Aligarh",
    "grocery mart franchise Aligarh",
    "daily need store franchise",
    "grocery franchise with support",
    "grocery business in Aligarh",
    "FOCM grocery franchise",
    "FOCO grocery franchise",
    "franchise owned company managed grocery",
    "grocery franchise cost India",
    "how to open grocery franchise Aligarh",
    "neighbourhood grocery franchise",
    "grocery retail franchise India",
    "Mini Mart grocery franchise",
    "grocery franchise 15 lakh",
    "best grocery franchise Aligarh",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-opportunity-aligarh",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity in Aligarh with The Buyzaar Mart. Mini Mart from 600 sq ft, 18–20% gross margin, managed supply chain and full support.",
    url: "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-opportunity-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity in Aligarh with The Buyzaar Mart. Mini Mart from 600 sq ft, 18–20% gross margin, managed supply chain and full support.",
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