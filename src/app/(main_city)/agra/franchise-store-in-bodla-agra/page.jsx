import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Store Opportunity in Sikandra, Agra | Buyzaar Mart",
  description:
    "Explore a franchise store opportunity in Sikandra, Agra with Buyzaar Mart. Low investment, POS billing & full brand support. MiniMart & SuperMart formats. Enquire now!",
  keywords: [
    "franchise store opportunity Sikandra Agra",
    "grocery franchise Sikandra",
    "supermarket franchise Sikandra Bodla Road",
    "Buyzaar Mart Sikandra",
    "mini mart franchise Sikandra Agra",
    "low investment grocery franchise Agra",
    "retail franchise Avas Vikas Colony Sikandra",
    "neighborhood store franchise Agra",
    "FOCM franchise Sikandra",
    "grocery store franchise Agra UP",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/franchise-store-opportunity-in-sikandra",
  },
  openGraph: {
    title: "Franchise Store Opportunity in Sikandra, Agra | Buyzaar Mart",
    description:
      "Explore a franchise store opportunity in Sikandra, Agra with Buyzaar Mart. Low investment, POS billing & full brand support. MiniMart & SuperMart formats. Enquire now!",
    url: "https://www.thebuyzaarmart.com/agra/franchise-store-opportunity-in-sikandra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Store Opportunity in Sikandra, Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Store Opportunity in Sikandra, Agra | Buyzaar Mart",
    description:
      "Explore a franchise store opportunity in Sikandra, Agra with Buyzaar Mart. Low investment, POS billing & full brand support. MiniMart & SuperMart formats. Enquire now!",
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
