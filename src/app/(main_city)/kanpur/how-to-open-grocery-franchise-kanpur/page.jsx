import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Grocery Franchise Kanpur | The Buyzaar Mart",
  description:
    "Open a grocery franchise in Kanpur with The Buyzaar Mart. Choose from MiniMart, SuperMart, or HyperMart formats ,Enquire now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/grocery-franchise-in-kanpur",
  },
  openGraph: {
    title: "How to Open Grocery Franchise Kanpur | The Buyzaar Mart",
    description:
      "Open a grocery franchise in Kanpur with The Buyzaar Mart. Choose from MiniMart, SuperMart, or HyperMart formats ,Enquire now!",
    url: "https://www.thebuyzaarmart.com/kanpur/grocery-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Grocery Franchise Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Grocery Franchise Kanpur | The Buyzaar Mart",
    description:
      "Open a grocery franchise in Kanpur with The Buyzaar Mart. Choose from MiniMart, SuperMart, or HyperMart formats ,Enquire now!",
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