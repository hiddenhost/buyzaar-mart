import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity in Aligarh | Buyzaar Mart",
  description:
    "Start a supermarket franchise in Aligarh with The Buyzaar Mart. Mini, Super and Hyper Mart formats from ₹15 lakh, FOCM model, POS billing and full support.",
  keywords: [
    "supermarket franchise opportunity aligarh",
    "supermarket franchise in aligarh",
    "buyzaar mart supermarket franchise",
    "the buyzaar mart aligarh",
    "mini mart franchise aligarh",
    "super mart franchise aligarh",
    "hyper mart franchise aligarh",
    "low investment supermarket franchise",
    "supermarket franchise cost india",
    "supermarket franchise 15 lakh",
    "neighbourhood supermarket franchise",
    "FOCM franchise india",
    "franchise owned company managed",
    "supermarket franchise uttar pradesh",
    "retail franchise opportunity UP",
    "franchise business in aligarh",
    "grocery supermarket franchise aligarh",
    "supermarket franchise with full support",
    "supermarket franchise with POS billing",
    "supermarket store layout franchise",
    "small format supermarket franchise",
    "large format supermarket franchise",
    "supermarket franchise profit margin",
    "how to start supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/supermarket-franchise-opportunity-aligarh",
  },
  openGraph: {
    title: "Supermarket Franchise Opportunity in Aligarh | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Aligarh with The Buyzaar Mart. Mini, Super and Hyper Mart formats from ₹15 lakh, FOCM model, POS billing and full support.",
    url: "https://www.thebuyzaarmart.com/aligarh/supermarket-franchise-opportunity-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity in Aligarh | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity in Aligarh | Buyzaar Mart",
    description:
      "Start a supermarket franchise in Aligarh with The Buyzaar Mart. Mini, Super and Hyper Mart formats from ₹15 lakh, FOCM model, POS billing and full support.",
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