import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Store Franchise for Salaried Person in Gurugram | The Buyzaar Mart",
  description:
    "Start a low investment supermarket franchise in Gurugram with The Buyzaar Mart. Ideal for salaried professionals — no operational hassle, full support, flexible formats.",
  keywords: [
    "grocery store franchise Gurugram",
    "low investment supermarket franchise",
    "supermarket franchise for salaried person",
    "Buyzaar Mart franchise Gurugram",
    "grocery franchise business India",
    "low investment supermarket franchise Lucknow",
    "FOCM FOCO franchise model",
    "mini mart super mart hyper mart franchise",
    "best grocery franchise NCR",
    "supermarket franchise opportunities Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/grocery-store-franchise-for-salaried-person-in-gurugram",
  },
  openGraph: {
    title:
      "Grocery Store Franchise for Salaried Person in Gurugram | The Buyzaar Mart",
    description:
      "Start a low investment supermarket franchise in Gurugram with The Buyzaar Mart. Ideal for salaried professionals — no operational hassle, full support, flexible formats.",
    url: "https://www.thebuyzaarmart.com/gurgaon/grocery-store-franchise-for-salaried-person-in-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise for Salaried Person in Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Store Franchise for Salaried Person in Gurugram | The Buyzaar Mart",
    description:
      "Start a low investment supermarket franchise in Gurugram with The Buyzaar Mart. Ideal for salaried professionals — no operational hassle, full support, flexible formats.",
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