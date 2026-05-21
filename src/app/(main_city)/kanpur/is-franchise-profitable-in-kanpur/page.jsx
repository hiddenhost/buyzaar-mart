import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Is Franchise Profitable in Kanpur? The Buyzaar Mart Grocery & Supermarket Franchise.",
  description:
    "Wondering if a grocery franchise is profitable in Kanpur? Explore The Buyzaar Mart's Mini Mart, Super Mart, FOCM and FOCO models and find the right path for your investment.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/is-franchise-profitable-in-kanpur",
  },
  openGraph: {
    title:
      "Is Franchise Profitable in Kanpur? The Buyzaar Mart Grocery & Supermarket Franchise.",
    description:
      "Wondering if a grocery franchise is profitable in Kanpur? Explore The Buyzaar Mart's Mini Mart, Super Mart, FOCM and FOCO models and find the right path for your investment.",
    url: "https://www.thebuyzaarmart.com/kanpur/is-franchise-profitable-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Is Franchise Profitable in Kanpur? The Buyzaar Mart Grocery & Supermarket Franchise.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Is Franchise Profitable in Kanpur? The Buyzaar Mart Grocery & Supermarket Franchise.",
    description:
      "Wondering if a grocery franchise is profitable in Kanpur? Explore The Buyzaar Mart's Mini Mart, Super Mart, FOCM and FOCO models and find the right path for your investment.",
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