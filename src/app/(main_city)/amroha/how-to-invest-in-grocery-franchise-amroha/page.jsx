import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Invest in Grocery Franchise in Amroha | Buyzaar Mart",
  description:
    "Planning to invest in a grocery franchise in Amroha? Compare models, formats, risks and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply today.",
  keywords: [
    "invest in grocery franchise in Amroha",
    "how to invest in grocery franchise Amroha",
    "grocery franchise investment in Amroha",
    "grocery franchise in Amroha",
    "Buyzaar Mart grocery franchise",
    "Buyzaar Mart investment",
    "grocery franchise total investment",
    "grocery franchise 15 lakh",
    "low investment grocery franchise",
    "grocery franchise in Uttar Pradesh",
    "grocery franchise in India",
    "supermarket franchise investment",
    "supermarket franchise in Amroha",
    "FOCM franchise model",
    "FOCO franchise model",
    "passive investment franchise",
    "franchise investment in Uttar Pradesh",
    "mini mart franchise in UP",
    "retail franchise investment India",
    "grocery store franchise opportunity",
    "franchise business in Amroha",
    "grocery franchise returns",
    "grocery franchise with full support",
    "grocery franchise for investors",
    "organised retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-invest-in-grocery-franchise-amroha",
  },
  openGraph: {
    title: "How to Invest in Grocery Franchise in Amroha | Buyzaar Mart",
    description:
      "Planning to invest in a grocery franchise in Amroha? Compare models, formats, risks and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply today.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-invest-in-grocery-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Invest in Grocery Franchise in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Invest in Grocery Franchise in Amroha | Buyzaar Mart",
    description:
      "Planning to invest in a grocery franchise in Amroha? Compare models, formats, risks and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply today.",
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