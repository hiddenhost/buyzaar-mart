import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Mart in Alambagh, Lucknow | The Buyzaar Mart",
  description:
    "Open a franchise mart in Alambagh, Lucknow with The Buyzaar Mart. FOCO and FOCM models, flexible store formats, high footfall location and full support.",
  keywords: [
    "franchise mart Alambagh Lucknow",
    "grocery franchise Alambagh",
    "mart franchise Alambagh Lucknow",
    "The Buyzaar Mart Alambagh",
    "supermarket franchise Alambagh",
    "FMCG franchise Alambagh",
    "retail franchise opportunity Lucknow",
    "franchise near Charbagh railway station",
    "Alambagh bus station retail franchise",
    "transit hub franchise Lucknow",
    "grocery store Alambagh Main Market",
    "franchise business Alambagh",
    "Super Mart franchise Alambagh",
    "Mini Mart franchise Alambagh",
    "high footfall retail franchise Lucknow",
    "commuter grocery store franchise",
    "franchise opportunity Kanpur Road Lucknow",
    "retail investment Alambagh",
    "FOCO franchise Alambagh",
    "FOCM franchise Alambagh",
    "neighbourhood store Alambagh Lucknow",
    "Buyzaar Mart Lucknow locations",
    "affordable franchise Alambagh",
    "franchise property Alambagh Sector D E",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/franchise-mart-in-alambagh-lucknow",
  },
  openGraph: {
    title: "Franchise Mart in Alambagh, Lucknow | The Buyzaar Mart",
    description:
      "Open a franchise mart in Alambagh, Lucknow with The Buyzaar Mart. FOCO and FOCM models, flexible store formats, high footfall location and full support.",
    url: "https://www.thebuyzaarmart.com/lucknow/franchise-mart-in-alambagh-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Mart in Alambagh, Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Mart in Alambagh, Lucknow | The Buyzaar Mart",
    description:
      "Open a franchise mart in Alambagh, Lucknow with The Buyzaar Mart. FOCO and FOCM models, flexible store formats, high footfall location and full support.",
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