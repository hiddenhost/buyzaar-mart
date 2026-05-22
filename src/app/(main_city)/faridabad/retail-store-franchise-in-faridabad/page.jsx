import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Store Franchise in Faridabad | The Buyzaar Mart",
  description:
    "Start your own retail store franchise in Faridabad with The Buyzaar Mart from just ₹15 Lakh. FOCM model, full setup support, POS system & supply chain. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/local-mart-franchise-faridabad",
  },
  openGraph: {
    title: "Retail Store Franchise in Faridabad | The Buyzaar Mart",
    description:
      "Start your own retail store franchise in Faridabad with The Buyzaar Mart from just ₹15 Lakh. FOCM model, full setup support, POS system & supply chain. Apply now!",
    url: "https://www.thebuyzaarmart.com/faridabad/local-mart-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise in Faridabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Store Franchise in Faridabad | The Buyzaar Mart",
    description:
      "Start your own retail store franchise in Faridabad with The Buyzaar Mart from just ₹15 Lakh. FOCM model, full setup support, POS system & supply chain. Apply now!",
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