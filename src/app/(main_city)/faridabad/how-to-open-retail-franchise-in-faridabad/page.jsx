import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Retail Franchise in Faridabad | The Buyzaar Mart",
  description:
    "Complete guide to opening a retail franchise in Faridabad with The Buyzaar Mart. Investment from ₹15L-₹60L, step-by-step process, support & ROI details.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/open-retail-franchise-faridabad",
  },
  openGraph: {
    title: "How to Open Retail Franchise in Faridabad | The Buyzaar Mart",
    description:
      "Complete guide to opening a retail franchise in Faridabad with The Buyzaar Mart. Investment from ₹15L-₹60L, step-by-step process, support & ROI details.",
    url: "https://www.thebuyzaarmart.com/faridabad/open-retail-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Retail Franchise in Faridabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Retail Franchise in Faridabad | The Buyzaar Mart",
    description:
      "Complete guide to opening a retail franchise in Faridabad with The Buyzaar Mart. Investment from ₹15L-₹60L, step-by-step process, support & ROI details.",
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