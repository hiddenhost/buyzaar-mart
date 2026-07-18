import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Mart Franchise in Gurgaon | Buyzaar Mart",
  description:
    "Open a neighbourhood mart franchise in Gurgaon with The Buyzaar Mart. FOCM model — you own, we manage your community store. FSSAI licensed. Call 9217991727 now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/neighbourhood-mart-franchise-gurgaon",
  },
  openGraph: {
    title: "Neighbourhood Mart Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Open a neighbourhood mart franchise in Gurgaon with The Buyzaar Mart. FOCM model — you own, we manage your community store. FSSAI licensed. Call 9217991727 now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/neighbourhood-mart-franchise-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise in Gurgaon | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Mart Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Open a neighbourhood mart franchise in Gurgaon with The Buyzaar Mart. FOCM model — you own, we manage your community store. FSSAI licensed. Call 9217991727 now!",
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