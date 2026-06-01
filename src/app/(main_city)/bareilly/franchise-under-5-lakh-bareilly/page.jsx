import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Under 5 Lakh in Bareilly – Start Your Buyzaar Mart Grocery Store Today",
  description:
    "Looking for a profitable franchise under 5 lakh in Bareilly? The Buyzaar Mart offers a low-investment grocery & supermarket franchise with full setup support, POS system, and supply chain. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/franchise-under-5-lakh-in-bareilly",
  },
  openGraph: {
    title:
      "Franchise Under 5 Lakh in Bareilly – Start Your Buyzaar Mart Grocery Store Today",
    description:
      "Looking for a profitable franchise under 5 lakh in Bareilly? The Buyzaar Mart offers a low-investment grocery & supermarket franchise with full setup support, POS system, and supply chain. Apply now!",
    url:
      "https://www.thebuyzaarmart.com/bareilly/franchise-under-5-lakh-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Under 5 Lakh in Bareilly – Start Your Buyzaar Mart Grocery Store Today",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Under 5 Lakh in Bareilly – Start Your Buyzaar Mart Grocery Store Today",
    description:
      "Looking for a profitable franchise under 5 lakh in Bareilly? The Buyzaar Mart offers a low-investment grocery & supermarket franchise with full setup support, POS system, and supply chain. Apply now!",
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