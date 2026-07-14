import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise for Salaried Employees in Agra | Buyzaar Mart",
  description:
    "Start a zero-royalty grocery franchise in Agra with Buyzaar Mart, manageable alongside a full-time job. Explore store formats, area, investment, and process.",
  keywords: [
    "grocery franchise Agra",
    "grocery franchise for salaried employees",
    "Buyzaar Mart franchise Agra",
    "zero royalty franchise Agra",
    "supermarket franchise Agra",
    "part-time business for job holders",
    "Mini Mart Super Mart Hyper Mart franchise",
    "profit sharing franchise Agra",
    "retail franchise investment Agra",
    "Buyzaar Mart grocery store",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/grocery-franchise-for-salaried-employee-agra",
  },
  openGraph: {
    title: "Grocery Franchise for Salaried Employees in Agra | Buyzaar Mart",
    description:
      "Start a zero-royalty grocery franchise in Agra with Buyzaar Mart, manageable alongside a full-time job. Explore store formats, area, investment, and process.",
    url: "https://www.thebuyzaarmart.com/agra/grocery-franchise-for-salaried-employee-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise for Salaried Employees in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise for Salaried Employees in Agra | Buyzaar Mart",
    description:
      "Start a zero-royalty grocery franchise in Agra with Buyzaar Mart, manageable alongside a full-time job. Explore store formats, area, investment, and process.",
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