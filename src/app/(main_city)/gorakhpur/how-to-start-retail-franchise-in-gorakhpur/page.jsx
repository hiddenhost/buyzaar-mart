import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start Retail Franchise in Gorakhpur | Buyzaar Mart",
  description:
    "Learn how to start a retail franchise in Gorakhpur with The Buyzaar Mart. Cost from ₹15 Lakh, FOCM model, POS, staff planning and full support. Apply now.",
  keywords: [
    "how to start retail franchise in gorakhpur",
    "retail franchise in gorakhpur",
    "retail franchise business in gorakhpur",
    "the buyzaar mart",
    "buyzaar mart retail franchise",
    "supermarket franchise in gorakhpur",
    "retail store franchise in uttar pradesh",
    "low investment retail franchise",
    "retail franchise under 20 lakh",
    "franchise business in gorakhpur",
    "franchise opportunities in gorakhpur",
    "mini mart franchise gorakhpur",
    "FOCM franchise india",
    "retail franchise cost in india",
    "best retail franchise in india",
    "FMCG retail franchise",
    "retail franchise in eastern UP",
    "start retail business in gorakhpur",
    "franchise with training and support",
    "POS enabled retail franchise",
    "neighborhood supermarket franchise india",
    "retail franchise investment plan",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-start-retail-franchise-in-gorakhpur",
  },
  openGraph: {
    title: "How to Start Retail Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to start a retail franchise in Gorakhpur with The Buyzaar Mart. Cost from ₹15 Lakh, FOCM model, POS, staff planning and full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-start-retail-franchise-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start Retail Franchise in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start Retail Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to start a retail franchise in Gorakhpur with The Buyzaar Mart. Cost from ₹15 Lakh, FOCM model, POS, staff planning and full support. Apply now.",
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