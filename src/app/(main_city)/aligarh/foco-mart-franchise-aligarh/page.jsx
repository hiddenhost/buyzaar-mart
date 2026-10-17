import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Mart Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Open a FOCO mart franchise in Aligarh with The Buyzaar Mart. Earn about 10% revenue share while the company runs your store. 10-year term. Apply now.",
  keywords: [
    "FOCO mart franchise Aligarh",
    "FOCO franchise Aligarh",
    "Buyzaar Mart FOCO franchise",
    "franchise owned company operated",
    "FOCO model supermarket",
    "supermarket franchise in Aligarh",
    "grocery franchise in Aligarh",
    "mart franchise Aligarh",
    "franchise opportunity in Aligarh",
    "passive income franchise Aligarh",
    "revenue share franchise India",
    "hands-off franchise business",
    "retail franchise Aligarh",
    "company operated supermarket franchise",
    "FOCO supermarket franchise India",
    "investor franchise Aligarh",
    "2000 sq ft supermarket franchise",
    "supermarket franchise Uttar Pradesh",
    "grocery franchise UP",
    "organized retail franchise India",
    "The Buyzaar Mart",
    "Buyzaar Mart franchise Aligarh",
    "best franchise in Aligarh",
    "low involvement franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/foco-mart-franchise-aligarh",
  },
  openGraph: {
    title: "FOCO Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Open a FOCO mart franchise in Aligarh with The Buyzaar Mart. Earn about 10% revenue share while the company runs your store. 10-year term. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/foco-mart-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Mart Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Mart Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Open a FOCO mart franchise in Aligarh with The Buyzaar Mart. Earn about 10% revenue share while the company runs your store. 10-year term. Apply now.",
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