import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Neighborhood Mart Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
  description:
    "Start a highly profitable neighborhood mart franchise in Greater Noida with The Buyzaar Mart. Explore our risk-free FOCM (Franchise Owned, Company Managed) model with 18-20% gross margins.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/neighborhood-mart-franchise-in-greater-noida",
  },
  openGraph: {
    title:
      "Neighborhood Mart Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
    description:
      "Start a highly profitable neighborhood mart franchise in Greater Noida with The Buyzaar Mart. Explore our risk-free FOCM (Franchise Owned, Company Managed) model with 18-20% gross margins.",
    url: "https://www.thebuyzaarmart.com/greater-noida/neighborhood-mart-franchise-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighborhood Mart Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neighborhood Mart Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
    description:
      "Start a highly profitable neighborhood mart franchise in Greater Noida with The Buyzaar Mart. Explore our risk-free FOCM (Franchise Owned, Company Managed) model with 18-20% gross margins.",
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