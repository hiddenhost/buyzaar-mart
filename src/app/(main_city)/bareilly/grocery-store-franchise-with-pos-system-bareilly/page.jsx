import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise with POS System in Bareilly | Buyzaar Mart",
  description:
    "Start a grocery store franchise with an integrated POS system in Bareilly with Buyzaar Mart. Smart billing, inventory tracking, brand support. Enquire now!",
  keywords: [
    "grocery franchise with POS system Bareilly",
    "Buyzaar Mart POS billing",
    "retail franchise technology Bareilly",
    "POS enabled grocery store",
    "smart billing franchise UP",
    "inventory management franchise Bareilly",
    "grocery store automation",
    "POS system supermarket franchise",
    "tech-enabled retail franchise",
    "Buyzaar Mart franchise support",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/grocery-store-franchise-with-pos-system-bareilly",
  },
  openGraph: {
    title: "Grocery Store Franchise with POS System in Bareilly | Buyzaar Mart",
    description:
      "Start a grocery store franchise with an integrated POS system in Bareilly with Buyzaar Mart. Smart billing, inventory tracking, brand support. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/grocery-store-franchise-with-pos-system-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise with POS System in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise with POS System in Bareilly | Buyzaar Mart",
    description:
      "Start a grocery store franchise with an integrated POS system in Bareilly with Buyzaar Mart. Smart billing, inventory tracking, brand support. Enquire now!",
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