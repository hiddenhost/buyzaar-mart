import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart Franchise in Amroha | Supermarket Franchise from ₹15 Lakh",
  description:
    "Start a Buyzaar Mart supermarket franchise in Amroha. FOCM and FOCO models, POS, training, inventory assurance and full support. Total investment from ₹15 lakh. Apply today.",
  keywords: [
    "buyzaar mart franchise amroha",
    "buyzaar mart franchise in amroha",
    "the buyzaar mart",
    "supermarket franchise in amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "buyzaar mart franchise cost",
    "buyzaar mart franchise details",
    "buyzaar mart franchise uttar pradesh",
    "supermarket franchise uttar pradesh",
    "supermarket franchise in india",
    "FOCM franchise amroha",
    "FOCO franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "grocery franchise 15 lakh",
    "low investment supermarket franchise",
    "franchise business opportunity amroha",
    "organised retail franchise amroha",
    "neighbourhood supermarket franchise",
    "best franchise to open in amroha",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-amroha",
  },
  openGraph: {
    title:
      "Buyzaar Mart Franchise in Amroha | Supermarket Franchise from ₹15 Lakh",
    description:
      "Start a Buyzaar Mart supermarket franchise in Amroha. FOCM and FOCO models, POS, training, inventory assurance and full support. Total investment from ₹15 lakh. Apply today.",
    url: "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Amroha | Supermarket Franchise from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Franchise in Amroha | Supermarket Franchise from ₹15 Lakh",
    description:
      "Start a Buyzaar Mart supermarket franchise in Amroha. FOCM and FOCO models, POS, training, inventory assurance and full support. Total investment from ₹15 lakh. Apply today.",
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