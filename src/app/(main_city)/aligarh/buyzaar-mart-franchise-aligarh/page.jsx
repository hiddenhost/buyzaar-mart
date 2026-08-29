import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Aligarh | Grocery Business Opportunity from ₹15 Lakh",
  description:
    "Explore The Buyzaar Mart franchise in Aligarh — market opportunity, investment models, profit margins, product categories, and why the city is ready for organized retail.",
  keywords: [
    "Buyzaar Mart franchise Aligarh",
    "grocery franchise Aligarh",
    "franchise business opportunity Aligarh",
    "retail market Aligarh",
    "supermarket investment Aligarh",
    "franchise ROI grocery store",
    "organized retail Uttar Pradesh",
    "grocery store profit margin",
    "franchise business case Aligarh",
    "Mini Mart Super Mart Hyper Mart",
    "franchise product categories",
    "FMCG franchise India",
    "franchise investment breakdown",
    "grocery retail opportunity UP",
    "Aligarh business opportunity",
    "franchise under 20 lakh",
    "best grocery franchise Aligarh",
    "retail expansion Aligarh",
    "franchise market analysis",
    "neighbourhood supermarket franchise",
    "buyzaar mart business model",
    "apply franchise Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-franchise-aligarh",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Aligarh | Grocery Business Opportunity from ₹15 Lakh",
    description:
      "Explore The Buyzaar Mart franchise in Aligarh — market opportunity, investment models, profit margins, product categories, and why the city is ready for organized retail.",
    url: "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Aligarh | Grocery Business Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Aligarh | Grocery Business Opportunity from ₹15 Lakh",
    description:
      "Explore The Buyzaar Mart franchise in Aligarh — market opportunity, investment models, profit margins, product categories, and why the city is ready for organized retail.",
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