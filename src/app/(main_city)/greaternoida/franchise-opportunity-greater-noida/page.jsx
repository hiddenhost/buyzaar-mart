import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Opportunity Greater Noida | The Buyzaar Mart – Supermarket Mart Franchise",
  description:
    "Explore the best franchise opportunity in Greater Noida with The Buyzaar Mart. Own a Mini Mart, Super Mart or Hyper Mart under the FOCM model. Investment from ₹15 Lakh with full company support. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/franchise-opportunity-in-greater-noida",
  },
  openGraph: {
    title:
      "Franchise Opportunity Greater Noida | The Buyzaar Mart – Supermarket Mart Franchise",
    description:
      "Explore the best franchise opportunity in Greater Noida with The Buyzaar Mart. Own a Mini Mart, Super Mart or Hyper Mart under the FOCM model. Investment from ₹15 Lakh with full company support. Apply now.",
    url: "https://www.thebuyzaarmart.com/greater-noida/franchise-opportunity-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity Greater Noida | The Buyzaar Mart – Supermarket Mart Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Opportunity Greater Noida | The Buyzaar Mart – Supermarket Mart Franchise",
    description:
      "Explore the best franchise opportunity in Greater Noida with The Buyzaar Mart. Own a Mini Mart, Super Mart or Hyper Mart under the FOCM model. Investment from ₹15 Lakh with full company support. Apply now.",
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