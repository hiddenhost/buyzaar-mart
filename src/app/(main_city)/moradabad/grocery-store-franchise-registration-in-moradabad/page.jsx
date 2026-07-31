import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Store Franchise Registration in Moradabad | The Buyzaar Mart",
  description:
    "Register a grocery store franchise in Moradabad with The Buyzaar Mart. Explore Mini Mart, Super Mart & Hyper Mart formats, investment from ₹15 lakh, and easy registration process.",
  keywords: [
    "grocery store franchise registration Moradabad",
    "supermarket franchise Moradabad",
    "The Buyzaar Mart Moradabad",
    "grocery franchise investment Moradabad",
    "Mini Mart franchise",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "retail business franchise Moradabad",
    "low investment grocery franchise",
    "FOCM FOCO franchise model",
    "franchise opportunity Uttar Pradesh",
    "daily needs store franchise Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/grocery-store-franchise-registration-in-moradabad",
  },
  openGraph: {
    title: "Grocery Store Franchise Registration in Moradabad | The Buyzaar Mart",
    description:
      "Register a grocery store franchise in Moradabad with The Buyzaar Mart. Explore Mini Mart, Super Mart & Hyper Mart formats, investment from ₹15 lakh, and easy registration process.",
    url: "https://www.thebuyzaarmart.com/moradabad/grocery-store-franchise-registration-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Registration in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Registration in Moradabad | The Buyzaar Mart",
    description:
      "Register a grocery store franchise in Moradabad with The Buyzaar Mart. Explore Mini Mart, Super Mart & Hyper Mart formats, investment from ₹15 lakh, and easy registration process.",
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