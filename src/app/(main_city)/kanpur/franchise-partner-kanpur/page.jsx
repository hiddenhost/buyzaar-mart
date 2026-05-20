import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Become a Franchise Partner in Kanpur | The Buyzaar Mart Super Mart & Hyper Mart",
  description:
    "Become a franchise partner in Kanpur with The Buyzaar Mart. Choose from Super Mart or Hyper Mart formats, low investment, full brand support, and 10% revenue sharing. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
  },
  openGraph: {
    title:
      "Become a Franchise Partner in Kanpur | The Buyzaar Mart Super Mart & Hyper Mart",
    description:
      "Become a franchise partner in Kanpur with The Buyzaar Mart. Choose from Super Mart or Hyper Mart formats, low investment, full brand support, and 10% revenue sharing. Apply now.",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Become a Franchise Partner in Kanpur | The Buyzaar Mart Super Mart & Hyper Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Become a Franchise Partner in Kanpur | The Buyzaar Mart Super Mart & Hyper Mart",
    description:
      "Become a franchise partner in Kanpur with The Buyzaar Mart. Choose from Super Mart or Hyper Mart formats, low investment, full brand support, and 10% revenue sharing. Apply now.",
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