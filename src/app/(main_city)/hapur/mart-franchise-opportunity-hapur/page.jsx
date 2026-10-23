import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity Hapur | Buyzaar Mart FOCM & FOCO",
  description:
    "Explore a mart franchise opportunity in Hapur with The Buyzaar Mart. FOCM and FOCO models, Mini, Super and Hyper Mart formats, total investment from ₹15 lakh. Apply today.",
  keywords: [
    "mart franchise opportunity hapur",
    "mart franchise in hapur",
    "supermarket franchise hapur",
    "grocery mart franchise hapur",
    "retail mart franchise hapur",
    "buyzaar mart franchise hapur",
    "the buyzaar mart",
    "FOCM mart franchise hapur",
    "FOCO mart franchise hapur",
    "franchise owned company managed",
    "franchise owned company operated",
    "mini mart franchise hapur",
    "super mart franchise hapur",
    "hyper mart franchise hapur",
    "supermarket franchise uttar pradesh",
    "mart franchise western UP",
    "mart franchise NCR",
    "low investment mart franchise",
    "mart franchise under 20 lakh",
    "neighbourhood mart franchise",
    "FMCG mart franchise",
    "franchise business in hapur",
    "how to open a mart in hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/mart-franchise-opportunity-hapur",
  },
  openGraph: {
    title: "Mart Franchise Opportunity Hapur | Buyzaar Mart FOCM & FOCO",
    description:
      "Explore a mart franchise opportunity in Hapur with The Buyzaar Mart. FOCM and FOCO models, Mini, Super and Hyper Mart formats, total investment from ₹15 lakh. Apply today.",
    url: "https://www.thebuyzaarmart.com/hapur/mart-franchise-opportunity-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity Hapur | Buyzaar Mart FOCM & FOCO",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity Hapur | Buyzaar Mart FOCM & FOCO",
    description:
      "Explore a mart franchise opportunity in Hapur with The Buyzaar Mart. FOCM and FOCO models, Mini, Super and Hyper Mart formats, total investment from ₹15 lakh. Apply today.",
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