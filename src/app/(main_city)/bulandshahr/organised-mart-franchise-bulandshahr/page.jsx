import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Mart Franchise in Bulandshahr | The Buyzaar Mart",
  description:
    "Start an organised mart franchise in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, POS billing, trained staff, 18–20% stated margin and support.",
  keywords: [
    "organised mart franchise Bulandshahr",
    "organized mart franchise Bulandshahr",
    "organised retail franchise Bulandshahr",
    "organised mart franchise India",
    "mart franchise Bulandshahr",
    "Buyzaar Mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "super mart franchise Bulandshahr",
    "hyper mart franchise Bulandshahr",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "franchise opportunity Bulandshahr",
    "franchise business Bulandshahr",
    "branded mart franchise",
    "low investment mart franchise",
    "mart franchise under 20 lakh",
    "mart franchise Uttar Pradesh",
    "supermarket franchise NCR",
    "FOCM mart franchise",
    "franchise owned company managed",
    "POS enabled mart franchise",
    "organised vs unorganised retail",
    "mart franchise in Khurja Sikandrabad Siyana",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/organised-mart-franchise-bulandshahr",
  },
  openGraph: {
    title: "Organised Mart Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Start an organised mart franchise in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, POS billing, trained staff, 18–20% stated margin and support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/organised-mart-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Start an organised mart franchise in Bulandshahr with The Buyzaar Mart. Total investment from ₹15 Lakh, POS billing, trained staff, 18–20% stated margin and support.",
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