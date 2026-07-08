import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise With Training Support in Prayagraj | Buyzaar Mart",
  description:
    "Start a mart franchise in Prayagraj with complete training support from Buyzaar Mart. Learn store operations, inventory, and management with expert guidance.",
  keywords: [
    "mart franchise training support Prayagraj",
    "Buyzaar Mart franchise",
    "franchise with training India",
    "retail franchise support Prayagraj",
    "first-time franchise owner training",
    "grocery franchise training UP",
    "franchise onboarding support Prayagraj",
    "store management training franchise",
    "retail business training India",
    "franchise support system Prayagraj",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/mart-franchise-with-training-support-prayagraj",
  },
  openGraph: {
    title: "Mart Franchise With Training Support in Prayagraj | Buyzaar Mart",
    description:
      "Start a mart franchise in Prayagraj with complete training support from Buyzaar Mart. Learn store operations, inventory, and management with expert guidance.",
    url: "https://www.thebuyzaarmart.com/prayagraj/mart-franchise-with-training-support-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise With Training Support in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise With Training Support in Prayagraj | Buyzaar Mart",
    description:
      "Start a mart franchise in Prayagraj with complete training support from Buyzaar Mart. Learn store operations, inventory, and management with expert guidance.",
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