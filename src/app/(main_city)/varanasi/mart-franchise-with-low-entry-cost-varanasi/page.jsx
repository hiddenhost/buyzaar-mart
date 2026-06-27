import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise with Low Entry Cost in Varanasi | The Buyzaar Mart",
  description:
    "Start a mart franchise with low entry cost in Varanasi. The Buyzaar Mart offers affordable setup, POS billing, and brand support for new entrepreneurs.",
  keywords: [
    "mart franchise low entry cost Varanasi",
    "affordable mart franchise",
    "The Buyzaar Mart Varanasi",
    "low investment retail franchise",
    "budget mart business Varanasi",
    "small capital franchise opportunity",
    "low cost retail business UP",
    "mart franchise financing",
    "entry level franchise Varanasi",
    "POS billing mart franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/mart-franchise-with-low-entry-cost-varanasi",
  },
  openGraph: {
    title: "Mart Franchise with Low Entry Cost in Varanasi | The Buyzaar Mart",
    description:
      "Start a mart franchise with low entry cost in Varanasi. The Buyzaar Mart offers affordable setup, POS billing, and brand support for new entrepreneurs.",
    url: "https://www.thebuyzaarmart.com/varanasi/mart-franchise-with-low-entry-cost-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise with Low Entry Cost in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise with Low Entry Cost in Varanasi | The Buyzaar Mart",
    description:
      "Start a mart franchise with low entry cost in Varanasi. The Buyzaar Mart offers affordable setup, POS billing, and brand support for new entrepreneurs.",
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