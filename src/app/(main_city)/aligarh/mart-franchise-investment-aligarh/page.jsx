import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Investment in Aligarh | The Buyzaar Mart",
  description:
    "Explore mart franchise investment opportunities in Aligarh with The Buyzaar Mart. Low entry cost, FOCM model, centralized supply chain & full setup support. Apply now.",
  keywords: [
    "mart franchise investment Aligarh",
    "grocery franchise Aligarh",
    "supermarket franchise Aligarh",
    "Buyzaar Mart Aligarh",
    "franchise opportunity Aligarh",
    "low investment grocery franchise Aligarh",
    "FOCM franchise Aligarh",
    "retail franchise Aligarh",
    "supermarket franchise cost Aligarh",
    "grocery store franchise Uttar Pradesh",
    "Mini Mart franchise Aligarh",
    "Super Mart franchise Aligarh",
    "Hyper Mart franchise Aligarh",
    "FMCG franchise Aligarh",
    "grocery franchise near AMU Aligarh",
    "franchise business Aligarh",
    "investment opportunity Aligarh",
    "neighborhood supermarket franchise Aligarh",
    "franchise with full support Aligarh",
    "grocery franchise under 25 lakh",
    "supermarket franchise North India",
    "retail business opportunity Aligarh",
    "franchise ROI Aligarh",
    "organized retail Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/mart-franchise-investment-aligarh",
  },
  openGraph: {
    title: "Mart Franchise Investment in Aligarh | The Buyzaar Mart",
    description:
      "Explore mart franchise investment opportunities in Aligarh with The Buyzaar Mart. Low entry cost, FOCM model, centralized supply chain & full setup support. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/mart-franchise-investment-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Investment in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Investment in Aligarh | The Buyzaar Mart",
    description:
      "Explore mart franchise investment opportunities in Aligarh with The Buyzaar Mart. Low entry cost, FOCM model, centralized supply chain & full setup support. Apply now.",
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