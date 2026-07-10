import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mini Mart Franchise in Ghaziabad | Buyzaar Mart",
  description:
    "Start a Mini Mart franchise in Ghaziabad with Buyzaar Mart. Low investment, brand support, and strong daily demand in growing neighborhoods. Apply now!",
  keywords: [
    "mini mart franchise Ghaziabad",
    "Buyzaar Mart franchise Ghaziabad",
    "grocery franchise Ghaziabad",
    "low investment franchise Ghaziabad",
    "small supermarket franchise",
    "Indirapuram franchise opportunity",
    "retail franchise Ghaziabad",
    "affordable franchise Ghaziabad",
    "Buyzaar Mart Mini Mart",
    "franchise business Ghaziabad",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/mini-mart-franchise-in-ghaziabad",
  },
  openGraph: {
    title: "Mini Mart Franchise in Ghaziabad | Buyzaar Mart",
    description:
      "Start a Mini Mart franchise in Ghaziabad with Buyzaar Mart. Low investment, brand support, and strong daily demand in growing neighborhoods. Apply now!",
    url: "https://www.thebuyzaarmart.com/delhi/mini-mart-franchise-in-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Mart Franchise in Ghaziabad | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Mart Franchise in Ghaziabad | Buyzaar Mart",
    description:
      "Start a Mini Mart franchise in Ghaziabad with Buyzaar Mart. Low investment, brand support, and strong daily demand in growing neighborhoods. Apply now!",
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