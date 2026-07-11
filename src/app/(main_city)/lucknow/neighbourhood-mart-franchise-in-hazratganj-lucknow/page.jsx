import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Mart Franchise in Hazratganj, Lucknow | The Buyzaar Mart",
  description:
    "Open a neighbourhood grocery franchise in Hazratganj, Lucknow with The Buyzaar Mart. FOCO and FOCM models, Mini Mart and Super Mart formats, full brand support.",
  keywords: [
    "neighbourhood mart franchise Hazratganj",
    "grocery franchise Hazratganj Lucknow",
    "mini mart franchise Lucknow",
    "The Buyzaar Mart Hazratganj",
    "supermarket franchise Hazratganj",
    "FMCG franchise Hazratganj Lucknow",
    "retail franchise opportunity Lucknow",
    "premium locality franchise Lucknow",
    "franchise business Hazratganj market",
    "grocery store Hazratganj commercial area",
    "Super Mart franchise Hazratganj",
    "high footfall franchise Hazratganj",
    "retail investment Hazratganj Lucknow",
    "FOCO franchise Hazratganj",
    "FOCM franchise Hazratganj",
    "commercial hub grocery franchise Lucknow",
    "organized retail Hazratganj",
    "franchise property Hazratganj",
    "grocery franchise near me Hazratganj",
    "Buyzaar Mart premium locality Lucknow",
    "upscale retail franchise Lucknow",
    "local grocery brand Hazratganj",
    "franchise opportunity central Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/neighbourhood-mart-franchise-in-hazratganj-lucknow",
  },
  openGraph: {
    title: "Neighbourhood Mart Franchise in Hazratganj, Lucknow | The Buyzaar Mart",
    description:
      "Open a neighbourhood grocery franchise in Hazratganj, Lucknow with The Buyzaar Mart. FOCO and FOCM models, Mini Mart and Super Mart formats, full brand support.",
    url: "https://www.thebuyzaarmart.com/lucknow/neighbourhood-mart-franchise-in-hazratganj-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise in Hazratganj, Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Mart Franchise in Hazratganj, Lucknow | The Buyzaar Mart",
    description:
      "Open a neighbourhood grocery franchise in Hazratganj, Lucknow with The Buyzaar Mart. FOCO and FOCM models, Mini Mart and Super Mart formats, full brand support.",
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
