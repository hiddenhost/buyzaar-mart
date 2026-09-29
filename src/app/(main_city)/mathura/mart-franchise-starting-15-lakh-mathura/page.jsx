import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Mart Franchise Starting at ₹15 Lakh in Mathura | Buyzaar Mart",
  description:
    "Explore a mart franchise starting at ₹15 lakh in Mathura. See the Mini Mart layout, range, daily operations and support from The Buyzaar Mart. Enquire today.",
  keywords: [
    "mart franchise starting 15 lakh Mathura",
    "mart franchise in Mathura",
    "Mini Mart franchise Mathura",
    "grocery mart franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "15 lakh franchise Mathura",
    "low investment mart franchise",
    "supermarket franchise Mathura",
    "retail franchise Mathura",
    "FMCG franchise Mathura",
    "kirana store franchise Mathura",
    "neighbourhood mart franchise",
    "mart franchise Uttar Pradesh",
    "best mart franchise in UP",
    "Mini Mart store layout",
    "mart franchise cost Mathura",
    "franchise business in Mathura",
    "start a mart in Mathura",
    "Buyzaar Mart franchise cost",
    "mart franchise enquiry",
    "small store franchise India",
    "Buyzaar Mart Mini Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/mart-franchise-starting-15-lakh-mathura",
  },
  openGraph: {
    title: "Mart Franchise Starting at ₹15 Lakh in Mathura | Buyzaar Mart",
    description:
      "Explore a mart franchise starting at ₹15 lakh in Mathura. See the Mini Mart layout, range, daily operations and support from The Buyzaar Mart. Enquire today.",
    url: "https://www.thebuyzaarmart.com/mathura/mart-franchise-starting-15-lakh-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Starting at ₹15 Lakh in Mathura | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Starting at ₹15 Lakh in Mathura | Buyzaar Mart",
    description:
      "Explore a mart franchise starting at ₹15 lakh in Mathura. See the Mini Mart layout, range, daily operations and support from The Buyzaar Mart. Enquire today.",
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