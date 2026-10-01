import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Apply Gorakhpur | From ₹15 Lakh",
  description:
    "Apply for a Buyzaar Mart franchise in Gorakhpur. Investment from ₹15 lakh, FOCM/FOCO models, POS billing and full launch support. Apply now.",
  keywords: [
    "Buyzaar Mart franchise apply Gorakhpur",
    "Buyzaar Mart franchise Gorakhpur",
    "The Buyzaar Mart",
    "grocery franchise in Gorakhpur",
    "supermarket franchise Gorakhpur",
    "apply for grocery franchise Gorakhpur",
    "grocery franchise Uttar Pradesh",
    "grocery franchise 15 lakh",
    "low investment grocery franchise",
    "FOCM franchise Gorakhpur",
    "FOCO franchise Gorakhpur",
    "FOFO franchise India",
    "Mini Mart franchise Gorakhpur",
    "Super Mart franchise Gorakhpur",
    "Hyper Mart franchise Gorakhpur",
    "retail franchise Gorakhpur",
    "FMCG store franchise",
    "neighborhood supermarket franchise",
    "grocery store franchise in India",
    "franchise application process Gorakhpur",
    "supermarket franchise cost India",
    "Purvanchal retail franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-franchise-apply-gorakhpur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Apply Gorakhpur | From ₹15 Lakh",
    description:
      "Apply for a Buyzaar Mart franchise in Gorakhpur. Investment from ₹15 lakh, FOCM/FOCO models, POS billing and full launch support. Apply now.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-franchise-apply-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Apply Gorakhpur | From ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Apply Gorakhpur | From ₹15 Lakh",
    description:
      "Apply for a Buyzaar Mart franchise in Gorakhpur. Investment from ₹15 lakh, FOCM/FOCO models, POS billing and full launch support. Apply now.",
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