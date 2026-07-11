import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Small Supermarket Franchise in Lucknow | The Buyzaar Mart",
  description:
    "Start a small supermarket franchise in Lucknow with The Buyzaar Mart. Compact Mini Mart and Super Mart formats, FOCO and FOCM options, low investment and full support.",
  keywords: [
    "small supermarket franchise Lucknow",
    "mini mart franchise Lucknow",
    "compact grocery franchise Lucknow",
    "The Buyzaar Mart small format",
    "low investment supermarket franchise",
    "grocery franchise business Lucknow",
    "retail franchise Uttar Pradesh",
    "small format grocery store franchise",
    "compact store franchise India",
    "mini supermarket business Lucknow",
    "small space retail franchise",
    "budget supermarket franchise UP",
    "small footprint grocery franchise",
    "compact retail business Lucknow",
    "entry level supermarket franchise India",
    "small investment grocery store",
    "neighbourhood mini mart franchise",
    "small scale retail franchise Lucknow",
    "compact FMCG store franchise",
    "small grocery business opportunity UP",
    "low space requirement franchise",
    "Buyzaar Mart Mini Mart format",
    "small format retail investment India",
    "first time franchise small store",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/small-supermarket-franchise-in-lucknow",
  },
  openGraph: {
    title: "Small Supermarket Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Start a small supermarket franchise in Lucknow with The Buyzaar Mart. Compact Mini Mart and Super Mart formats, FOCO and FOCM options, low investment and full support.",
    url: "https://www.thebuyzaarmart.com/lucknow/small-supermarket-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Small Supermarket Franchise in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Supermarket Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Start a small supermarket franchise in Lucknow with The Buyzaar Mart. Compact Mini Mart and Super Mart formats, FOCO and FOCM options, low investment and full support.",
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