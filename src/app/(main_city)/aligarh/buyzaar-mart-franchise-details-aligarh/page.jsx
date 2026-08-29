import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Buyzaar Mart Franchise Details in Aligarh | Complete Guide",
  description:
    "Get complete Buyzaar Mart franchise details in Aligarh, including investment, store formats, franchise models, eligibility, and the step-by-step application process.",
  keywords: [
    "Buyzaar Mart franchise details Aligarh",
    "franchise details Aligarh",
    "grocery franchise Aligarh",
    "supermarket franchise Aligarh",
    "retail franchise Aligarh",
    "Buyzaar Mart Aligarh",
    "franchise investment Aligarh",
    "franchise cost Aligarh",
    "FOCM FOCO franchise Aligarh",
    "mart franchise Aligarh",
    "franchise business Aligarh",
    "grocery store franchise Aligarh",
    "best franchise in Aligarh",
    "franchise opportunity Uttar Pradesh",
    "retail business Aligarh",
    "mini mart franchise Aligarh",
    "super mart franchise Aligarh",
    "hyper mart franchise Aligarh",
    "franchise partner Aligarh",
    "franchise eligibility Aligarh",
    "franchise apply Aligarh",
    "daily needs store franchise Aligarh",
    "FMCG retail franchise Aligarh",
    "low investment franchise Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-franchise-details-aligarh",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Details in Aligarh | Complete Guide",
    description:
      "Get complete Buyzaar Mart franchise details in Aligarh, including investment, store formats, franchise models, eligibility, and the step-by-step application process.",
    url: "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-franchise-details-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Details in Aligarh | Complete Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Details in Aligarh | Complete Guide",
    description:
      "Get complete Buyzaar Mart franchise details in Aligarh, including investment, store formats, franchise models, eligibility, and the step-by-step application process.",
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