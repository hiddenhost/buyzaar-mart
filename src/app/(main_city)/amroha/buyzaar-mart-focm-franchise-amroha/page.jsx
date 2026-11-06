import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart FOCM Franchise in Amroha | Franchise Owned Company Managed",
  description:
    "Start a Buyzaar Mart FOCM franchise in Amroha. You own the store, the company manages systems, training and support. Total investment from ₹15 lakh. Call +91 9217991727.",
  keywords: [
    "buyzaar mart focm franchise amroha",
    "focm franchise amroha",
    "focm model amroha",
    "franchise owned company managed",
    "buyzaar mart focm model",
    "focm mart franchise amroha",
    "company managed supermarket franchise",
    "buyzaar mart franchise amroha",
    "the buyzaar mart",
    "supermarket franchise in amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "supermarket franchise uttar pradesh",
    "focm franchise uttar pradesh",
    "focm franchise india",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "grocery franchise 15 lakh",
    "low investment supermarket franchise",
    "five year franchise agreement",
    "franchise business opportunity amroha",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-focm-franchise-amroha",
  },
  openGraph: {
    title:
      "Buyzaar Mart FOCM Franchise in Amroha | Franchise Owned Company Managed",
    description:
      "Start a Buyzaar Mart FOCM franchise in Amroha. You own the store, the company manages systems, training and support. Total investment from ₹15 lakh. Call +91 9217991727.",
    url: "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-focm-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCM Franchise in Amroha | Franchise Owned Company Managed",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart FOCM Franchise in Amroha | Franchise Owned Company Managed",
    description:
      "Start a Buyzaar Mart FOCM franchise in Amroha. You own the store, the company manages systems, training and support. Total investment from ₹15 lakh. Call +91 9217991727.",
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