import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Affordable Grocery Shopping in Kanpur for Students | The Buyzaar Mart",
  description:
    "Students in Kanpur can now shop smart with The Buyzaar Mart – affordable groceries, hostel-friendly pack sizes & everyday essentials at budget-friendly prices.",
  keywords: [
    "affordable grocery shopping in Kanpur for students",
    "student grocery store Kanpur",
    "budget grocery Kanpur students",
    "hostel grocery shopping Kanpur",
    "PG grocery essentials Kanpur",
    "cheap grocery store near college Kanpur",
    "The Buyzaar Mart Kanpur",
    "low investment supermarket franchise in Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/affordable-grocery-shopping-in-kanpur-for-students",
  },
  openGraph: {
    title:
      "Affordable Grocery Shopping in Kanpur for Students | The Buyzaar Mart",
    description:
      "Students in Kanpur can now shop smart with The Buyzaar Mart – affordable groceries, hostel-friendly pack sizes & everyday essentials at budget-friendly prices.",
    url: "https://www.thebuyzaarmart.com/kanpur/affordable-grocery-shopping-in-kanpur-for-students",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Affordable Grocery Shopping in Kanpur for Students | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Affordable Grocery Shopping in Kanpur for Students | The Buyzaar Mart",
    description:
      "Students in Kanpur can now shop smart with The Buyzaar Mart – affordable groceries, hostel-friendly pack sizes & everyday essentials at budget-friendly prices.",
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