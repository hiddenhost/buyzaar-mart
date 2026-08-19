import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Best Convenience Store Franchise in Moradabad | The Buyzaar Mart",
  description:
    "Discover the best convenience store franchise in Moradabad with The Buyzaar Mart. Compact formats, strong local demand, and complete brand support.",
  keywords: [
    "best convenience store franchise moradabad",
    "buyzaar mart convenience store",
    "convenience store business moradabad",
    "neighbourhood store franchise UP",
    "small format retail franchise moradabad",
    "24x7 store franchise moradabad",
    "top convenience store brand moradabad",
    "low investment convenience store",
    "best mini mart moradabad",
    "quick shopping store franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/best-convenience-store-franchise-in-moradabad",
  },
  openGraph: {
    title:
      "Best Convenience Store Franchise in Moradabad | The Buyzaar Mart",
    description:
      "Discover the best convenience store franchise in Moradabad with The Buyzaar Mart. Compact formats, strong local demand, and complete brand support.",
    url: "https://www.thebuyzaarmart.com/moradabad/best-convenience-store-franchise-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Convenience Store Franchise in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Convenience Store Franchise in Moradabad | The Buyzaar Mart",
    description:
      "Discover the best convenience store franchise in Moradabad with The Buyzaar Mart. Compact formats, strong local demand, and complete brand support.",
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