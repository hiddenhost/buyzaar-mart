import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Mart Franchise Investment in Rampur | The Buyzaar Mart",
  description:
    "Planning a mart franchise investment in Rampur? See the total investment, budget planning, store formats, staffing, FOCM model and support from The Buyzaar Mart.",
  keywords: [
    "mart franchise investment rampur",
    "mart franchise rampur",
    "mart franchise investment",
    "mart franchise cost",
    "supermarket franchise rampur",
    "grocery franchise rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart",
    "mini mart franchise rampur",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "mart franchise starting 15 lakh",
    "low investment mart franchise",
    "retail franchise rampur",
    "grocery franchise uttar pradesh",
    "organised retail franchise",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "mart franchise with training and support",
    "mart franchise budget planning",
    "franchise business opportunity rampur",
    "supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/mart-franchise-investment-rampur",
  },
  openGraph: {
    title: "Mart Franchise Investment in Rampur | The Buyzaar Mart",
    description:
      "Planning a mart franchise investment in Rampur? See the total investment, budget planning, store formats, staffing, FOCM model and support from The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/rampur/mart-franchise-investment-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Investment in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Investment in Rampur | The Buyzaar Mart",
    description:
      "Planning a mart franchise investment in Rampur? See the total investment, budget planning, store formats, staffing, FOCM model and support from The Buyzaar Mart.",
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