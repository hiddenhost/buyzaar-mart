import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Online Grocery Store in Kanpur | The Buyzaar Mart Franchise Opportunity",
  description:
    "Discover The Buyzaar Mart's online-enabled grocery store opportunity in Kanpur. Explore Mini Mart, Super Mart, Hyper Mart formats, investment, and technology support.",
  keywords: [
    "online grocery store Kanpur",
    "Buyzaar Mart Kanpur",
    "grocery franchise Kanpur",
    "POS enabled grocery store",
    "Mini Mart Super Mart Hyper Mart Kanpur",
    "FOCM FOCO franchise Kanpur",
    "grocery store investment Kanpur",
    "online grocery store in Kanpur",
    "online grocery shopping in Kanpur",
    "online grocery delivery in Kanpur",
    "grocery delivery in Kanpur",
    "grocery home delivery in Kanpur",
    "buy grocery online in Kanpur",
    "grocery shopping online Kanpur",
    "online supermarket in Kanpur",
    "online grocery shop in Kanpur",
    "best online grocery store in Kanpur",
    "best online grocery shopping in Kanpur",
    "best grocery delivery in Kanpur",
    "grocery delivery near me Kanpur",
    "online grocery near me Kanpur",
    "order groceries online Kanpur",
    "grocery products online Kanpur",
    "buy groceries online Kanpur",
    "online daily needs store Kanpur",
    "daily essentials online Kanpur",
    "daily needs online Kanpur",
    "fresh grocery delivery Kanpur",
    "online fruits and vegetables Kanpur",
    "monthly grocery shopping online Kanpur",
    "doorstep grocery delivery Kanpur",
    "same day grocery delivery Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/online-grocery-store-in-kanpur",
  },
  openGraph: {
    title: "Online Grocery Store in Kanpur | The Buyzaar Mart Franchise Opportunity",
    description:
      "Discover The Buyzaar Mart's online-enabled grocery store opportunity in Kanpur. Explore Mini Mart, Super Mart, Hyper Mart formats, investment, and technology support.",
    url: "https://www.thebuyzaarmart.com/kanpur/online-grocery-store-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Online Grocery Store in Kanpur | The Buyzaar Mart Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Grocery Store in Kanpur | The Buyzaar Mart Franchise Opportunity",
    description:
      "Discover The Buyzaar Mart's online-enabled grocery store opportunity in Kanpur. Explore Mini Mart, Super Mart, Hyper Mart formats, investment, and technology support.",
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