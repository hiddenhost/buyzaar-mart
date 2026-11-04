import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Franchise Business Investment in Rampur | The Buyzaar Mart",
  description:
    "Planning a franchise business investment in Rampur? Compare franchise vs independent store, see total investment, FOCM model, risks, support and how to apply.",
  keywords: [
    "franchise business investment rampur",
    "franchise business rampur",
    "franchise investment rampur",
    "supermarket franchise rampur",
    "grocery franchise rampur",
    "mart franchise rampur",
    "retail franchise rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "mini mart franchise rampur",
    "franchise vs independent store",
    "franchise business opportunity rampur",
    "grocery franchise starting 15 lakh",
    "low investment franchise business",
    "franchise business uttar pradesh",
    "organised retail franchise",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "franchise with training and support",
    "how to start franchise business",
    "supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/franchise-business-investment-rampur",
  },
  openGraph: {
    title: "Franchise Business Investment in Rampur | The Buyzaar Mart",
    description:
      "Planning a franchise business investment in Rampur? Compare franchise vs independent store, see total investment, FOCM model, risks, support and how to apply.",
    url: "https://www.thebuyzaarmart.com/rampur/franchise-business-investment-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Investment in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Investment in Rampur | The Buyzaar Mart",
    description:
      "Planning a franchise business investment in Rampur? Compare franchise vs independent store, see total investment, FOCM model, risks, support and how to apply.",
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