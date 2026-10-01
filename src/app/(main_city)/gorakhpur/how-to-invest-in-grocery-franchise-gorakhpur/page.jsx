import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Invest in Grocery Franchise Gorakhpur | Buyzaar Mart",
  description:
    "Planning to invest in a grocery franchise in Gorakhpur? Know cost from ₹15 Lakh, margins, risks and the step-by-step process with The Buyzaar Mart.",
  keywords: [
    "how to invest in grocery franchise gorakhpur",
    "grocery franchise investment in gorakhpur",
    "invest in grocery franchise",
    "grocery franchise in gorakhpur",
    "the buyzaar mart",
    "buyzaar mart franchise investment",
    "grocery franchise cost in gorakhpur",
    "grocery franchise under 20 lakh",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "grocery franchise roi india",
    "supermarket franchise in gorakhpur",
    "franchise investment in uttar pradesh",
    "mini mart franchise gorakhpur",
    "FOCM franchise india",
    "franchise business in gorakhpur",
    "best franchise to invest in gorakhpur",
    "grocery franchise profit margin",
    "retail investment in gorakhpur",
    "grocery franchise with full support",
    "neighborhood supermarket franchise india",
    "supermarket franchise cost india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-invest-in-grocery-franchise-in-gorakhpur",
  },
  openGraph: {
    title: "How to Invest in Grocery Franchise Gorakhpur | Buyzaar Mart",
    description:
      "Planning to invest in a grocery franchise in Gorakhpur? Know cost from ₹15 Lakh, margins, risks and the step-by-step process with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-invest-in-grocery-franchise-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Invest in Grocery Franchise Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Invest in Grocery Franchise Gorakhpur | Buyzaar Mart",
    description:
      "Planning to invest in a grocery franchise in Gorakhpur? Know cost from ₹15 Lakh, margins, risks and the step-by-step process with The Buyzaar Mart.",
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