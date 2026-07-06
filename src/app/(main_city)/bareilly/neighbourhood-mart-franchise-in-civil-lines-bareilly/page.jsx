import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Mart Franchise in Civil Lines, Bareilly | Buyzaar Mart",
  description:
    "Start a neighbourhood mart franchise in Civil Lines, Bareilly with Buyzaar Mart. Prime location, brand support & strong footfall potential. Enquire now!",
  keywords: [
    "neighbourhood mart franchise Civil Lines",
    "Buyzaar Mart Civil Lines Bareilly",
    "mart franchise Bareilly",
    "grocery store franchise Civil Lines",
    "retail franchise Bareilly",
    "supermarket franchise Civil Lines",
    "organised retail Bareilly",
    "franchise opportunity Civil Lines",
    "local mart franchise India",
    "branded grocery Civil Lines Bareilly",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/neighbourhood-mart-franchise-in-civil-lines-bareilly",
  },
  openGraph: {
    title: "Neighbourhood Mart Franchise in Civil Lines, Bareilly | Buyzaar Mart",
    description:
      "Start a neighbourhood mart franchise in Civil Lines, Bareilly with Buyzaar Mart. Prime location, brand support & strong footfall potential. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/neighbourhood-mart-franchise-in-civil-lines-bareilly",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise in Civil Lines, Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Mart Franchise in Civil Lines, Bareilly | Buyzaar Mart",
    description:
      "Start a neighbourhood mart franchise in Civil Lines, Bareilly with Buyzaar Mart. Prime location, brand support & strong footfall potential. Enquire now!",
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