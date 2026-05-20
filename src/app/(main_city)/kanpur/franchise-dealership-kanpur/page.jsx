import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Dealership Kanpur | The Buyzaar Mart Grocery & Supermarket Franchise",
  description:
    "Looking for a franchise dealership in Kanpur? Partner with The Buyzaar Mart and own a profitable grocery supermarket from ₹15 Lakh.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
  },
  openGraph: {
    title:
      "Franchise Dealership Kanpur | The Buyzaar Mart Grocery & Supermarket Franchise",
    description:
      "Looking for a franchise dealership in Kanpur? Partner with The Buyzaar Mart and own a profitable grocery supermarket from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Dealership Kanpur | The Buyzaar Mart Grocery & Supermarket Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Dealership Kanpur | The Buyzaar Mart Grocery & Supermarket Franchise",
    description:
      "Looking for a franchise dealership in Kanpur? Partner with The Buyzaar Mart and own a profitable grocery supermarket from ₹15 Lakh.",
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