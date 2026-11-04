import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Franchise Investment Opportunity in Rampur | Buyzaar Mart",
  description:
    "Explore the grocery franchise investment opportunity in Rampur with The Buyzaar Mart. See who can apply, total investment, FOCM and FOCO models, margins and support.",
  keywords: [
    "grocery franchise investment opportunity rampur",
    "grocery franchise opportunity rampur",
    "grocery franchise investment rampur",
    "grocery franchise rampur",
    "supermarket franchise rampur",
    "mart franchise rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "mini mart franchise rampur",
    "grocery franchise starting 15 lakh",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "retail franchise opportunity uttar pradesh",
    "organised retail franchise",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "grocery franchise with full support",
    "grocery franchise for first time business owners",
    "franchise business opportunity rampur",
    "grocery franchise india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/grocery-franchise-investment-opportunity-rampur",
  },
  openGraph: {
    title: "Grocery Franchise Investment Opportunity in Rampur | Buyzaar Mart",
    description:
      "Explore the grocery franchise investment opportunity in Rampur with The Buyzaar Mart. See who can apply, total investment, FOCM and FOCO models, margins and support.",
    url: "https://www.thebuyzaarmart.com/rampur/grocery-franchise-investment-opportunity-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment Opportunity in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment Opportunity in Rampur | Buyzaar Mart",
    description:
      "Explore the grocery franchise investment opportunity in Rampur with The Buyzaar Mart. See who can apply, total investment, FOCM and FOCO models, margins and support.",
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