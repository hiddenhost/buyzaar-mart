import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise for Working Professionals in Gurugram | Buyzaar Mart",
  description:
    "Own a grocery franchise in Gurugram as a working professional. Buyzaar Mart's FOCM model handles daily operations. Investment from ₹15 Lakh. Apply now!",
  keywords: [
    "grocery franchise for working professionals Gurugram",
    "Buyzaar Mart Gurugram",
    "passive income franchise India",
    "FOCM franchise model",
    "low investment supermarket franchise",
    "grocery franchise Gurugram",
    "retail business franchise Gurugram",
    "side business for salaried employees",
    "low investment supermarket franchise Lucknow",
    "Mini Mart Super Mart Hyper Mart franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-for-working-professional-gurugram",
  },
  openGraph: {
    title: "Grocery Franchise for Working Professionals in Gurugram | Buyzaar Mart",
    description:
      "Own a grocery franchise in Gurugram as a working professional. Buyzaar Mart's FOCM model handles daily operations. Investment from ₹15 Lakh. Apply now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-for-working-professional-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise for Working Professionals in Gurugram | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise for Working Professionals in Gurugram | Buyzaar Mart",
    description:
      "Own a grocery franchise in Gurugram as a working professional. Buyzaar Mart's FOCM model handles daily operations. Investment from ₹15 Lakh. Apply now!",
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