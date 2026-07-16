import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Franchise Gurugram | The Buyzaar Mart",
  description:
    "Explore the FOCO model franchise in Gurugram with The Buyzaar Mart. Own the property, let the company operate — a low investment supermarket franchise opportunity.",
  keywords: [
    "FOCO model franchise Gurugram",
    "Buyzaar Mart FOCO franchise",
    "low investment supermarket franchise",
    "franchise owned company operated Gurugram",
    "supermarket franchise Gurugram",
    "low investment supermarket franchise Lucknow",
    "grocery franchise investment NCR",
    "mini mart super mart hyper mart franchise",
    "passive income franchise Gurugram",
    "retail franchise property owners Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/foco-model-franchise-gurugram",
  },
  openGraph: {
    title: "FOCO Model Franchise Gurugram | The Buyzaar Mart",
    description:
      "Explore the FOCO model franchise in Gurugram with The Buyzaar Mart. Own the property, let the company operate — a low investment supermarket franchise opportunity.",
    url: "https://www.thebuyzaarmart.com/gurgaon/foco-model-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Franchise Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Franchise Gurugram | The Buyzaar Mart",
    description:
      "Explore the FOCO model franchise in Gurugram with The Buyzaar Mart. Own the property, let the company operate — a low investment supermarket franchise opportunity.",
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