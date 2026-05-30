import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Neighbourhood Mart Franchise Lucknow | The Buyzaar Mart – Mini Mart & Super Mart",
  description:
    "Start your own neighbourhood mart franchise in Lucknow with The Buyzaar Mart. Choose from Mini Mart or Super Mart formats under FOCM or FOCO models. Low investment, full company support. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/neighbourhood-mart-franchise-in-lucknow",
  },
  openGraph: {
    title:
      "Neighbourhood Mart Franchise Lucknow | The Buyzaar Mart – Mini Mart & Super Mart",
    description:
      "Start your own neighbourhood mart franchise in Lucknow with The Buyzaar Mart. Choose from Mini Mart or Super Mart formats under FOCM or FOCO models. Low investment, full company support. Apply now.",
    url:
      "https://www.thebuyzaarmart.com/lucknow/neighbourhood-mart-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise Lucknow | The Buyzaar Mart – Mini Mart & Super Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neighbourhood Mart Franchise Lucknow | The Buyzaar Mart – Mini Mart & Super Mart",
    description:
      "Start your own neighbourhood mart franchise in Lucknow with The Buyzaar Mart. Choose from Mini Mart or Super Mart formats under FOCM or FOCO models. Low investment, full company support. Apply now.",
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