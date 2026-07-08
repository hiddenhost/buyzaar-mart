import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Above 15 Lakh in Prayagraj | Buyzaar Mart",
  description:
    "Explore a mart franchise investment above 15 lakh in Prayagraj with Buyzaar Mart. Larger store formats, wider product range, and strong franchise support.",
  keywords: [
    "mart franchise above 15 lakh Prayagraj",
    "Buyzaar Mart franchise",
    "high investment franchise India",
    "large format grocery franchise",
    "supermarket franchise investment Prayagraj",
    "franchise business above 15 lakh",
    "retail franchise investment UP",
    "big mart franchise Prayagraj",
    "grocery franchise scale investment",
    "franchise growth investment India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/mart-franchise-above-15-lakh-prayagraj",
  },
  openGraph: {
    title: "Mart Franchise Above 15 Lakh in Prayagraj | Buyzaar Mart",
    description:
      "Explore a mart franchise investment above 15 lakh in Prayagraj with Buyzaar Mart. Larger store formats, wider product range, and strong franchise support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/mart-franchise-above-15-lakh-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Above 15 Lakh in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Above 15 Lakh in Prayagraj | Buyzaar Mart",
    description:
      "Explore a mart franchise investment above 15 lakh in Prayagraj with Buyzaar Mart. Larger store formats, wider product range, and strong franchise support.",
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