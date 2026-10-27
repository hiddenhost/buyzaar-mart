import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Grocery Franchise in Rampur | Buyzaar Mart",
  description:
    "Want to open a grocery franchise in Rampur? See the steps, documents, store formats, ₹15-20 lakh Mini Mart investment and launch support from Buyzaar Mart.",
  keywords: [
    "how to open grocery franchise in Rampur",
    "open grocery franchise Rampur",
    "grocery franchise in Rampur",
    "Buyzaar Mart franchise Rampur",
    "supermarket franchise in Rampur",
    "retail franchise in Rampur",
    "open supermarket in Rampur",
    "start grocery store in Rampur",
    "franchise business in Rampur",
    "franchise opportunities in Rampur",
    "mini mart franchise Rampur",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "grocery store franchise Uttar Pradesh",
    "supermarket franchise Uttar Pradesh",
    "FOCM franchise India",
    "The Buyzaar Mart",
    "supermarket franchise cost India",
    "grocery franchise with training and support",
    "store setup franchise India",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-open-grocery-franchise-in-rampur",
  },
  openGraph: {
    title: "How to Open Grocery Franchise in Rampur | Buyzaar Mart",
    description:
      "Want to open a grocery franchise in Rampur? See the steps, documents, store formats, ₹15-20 lakh Mini Mart investment and launch support from Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-open-grocery-franchise-in-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Grocery Franchise in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Grocery Franchise in Rampur | Buyzaar Mart",
    description:
      "Want to open a grocery franchise in Rampur? See the steps, documents, store formats, ₹15-20 lakh Mini Mart investment and launch support from Buyzaar Mart.",
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