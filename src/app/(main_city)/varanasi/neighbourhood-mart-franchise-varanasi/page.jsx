import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Mart Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Open a neighbourhood mart franchise in Varanasi with The Buyzaar Mart. Local-first retail, POS billing, and brand support tailored to residential communities.",
  keywords: [
    "neighbourhood mart franchise Varanasi",
    "The Buyzaar Mart Varanasi",
    "local mart business UP",
    "residential retail franchise",
    "community grocery store Varanasi",
    "neighbourhood retail investment",
    "POS billing mart franchise",
    "local convenience store franchise",
    "small format retail Varanasi",
    "hyperlocal grocery business",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/neighbourhood-mart-franchise-varanasi",
  },
  openGraph: {
    title: "Neighbourhood Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Open a neighbourhood mart franchise in Varanasi with The Buyzaar Mart. Local-first retail, POS billing, and brand support tailored to residential communities.",
    url: "https://www.thebuyzaarmart.com/varanasi/neighbourhood-mart-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Open a neighbourhood mart franchise in Varanasi with The Buyzaar Mart. Local-first retail, POS billing, and brand support tailored to residential communities.",
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