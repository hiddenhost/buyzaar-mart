import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Mart Franchise in Hapur | The Buyzaar Mart",
  description:
    "Open a FOCO mart franchise in Hapur with The Buyzaar Mart. You provide capital and space; the company operates the mart and shares revenue. Apply today.",
  keywords: [
    "FOCO mart franchise Hapur",
    "FOCO franchise Hapur",
    "franchise owned company operated mart",
    "Buyzaar Mart FOCO Hapur",
    "The Buyzaar Mart franchise Hapur",
    "mart franchise Hapur",
    "supermarket franchise Hapur",
    "company operated mart Hapur",
    "passive income mart franchise",
    "hands-off supermarket franchise",
    "revenue sharing mart franchise",
    "10 year mart franchise agreement",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "organised retail franchise Hapur",
    "retail investment Hapur",
    "supermarket investment Hapur",
    "mart franchise Delhi NCR",
    "mart franchise Uttar Pradesh",
    "grocery mart franchise Hapur",
    "FMCG mart franchise Hapur",
    "managed mart franchise Hapur",
    "supermarket on rent franchise Hapur",
    "best mart franchise in Hapur",
    "franchise business opportunity Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/foco-mart-franchise-hapur",
  },
  openGraph: {
    title: "FOCO Mart Franchise in Hapur | The Buyzaar Mart",
    description:
      "Open a FOCO mart franchise in Hapur with The Buyzaar Mart. You provide capital and space; the company operates the mart and shares revenue. Apply today.",
    url: "https://www.thebuyzaarmart.com/hapur/foco-mart-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Mart Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Mart Franchise in Hapur | The Buyzaar Mart",
    description:
      "Open a FOCO mart franchise in Hapur with The Buyzaar Mart. You provide capital and space; the company operates the mart and shares revenue. Apply today.",
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