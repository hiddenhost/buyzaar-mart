import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "How to Open a Supermarket Franchise in Rampur | Buyzaar Mart",
  description:
    "Learn how to open a supermarket franchise in Rampur with The Buyzaar Mart. Total investment from ₹15 Lakh, layout planning, POS billing, training and launch support.",
  keywords: [
    "how to open supermarket franchise in Rampur",
    "supermarket franchise Rampur",
    "open supermarket in Rampur",
    "supermarket franchise Uttar Pradesh",
    "supermarket franchise near Moradabad",
    "Buyzaar Mart franchise Rampur",
    "mini mart franchise Rampur",
    "super mart franchise Rampur",
    "hyper mart franchise Rampur",
    "mart franchise Rampur",
    "grocery franchise Rampur",
    "retail franchise Rampur",
    "franchise opportunity Rampur",
    "franchise business Rampur",
    "low investment supermarket franchise",
    "supermarket franchise under 20 lakh",
    "self service supermarket franchise",
    "FOCM supermarket franchise",
    "franchise owned company managed",
    "POS enabled supermarket",
    "supermarket franchise requirements",
    "supermarket franchise documents required",
    "supermarket layout planning",
    "supermarket franchise in Bilaspur Milak Suar",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-open-supermarket-franchise-in-rampur",
  },
  openGraph: {
    title: "How to Open a Supermarket Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Rampur with The Buyzaar Mart. Total investment from ₹15 Lakh, layout planning, POS billing, training and launch support.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-open-supermarket-franchise-in-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Supermarket Franchise in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Supermarket Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Rampur with The Buyzaar Mart. Total investment from ₹15 Lakh, layout planning, POS billing, training and launch support.",
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