import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Low Investment Franchise in Greater Noida | The Buyzaar Mart",
  description:
    "Start your own grocery & supermarket franchise in Greater Noida with The Buyzaar",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/low-investment-franchise-in-greater-noida",
  },
  openGraph: {
    title: "Low Investment Franchise in Greater Noida | The Buyzaar Mart",
    description:
      "Start your own grocery & supermarket franchise in Greater Noida with The Buyzaar",
    url: "https://www.thebuyzaarmart.com/greater-noida/low-investment-franchise-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Franchise in Greater Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Investment Franchise in Greater Noida | The Buyzaar Mart",
    description:
      "Start your own grocery & supermarket franchise in Greater Noida with The Buyzaar",
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