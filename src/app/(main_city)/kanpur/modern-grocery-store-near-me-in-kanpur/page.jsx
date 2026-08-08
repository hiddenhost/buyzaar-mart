import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Modern Grocery Store Near Me in Kanpur | The Buyzaar Mart",
  description:
    "Searching for a modern grocery store near you in Kanpur? The Buyzaar Mart offers organized shopping, fresh produce & fair pricing across Kanpur localities. Visit today!",
  keywords: [
    "modern grocery store near me Kanpur",
    "grocery store near me Kanpur",
    "modern supermarket Kanpur",
    "organized grocery store Kanpur",
    "best grocery store near me Kanpur",
    "grocery shop near me Kanpur",
    "The Buyzaar Mart Kanpur near me",
    "nearest grocery store Kanpur",
    "modern retail store Kanpur",
    "family grocery store Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/modern-grocery-store-near-me-in-kanpur",
  },
  openGraph: {
    title: "Modern Grocery Store Near Me in Kanpur | The Buyzaar Mart",
    description:
      "Searching for a modern grocery store near you in Kanpur? The Buyzaar Mart offers organized shopping, fresh produce & fair pricing across Kanpur localities. Visit today!",
    url: "https://www.thebuyzaarmart.com/kanpur/modern-grocery-store-near-me-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Modern Grocery Store Near Me in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Grocery Store Near Me in Kanpur | The Buyzaar Mart",
    description:
      "Searching for a modern grocery store near you in Kanpur? The Buyzaar Mart offers organized shopping, fresh produce & fair pricing across Kanpur localities. Visit today!",
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