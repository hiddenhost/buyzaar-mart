import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise in Tajganj Agra | The Buyzaar Mart",
  description:
    "Open a profitable grocery store franchise in Tajganj, Agra with The Buyzaar Mart. Low investment, high margins, full brand support. India's fastest-growing FMCG retail franchise.",
  keywords: [
    "Grocery Store Franchise in Tajganj Agra",
    "Buyzaar Mart franchise Agra",
    "grocery franchise Tajganj",
    "retail franchise Agra",
    "supermarket franchise Uttar Pradesh",
    "FMCG franchise Agra",
    "grocery store business Agra",
    "franchise investment Agra",
    "Buyzaar Mart Agra",
    "mini mart franchise UP",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/grocery-store-franchise-in-tajganj-agra",
  },
  openGraph: {
    title: "Grocery Store Franchise in Tajganj Agra | The Buyzaar Mart",
    description:
      "Open a profitable grocery store franchise in Tajganj, Agra with The Buyzaar Mart. Low investment, high margins, full brand support. India's fastest-growing FMCG retail franchise.",
    url: "https://www.thebuyzaarmart.com/agra/grocery-store-franchise-in-tajganj-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise in Tajganj Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise in Tajganj Agra | The Buyzaar Mart",
    description:
      "Open a profitable grocery store franchise in Tajganj, Agra with The Buyzaar Mart. Low investment, high margins, full brand support. India's fastest-growing FMCG retail franchise.",
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
