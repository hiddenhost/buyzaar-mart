import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity in Aligarh | The Buyzaar Mart",
  description:
    "Start a grocery franchise business in Aligarh with The Buyzaar Mart. FOCM model, investment from ₹15 lakh, setup, supply chain and POS support. Apply now.",
  keywords: [
    "grocery franchise business opportunity aligarh",
    "grocery franchise in aligarh",
    "supermarket franchise aligarh",
    "retail franchise aligarh",
    "FMCG store franchise aligarh",
    "mini mart franchise aligarh",
    "super mart franchise aligarh",
    "hyper mart franchise aligarh",
    "low investment franchise aligarh",
    "grocery franchise 15 lakh",
    "franchise business in aligarh",
    "the buyzaar mart franchise",
    "buyzaar mart aligarh",
    "FOCM franchise india",
    "franchise owned company managed",
    "daily needs store franchise",
    "kirana franchise aligarh",
    "supermarket franchise uttar pradesh",
    "grocery franchise uttar pradesh",
    "grocery store franchise india",
    "best franchise business in aligarh",
    "supermarket franchise cost india",
    "neighbourhood supermarket franchise",
    "grocery franchise with full support",
    "retail franchise opportunity UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-business-opportunity-aligarh",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Start a grocery franchise business in Aligarh with The Buyzaar Mart. FOCM model, investment from ₹15 lakh, setup, supply chain and POS support. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-business-opportunity-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Business Opportunity in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Start a grocery franchise business in Aligarh with The Buyzaar Mart. FOCM model, investment from ₹15 lakh, setup, supply chain and POS support. Apply now.",
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