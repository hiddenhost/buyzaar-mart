import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Franchise Investment in Rampur | The Buyzaar Mart",
  description:
    "Know the total grocery franchise investment in Rampur with The Buyzaar Mart. Explore categories, inventory support, FOCM model, margins and how to apply today.",
  keywords: [
    "grocery franchise investment rampur",
    "grocery franchise rampur",
    "grocery franchise investment",
    "grocery store franchise rampur",
    "supermarket franchise rampur",
    "mart franchise rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart",
    "FOCM franchise rampur",
    "mini mart franchise rampur",
    "grocery franchise starting 15 lakh",
    "grocery franchise under 20 lakh",
    "low investment grocery franchise",
    "grocery franchise uttar pradesh",
    "organised grocery retail franchise",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "grocery franchise with full support",
    "grocery franchise with training",
    "how to invest in grocery franchise",
    "franchise business opportunity rampur",
    "grocery franchise india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/grocery-franchise-investment-rampur",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Rampur | The Buyzaar Mart",
    description:
      "Know the total grocery franchise investment in Rampur with The Buyzaar Mart. Explore categories, inventory support, FOCM model, margins and how to apply today.",
    url: "https://www.thebuyzaarmart.com/rampur/grocery-franchise-investment-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Rampur | The Buyzaar Mart",
    description:
      "Know the total grocery franchise investment in Rampur with The Buyzaar Mart. Explore categories, inventory support, FOCM model, margins and how to apply today.",
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