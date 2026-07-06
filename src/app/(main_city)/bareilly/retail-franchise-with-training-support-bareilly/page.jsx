import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise with Training Support in Bareilly | The Buyzaar Mart",
  description:
    "Start a retail franchise in Bareilly with The Buyzaar Mart. Get complete training support, low investment, FOCM model & 3 store formats. Enquire now!",
  keywords: [
    "retail franchise Bareilly",
    "franchise with training support Bareilly",
    "grocery franchise Bareilly",
    "FMCG franchise Bareilly",
    "Buyzaar Mart franchise",
    "low investment franchise Bareilly",
    "retail business opportunity Bareilly",
    "super mart franchise",
    "mini mart franchise",
    "hyper mart franchise",
    "franchise support and training",
    "best franchise to start in Bareilly",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/bareilly/retail-franchise-with-training-support-in-bareilly",
  },
  openGraph: {
    title: "Retail Franchise with Training Support in Bareilly | The Buyzaar Mart",
    description:
      "Start a retail franchise in Bareilly with The Buyzaar Mart. Get complete training support, low investment, FOCM model & 3 store formats. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/retail-franchise-with-training-support-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise with Training Support in Bareilly | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise with Training Support in Bareilly | The Buyzaar Mart",
    description:
      "Start a retail franchise in Bareilly with The Buyzaar Mart. Get complete training support, low investment, FOCM model & 3 store formats. Enquire now!",
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