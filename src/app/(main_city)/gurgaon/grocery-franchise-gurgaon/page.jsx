import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise in Gurgaon | The Buyzaar Mart",
  description:
    "Start a grocery franchise in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage your grocery store daily. FSSAI licensed. Call 9217991727 today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-in-gurgaon",
  },
  openGraph: {
    title: "Grocery Franchise in Gurgaon | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage your grocery store daily. FSSAI licensed. Call 9217991727 today!",
    url: "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-in-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Gurgaon | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise in Gurgaon | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage your grocery store daily. FSSAI licensed. Call 9217991727 today!",
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