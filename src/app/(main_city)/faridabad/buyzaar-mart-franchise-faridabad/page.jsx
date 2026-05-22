import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart Franchise in Faridabad | Grocery Store Franchise from ₹15 Lakh",
  description:
    "Start your successful grocery franchise in Faridabad with Buyzaar Mart. Low investment from ₹15 Lakh with complete business setup, training, supply chain & ongoing support. FOCM model with proven ROI.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/local-mart-franchise-faridabad",
  },
  openGraph: {
    title:
      "Buyzaar Mart Franchise in Faridabad | Grocery Store Franchise from ₹15 Lakh",
    description:
      "Start your successful grocery franchise in Faridabad with Buyzaar Mart. Low investment from ₹15 Lakh with complete business setup, training, supply chain & ongoing support. FOCM model with proven ROI.",
    url: "https://www.thebuyzaarmart.com/faridabad/local-mart-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Faridabad | Grocery Store Franchise from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Franchise in Faridabad | Grocery Store Franchise from ₹15 Lakh",
    description:
      "Start your successful grocery franchise in Faridabad with Buyzaar Mart. Low investment from ₹15 Lakh with complete business setup, training, supply chain & ongoing support. FOCM model with proven ROI.",
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