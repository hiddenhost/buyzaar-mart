import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Grocery Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Open a branded grocery franchise in Aligarh with The Buyzaar Mart. Trusted brand, FOCM model, ₹15 lakh onwards, POS billing and full support. Apply now.",
  keywords: [
    "branded grocery franchise aligarh",
    "branded grocery store franchise",
    "grocery franchise in aligarh",
    "the buyzaar mart franchise",
    "buyzaar mart aligarh",
    "branded supermarket franchise aligarh",
    "trusted grocery brand franchise",
    "FMCG brand store franchise",
    "mini mart franchise aligarh",
    "super mart franchise aligarh",
    "hyper mart franchise aligarh",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "FOCM franchise india",
    "franchise owned company managed",
    "franchise business in aligarh",
    "supermarket franchise uttar pradesh",
    "grocery franchise uttar pradesh",
    "retail franchise opportunity UP",
    "branded kirana store franchise",
    "grocery franchise with full support",
    "uniform branded store franchise",
    "daily needs franchise aligarh",
    "supermarket franchise cost india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/branded-grocery-franchise-aligarh",
  },
  openGraph: {
    title: "Branded Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Open a branded grocery franchise in Aligarh with The Buyzaar Mart. Trusted brand, FOCM model, ₹15 lakh onwards, POS billing and full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/branded-grocery-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Grocery Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Open a branded grocery franchise in Aligarh with The Buyzaar Mart. Trusted brand, FOCM model, ₹15 lakh onwards, POS billing and full support. Apply now.",
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