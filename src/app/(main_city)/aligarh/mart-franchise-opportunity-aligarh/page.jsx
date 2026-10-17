import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity in Aligarh | The Buyzaar Mart",
  description:
    "Explore mart franchise opportunity in Aligarh with The Buyzaar Mart. Choose Mini, Super or Hyper Mart from ₹15 lakh with FOCM model and full support. Apply now.",
  keywords: [
    "mart franchise opportunity aligarh",
    "mart franchise in aligarh",
    "buyzaar mart franchise aligarh",
    "the buyzaar mart",
    "mini mart franchise aligarh",
    "super mart franchise aligarh",
    "hyper mart franchise aligarh",
    "supermarket franchise aligarh",
    "grocery mart franchise aligarh",
    "retail mart franchise india",
    "franchise business in aligarh",
    "low investment mart franchise",
    "mart franchise 15 lakh",
    "FOCM franchise india",
    "franchise owned company managed",
    "neighbourhood mart franchise",
    "daily needs store franchise aligarh",
    "supermarket franchise uttar pradesh",
    "retail franchise opportunity UP",
    "mart franchise cost india",
    "best mart franchise in india",
    "franchise with training and support",
    "kirana to supermart franchise",
    "mart franchise with POS billing",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/mart-franchise-opportunity-aligarh",
  },
  openGraph: {
    title: "Mart Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Explore mart franchise opportunity in Aligarh with The Buyzaar Mart. Choose Mini, Super or Hyper Mart from ₹15 lakh with FOCM model and full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/mart-franchise-opportunity-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity in Aligarh | The Buyzaar Mart",
    description:
      "Explore mart franchise opportunity in Aligarh with The Buyzaar Mart. Choose Mini, Super or Hyper Mart from ₹15 lakh with FOCM model and full support. Apply now.",
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