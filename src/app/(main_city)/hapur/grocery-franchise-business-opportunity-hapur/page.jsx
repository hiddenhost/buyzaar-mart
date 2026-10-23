import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Business Opportunity Hapur | Buyzaar Mart",
  description:
    "Start a grocery franchise business in Hapur with The Buyzaar Mart. Total investment from ₹15 lakh, 18–20% gross margin, FOCM model, full setup and support. Apply now.",
  keywords: [
    "grocery franchise business opportunity hapur",
    "grocery franchise in hapur",
    "supermarket franchise hapur",
    "mart franchise hapur",
    "retail franchise hapur",
    "franchise business in hapur",
    "buyzaar mart franchise hapur",
    "the buyzaar mart",
    "FOCM franchise hapur",
    "FOCO franchise hapur",
    "grocery franchise under 20 lakh",
    "low investment grocery franchise",
    "grocery store franchise uttar pradesh",
    "supermarket franchise western UP",
    "grocery franchise NCR",
    "best grocery franchise in india",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "mini mart franchise hapur",
    "super mart franchise hapur",
    "hyper mart franchise hapur",
    "profitable franchise business hapur",
    "how to start grocery franchise in hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/grocery-franchise-business-opportunity-hapur",
  },
  openGraph: {
    title: "Grocery Franchise Business Opportunity Hapur | Buyzaar Mart",
    description:
      "Start a grocery franchise business in Hapur with The Buyzaar Mart. Total investment from ₹15 lakh, 18–20% gross margin, FOCM model, full setup and support. Apply now.",
    url: "https://www.thebuyzaarmart.com/hapur/grocery-franchise-business-opportunity-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Business Opportunity Hapur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Business Opportunity Hapur | Buyzaar Mart",
    description:
      "Start a grocery franchise business in Hapur with The Buyzaar Mart. Total investment from ₹15 lakh, 18–20% gross margin, FOCM model, full setup and support. Apply now.",
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