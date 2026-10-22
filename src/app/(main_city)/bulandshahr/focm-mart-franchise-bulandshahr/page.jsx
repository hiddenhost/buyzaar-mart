import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Mart Franchise in Bulandshahr | The Buyzaar Mart",
  description:
    "Open a FOCM mart franchise in Bulandshahr with The Buyzaar Mart. Investment from ₹15 Lakh, 18–20% stated margin, full setup, POS and training support.",
  keywords: [
    "FOCM mart franchise Bulandshahr",
    "FOCM franchise Bulandshahr",
    "Buyzaar Mart franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "super mart franchise Bulandshahr",
    "hyper mart franchise Bulandshahr",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "franchise owned company managed",
    "FOCM mart franchise India",
    "low investment mart franchise",
    "grocery franchise under 20 lakh",
    "mart franchise Uttar Pradesh",
    "supermarket franchise UP",
    "supermarket franchise NCR",
    "managed grocery franchise India",
    "franchise with training and support",
    "neighbourhood mart franchise",
    "organised retail franchise Bulandshahr",
    "franchise business opportunity Bulandshahr",
    "mart franchise in Khurja Sikandrabad",
    "FOCM vs independent store",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/focm-mart-franchise-bulandshahr",
  },
  openGraph: {
    title: "FOCM Mart Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Open a FOCM mart franchise in Bulandshahr with The Buyzaar Mart. Investment from ₹15 Lakh, 18–20% stated margin, full setup, POS and training support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/focm-mart-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Mart Franchise in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Mart Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Open a FOCM mart franchise in Bulandshahr with The Buyzaar Mart. Investment from ₹15 Lakh, 18–20% stated margin, full setup, POS and training support.",
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