import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
import { Key } from "lucide-react";

export const metadata = {
  title: "Low Investment Franchise in Ghaziabad | Start from ₹15–20 Lakh",
  description:
    "Looking for a low investment franchise in Ghaziabad? Explore top affordable franchise opportunities with high returns across food, retail, education & services. Start your business today!",
  keywords:
    "low investment franchise in Ghaziabad, franchise under 20 lakh in Ghaziabad, affordable franchise in Ghaziabad, best low cost franchise Ghaziabad, high return franchise Ghaziabad, food franchise Ghaziabad, retail franchise Ghaziabad, education franchise Ghaziabad, service franchise Ghaziabad, start business in Ghaziabad",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/low-investment-franchise-ghaziabad",
  },
  openGraph: {
    title: "Low Investment Franchise in Ghaziabad | Start from ₹15–20 Lakh",
    description:
      "Looking for a low investment franchise in Ghaziabad? Explore top affordable franchise opportunities with high returns across food, retail, education & services. Start your business today!",
    url: "https://www.thebuyzaarmart.com/ghaziabad/low-investment-franchise-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Franchise in Ghaziabad | Start from ₹15–20 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Investment Franchise in Ghaziabad | Start from ₹15–20 Lakh",
    description:
      "Looking for a low investment franchise in Ghaziabad? Explore top affordable franchise opportunities with high returns across food, retail, education & services. Start your business today!",
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