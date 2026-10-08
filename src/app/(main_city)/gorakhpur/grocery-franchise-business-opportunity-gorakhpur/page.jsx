import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Business Opportunity Gorakhpur | Buyzaar Mart",
  description:
    "Start a grocery franchise business in Gorakhpur with The Buyzaar Mart. Step-by-step plan, formats and support, with investment from ₹15 Lakh. Apply today!",
  keywords: [
    "grocery franchise business opportunity gorakhpur",
    "grocery franchise business gorakhpur",
    "grocery business opportunity gorakhpur",
    "grocery franchise opportunity gorakhpur",
    "start grocery franchise gorakhpur",
    "grocery store business gorakhpur",
    "supermarket franchise business gorakhpur",
    "mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "franchise business in gorakhpur",
    "retail franchise business gorakhpur",
    "low investment grocery franchise gorakhpur",
    "focm grocery franchise gorakhpur",
    "fofo grocery franchise gorakhpur",
    "grocery franchise business plan gorakhpur",
    "fmcg franchise gorakhpur",
    "grocery franchise business uttar pradesh",
    "grocery franchise business india",
    "supermarket franchise india",
    "buyzaar mart dealership",
    "daily need business gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-business-opportunity-gorakhpur",
  },
  openGraph: {
    title: "Grocery Franchise Business Opportunity Gorakhpur | Buyzaar Mart",
    description:
      "Start a grocery franchise business in Gorakhpur with The Buyzaar Mart. Step-by-step plan, formats and support, with investment from ₹15 Lakh. Apply today!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-business-opportunity-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Business Opportunity Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Business Opportunity Gorakhpur | Buyzaar Mart",
    description:
      "Start a grocery franchise business in Gorakhpur with The Buyzaar Mart. Step-by-step plan, formats and support, with investment from ₹15 Lakh. Apply today!",
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