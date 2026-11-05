import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Mart Franchise Cost in Rampur | The Buyzaar Mart Guide",
  description:
    "Mart franchise cost in Rampur: ₹15–20 lakh total investment for a Buyzaar Mart Mini Mart. Know formats, running costs, support and how to apply. Enquire today.",
  keywords: [
    "mart franchise cost Rampur",
    "mart franchise cost in Rampur",
    "Buyzaar Mart franchise cost",
    "Buyzaar Mart franchise Rampur",
    "mini mart franchise Rampur",
    "super mart franchise Rampur",
    "hyper mart franchise Rampur",
    "supermarket franchise cost Rampur",
    "grocery franchise Rampur",
    "retail franchise Rampur",
    "FOCM franchise Rampur",
    "FOCO franchise Rampur",
    "mart franchise investment Rampur",
    "mart franchise 15 lakh",
    "low investment mart franchise",
    "mart franchise Uttar Pradesh",
    "how to open a mart in Rampur",
    "supermarket franchise India",
    "organised mart franchise",
    "neighbourhood supermarket franchise",
    "franchise business Rampur",
    "mart franchise with full support",
    "grocery franchise under 20 lakh",
    "mart franchise apply Rampur",
    "retail store franchise Uttar Pradesh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/mart-franchise-cost-rampur",
  },
  openGraph: {
    title: "Mart Franchise Cost in Rampur | The Buyzaar Mart Guide",
    description:
      "Mart franchise cost in Rampur: ₹15–20 lakh total investment for a Buyzaar Mart Mini Mart. Know formats, running costs, support and how to apply. Enquire today.",
    url: "https://www.thebuyzaarmart.com/rampur/mart-franchise-cost-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Cost in Rampur | The Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Cost in Rampur | The Buyzaar Mart Guide",
    description:
      "Mart franchise cost in Rampur: ₹15–20 lakh total investment for a Buyzaar Mart Mini Mart. Know formats, running costs, support and how to apply. Enquire today.",
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