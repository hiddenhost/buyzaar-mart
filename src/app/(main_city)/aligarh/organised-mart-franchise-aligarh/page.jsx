import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Mart Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Start an organised mart franchise in Aligarh with The Buyzaar Mart. Mini, Super and Hyper Mart formats from ₹15 lakh with FOCM model, POS billing and support.",
  keywords: [
    "organised mart franchise aligarh",
    "organised retail franchise aligarh",
    "organized mart franchise aligarh",
    "organised supermarket franchise aligarh",
    "the buyzaar mart franchise",
    "buyzaar mart aligarh",
    "mini mart franchise aligarh",
    "super mart franchise aligarh",
    "hyper mart franchise aligarh",
    "organised grocery store franchise",
    "kirana to organised retail franchise",
    "low investment mart franchise",
    "mart franchise 15 lakh",
    "FOCM franchise india",
    "franchise owned company managed",
    "managed supermarket franchise",
    "franchise business in aligarh",
    "retail franchise opportunity UP",
    "supermarket franchise uttar pradesh",
    "organised retail business india",
    "neighbourhood mart franchise",
    "mart franchise with POS billing",
    "mart franchise with full support",
    "supermarket franchise cost india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/organised-mart-franchise-aligarh",
  },
  openGraph: {
    title: "Organised Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Start an organised mart franchise in Aligarh with The Buyzaar Mart. Mini, Super and Hyper Mart formats from ₹15 lakh with FOCM model, POS billing and support.",
    url: "https://www.thebuyzaarmart.com/aligarh/organised-mart-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Start an organised mart franchise in Aligarh with The Buyzaar Mart. Mini, Super and Hyper Mart formats from ₹15 lakh with FOCM model, POS billing and support.",
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