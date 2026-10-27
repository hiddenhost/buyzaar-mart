import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Invest in Grocery Franchise in Rampur | Buyzaar Mart",
  description:
    "Planning to invest in a grocery franchise in Rampur? Learn the models, formats, ₹15-20 lakh Mini Mart investment, margins, risks and the steps to apply.",
  keywords: [
    "how to invest in grocery franchise Rampur",
    "grocery franchise in Rampur",
    "invest in grocery franchise",
    "Buyzaar Mart franchise Rampur",
    "supermarket franchise in Rampur",
    "retail franchise in Rampur",
    "franchise investment in Rampur",
    "grocery store franchise Uttar Pradesh",
    "supermarket franchise Uttar Pradesh",
    "mini mart franchise Rampur",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "franchise business in Rampur",
    "franchise opportunities in Rampur",
    "FOCM franchise India",
    "FOCO franchise India",
    "The Buyzaar Mart",
    "supermarket franchise cost India",
    "grocery franchise with training and support",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
    "best franchise to invest in Rampur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-invest-in-grocery-franchise-rampur",
  },
  openGraph: {
    title: "How to Invest in Grocery Franchise in Rampur | Buyzaar Mart",
    description:
      "Planning to invest in a grocery franchise in Rampur? Learn the models, formats, ₹15-20 lakh Mini Mart investment, margins, risks and the steps to apply.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-invest-in-grocery-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Invest in Grocery Franchise in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Invest in Grocery Franchise in Rampur | Buyzaar Mart",
    description:
      "Planning to invest in a grocery franchise in Rampur? Learn the models, formats, ₹15-20 lakh Mini Mart investment, margins, risks and the steps to apply.",
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