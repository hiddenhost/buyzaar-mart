import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Cost in Aligarh | The Buyzaar Mart",
  description:
    "Get a complete grocery store franchise cost breakdown for Aligarh — Mini, Super & Hyper Mart formats, setup vs recurring costs, and cost-saving tips. Apply now.",
  keywords: [
    "grocery store franchise cost Aligarh",
    "franchise cost Aligarh",
    "supermarket franchise cost Aligarh",
    "Buyzaar Mart franchise cost",
    "grocery franchise investment cost",
    "Mini Mart franchise cost",
    "Super Mart franchise cost",
    "Hyper Mart franchise cost",
    "franchise setup cost Aligarh",
    "grocery store cost breakdown",
    "low cost grocery franchise Aligarh",
    "franchise fee Aligarh",
    "retail franchise cost Uttar Pradesh",
    "grocery business cost Aligarh",
    "franchise cost comparison",
    "recurring cost grocery store",
    "franchise investment under 25 lakh",
    "affordable grocery franchise Aligarh",
    "franchise cost North India",
    "grocery store setup cost",
    "FOCM franchise cost",
    "franchise cost planning Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/grocery-store-franchise-cost-aligarh",
  },
  openGraph: {
    title: "Grocery Store Franchise Cost in Aligarh | The Buyzaar Mart",
    description:
      "Get a complete grocery store franchise cost breakdown for Aligarh — Mini, Super & Hyper Mart formats, setup vs recurring costs, and cost-saving tips. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/grocery-store-franchise-cost-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Cost in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Cost in Aligarh | The Buyzaar Mart",
    description:
      "Get a complete grocery store franchise cost breakdown for Aligarh — Mini, Super & Hyper Mart formats, setup vs recurring costs, and cost-saving tips. Apply now.",
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