import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Store Franchise Kanpur | The Buyzaar Mart",
  description:
    "Start a convenience store franchise in Kanpur with The Buyzaar Mart. FOCM model explained, minimart vs supermart vs hypermart comparison, investment breakdown & full support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/convenience-store-franchise-in-kanpur",
  },
  openGraph: {
    title: "Convenience Store Franchise Kanpur | The Buyzaar Mart",
    description:
      "Start a convenience store franchise in Kanpur with The Buyzaar Mart. FOCM model explained, minimart vs supermart vs hypermart comparison, investment breakdown & full support. Apply now!",
    url: "https://www.thebuyzaarmart.com/kanpur/convenience-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Store Franchise Kanpur | The Buyzaar Mart",
    description:
      "Start a convenience store franchise in Kanpur with The Buyzaar Mart. FOCM model explained, minimart vs supermart vs hypermart comparison, investment breakdown & full support. Apply now!",
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