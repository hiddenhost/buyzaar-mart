import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Above ₹15 Lakh in Gorakhpur | Buyzaar Mart",
  description:
    "Planning a mart franchise above ₹15 lakh in Gorakhpur? Explore Super Mart and Hyper Mart formats, investment heads, margins and support from The Buyzaar Mart.",
  keywords: [
    "mart franchise above 15 lakh Gorakhpur",
    "supermarket franchise Gorakhpur",
    "super mart franchise Gorakhpur",
    "hyper mart franchise Gorakhpur",
    "The Buyzaar Mart franchise",
    "Buyzaar Mart Gorakhpur",
    "grocery franchise Gorakhpur",
    "high investment grocery franchise",
    "franchise business above 15 lakh",
    "big supermarket franchise India",
    "supermarket franchise cost in India",
    "grocery franchise Uttar Pradesh",
    "retail franchise in Gorakhpur",
    "FOCM franchise India",
    "franchise owned company managed",
    "FMCG store franchise",
    "dairy and vegetable store franchise",
    "department store franchise Gorakhpur",
    "best franchise business in Gorakhpur",
    "supermarket franchise with full support",
    "large format grocery franchise",
    "franchise investment calculator India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-above-15-lakh-gorakhpur",
  },
  openGraph: {
    title: "Mart Franchise Above ₹15 Lakh in Gorakhpur | Buyzaar Mart",
    description:
      "Planning a mart franchise above ₹15 lakh in Gorakhpur? Explore Super Mart and Hyper Mart formats, investment heads, margins and support from The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-above-15-lakh-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Above ₹15 Lakh in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Above ₹15 Lakh in Gorakhpur | Buyzaar Mart",
    description:
      "Planning a mart franchise above ₹15 lakh in Gorakhpur? Explore Super Mart and Hyper Mart formats, investment heads, margins and support from The Buyzaar Mart.",
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