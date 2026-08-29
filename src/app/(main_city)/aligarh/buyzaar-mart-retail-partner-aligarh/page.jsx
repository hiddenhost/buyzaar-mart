import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Become a Buyzaar Mart Retail Partner in Aligarh | Franchise Partnership Opportunity",
  description:
    "Become a retail partner with The Buyzaar Mart in Aligarh. Understand partner responsibilities, brand support, growth path, and how the partnership actually works.",
  keywords: [
    "Buyzaar Mart retail partner Aligarh",
    "become a franchise partner Aligarh",
    "retail partnership grocery Aligarh",
    "franchise partner responsibilities",
    "brand support franchise",
    "grocery business partner UP",
    "retail partner opportunity Aligarh",
    "franchise partnership model",
    "franchise growth partner",
    "multi-store franchise partner",
    "franchise partner benefits",
    "retail investment partner Aligarh",
    "grocery store partnership India",
    "franchise partner eligibility",
    "FOCM partner responsibilities",
    "FOCO partner responsibilities",
    "become a store owner Aligarh",
    "retail business partnership UP",
    "Buyzaar Mart partner network",
    "franchise partner support system",
    "apply as retail partner",
    "neighbourhood store partner Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-retail-partner-aligarh",
  },
  openGraph: {
    title: "Become a Buyzaar Mart Retail Partner in Aligarh | Franchise Partnership Opportunity",
    description:
      "Become a retail partner with The Buyzaar Mart in Aligarh. Understand partner responsibilities, brand support, growth path, and how the partnership actually works.",
    url: "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-retail-partner-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Become a Buyzaar Mart Retail Partner in Aligarh | Franchise Partnership Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Buyzaar Mart Retail Partner in Aligarh | Franchise Partnership Opportunity",
    description:
      "Become a retail partner with The Buyzaar Mart in Aligarh. Understand partner responsibilities, brand support, growth path, and how the partnership actually works.",
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