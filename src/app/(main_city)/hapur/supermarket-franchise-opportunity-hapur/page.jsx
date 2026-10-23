import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity Hapur | Buyzaar Mart",
  description:
    "Open a supermarket franchise in Hapur with The Buyzaar Mart. Super Mart and Hyper Mart formats, FOCM and FOCO models, full support. Total investment from ₹15 lakh. Apply now.",
  keywords: [
    "supermarket franchise opportunity hapur",
    "supermarket franchise in hapur",
    "supermarket business hapur",
    "grocery supermarket franchise hapur",
    "super mart franchise hapur",
    "hyper mart franchise hapur",
    "mini mart franchise hapur",
    "buyzaar mart franchise hapur",
    "the buyzaar mart",
    "FOCM supermarket franchise",
    "FOCO supermarket franchise",
    "supermarket franchise uttar pradesh",
    "supermarket franchise NCR",
    "supermarket franchise western UP",
    "low investment supermarket franchise",
    "supermarket franchise under 20 lakh",
    "organised retail franchise hapur",
    "retail franchise opportunity hapur",
    "franchise business in hapur",
    "how to open a supermarket in hapur",
    "FMCG supermarket franchise india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/supermarket-franchise-opportunity-hapur",
  },
  openGraph: {
    title: "Supermarket Franchise Opportunity Hapur | Buyzaar Mart",
    description:
      "Open a supermarket franchise in Hapur with The Buyzaar Mart. Super Mart and Hyper Mart formats, FOCM and FOCO models, full support. Total investment from ₹15 lakh. Apply now.",
    url: "https://www.thebuyzaarmart.com/hapur/supermarket-franchise-opportunity-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity Hapur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity Hapur | Buyzaar Mart",
    description:
      "Open a supermarket franchise in Hapur with The Buyzaar Mart. Super Mart and Hyper Mart formats, FOCM and FOCO models, full support. Total investment from ₹15 lakh. Apply now.",
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