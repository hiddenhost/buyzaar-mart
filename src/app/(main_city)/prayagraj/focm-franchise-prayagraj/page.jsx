import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise in Prayagraj | The Buyzaar Mart",
  description:
    "Looking for an FOCM franchise in Prayagraj? The Buyzaar Mart offers a company-managed grocery franchise starting at ₹15 Lakh with full setup & support. Apply now!",
  keywords: [
    "FOCM franchise Prayagraj",
    "Buyzaar Mart franchise",
    "grocery franchise Prayagraj",
    "supermarket franchise Prayagraj",
    "franchise owned company managed",
    "retail franchise Uttar Pradesh",
    "Mini Mart franchise Prayagraj",
    "daily needs store franchise",
    "low investment grocery franchise",
    "Prayagraj business opportunity",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/focm-franchise-prayagraj",
  },
  openGraph: {
    title: "FOCM Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Looking for an FOCM franchise in Prayagraj? The Buyzaar Mart offers a company-managed grocery franchise starting at ₹15 Lakh with full setup & support. Apply now!",
    url: "https://www.thebuyzaarmart.com/prayagraj/focm-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Looking for an FOCM franchise in Prayagraj? The Buyzaar Mart offers a company-managed grocery franchise starting at ₹15 Lakh with full setup & support. Apply now!",
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