import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Kanpur Grocery Shopping Review | The Buyzaar Mart Experience",
  description:
    "An honest Kanpur grocery shopping review — pricing, freshness, store experience & billing at The Buyzaar Mart. See why families rate it a trusted local choice.",
  keywords: [
    "Kanpur grocery shopping review",
    "The Buyzaar Mart review Kanpur",
    "best grocery store Kanpur review",
    "grocery shopping experience Kanpur",
    "supermarket review Kanpur",
    "grocery store rating Kanpur",
    "The Buyzaar Mart Kanpur experience",
    "honest grocery review Kanpur",
    "Kanpur supermarket comparison",
    "grocery shopping Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/kanpur-grocery-shopping-review",
  },
  openGraph: {
    title: "Kanpur Grocery Shopping Review | The Buyzaar Mart Experience",
    description:
      "An honest Kanpur grocery shopping review — pricing, freshness, store experience & billing at The Buyzaar Mart. See why families rate it a trusted local choice.",
    url: "https://www.thebuyzaarmart.com/kanpur/kanpur-grocery-shopping-review",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Kanpur Grocery Shopping Review | The Buyzaar Mart Experience",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanpur Grocery Shopping Review | The Buyzaar Mart Experience",
    description:
      "An honest Kanpur grocery shopping review — pricing, freshness, store experience & billing at The Buyzaar Mart. See why families rate it a trusted local choice.",
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