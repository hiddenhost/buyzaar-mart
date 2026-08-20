import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Buyzaar Mart Retail Partner Hapur | Become a Franchise Partner",
  description:
    "Become a Buyzaar Mart retail partner in Hapur. Explore store formats, franchise models, partner benefits, and the complete application process today.",
  keywords: [
    "buyzaar mart retail partner Hapur",
    "retail partner Hapur",
    "franchise partner Hapur",
    "buyzaar mart Hapur",
    "grocery retail partner Hapur",
    "supermarket partner Hapur",
    "mini mart partner Hapur",
    "super mart partner Hapur",
    "hyper mart partner Hapur",
    "FOCM retail partner",
    "FOCO retail partner",
    "retail business partner Uttar Pradesh",
    "organised retail partner Hapur",
    "neighbourhood store partner Hapur",
    "franchise investment partner Hapur",
    "retail franchise Hapur",
    "buyzaar mart franchise apply Hapur",
    "franchise support partner Hapur",
    "retail business opportunity Hapur",
    "become a franchise partner Hapur",
    "daily needs store partner Hapur",
    "retail growth partner Hapur",
    "franchise partner benefits Hapur",
    "apply retail partnership Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-retail-partner-hapur",
  },
  openGraph: {
    title: "Buyzaar Mart Retail Partner Hapur | Become a Franchise Partner",
    description:
      "Become a Buyzaar Mart retail partner in Hapur. Explore store formats, franchise models, partner benefits, and the complete application process today.",
    url: "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-retail-partner-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Partner Hapur | Become a Franchise Partner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Retail Partner Hapur | Become a Franchise Partner",
    description:
      "Become a Buyzaar Mart retail partner in Hapur. Explore store formats, franchise models, partner benefits, and the complete application process today.",
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