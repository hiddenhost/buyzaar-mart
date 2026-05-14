import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Neighbourhood Mart Franchise Delhi — The Buyzaar Mart Mini Mart & Hypermart Investment Guide",
  description:
    "Explore a step-by-step guide to opening a neighbourhood mart franchise in Delhi with The Buyzaar Mart — full investment breakdown for Mini Mart and Hypermart.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/neighbourhood-mart-franchise-delhi",
  },
  openGraph: {
    title:
      "Neighbourhood Mart Franchise Delhi — The Buyzaar Mart Mini Mart & Hypermart Investment Guide",
    description:
      "Explore a step-by-step guide to opening a neighbourhood mart franchise in Delhi with The Buyzaar Mart — full investment breakdown for Mini Mart and Hypermart.",
    url: "https://www.thebuyzaarmart.com/delhi/neighbourhood-mart-franchise-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise Delhi — The Buyzaar Mart Mini Mart & Hypermart Investment Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neighbourhood Mart Franchise Delhi — The Buyzaar Mart Mini Mart & Hypermart Investment Guide",
    description:
      "Explore a step-by-step guide to opening a neighbourhood mart franchise in Delhi with The Buyzaar Mart — full investment breakdown for Mini Mart and Hypermart.",
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