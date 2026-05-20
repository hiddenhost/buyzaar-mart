import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Apply for Retail Franchise Kanpur | The Buyzaar Mart – Start from ₹15 Lakh",
  description:
    "Want to apply for a retail franchise in Kanpur? The Buyzaar Mart offers a low-investment supermarket franchise with full setup, POS support, and brand backing. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
  },
  openGraph: {
    title:
      "Apply for Retail Franchise Kanpur | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Want to apply for a retail franchise in Kanpur? The Buyzaar Mart offers a low-investment supermarket franchise with full setup, POS support, and brand backing. Apply now.",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Apply for Retail Franchise Kanpur | The Buyzaar Mart – Start from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Apply for Retail Franchise Kanpur | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Want to apply for a retail franchise in Kanpur? The Buyzaar Mart offers a low-investment supermarket franchise with full setup, POS support, and brand backing. Apply now.",
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