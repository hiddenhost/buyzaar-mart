import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Business Franchise Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
  description:
    "Start your own retail business franchise in Lucknow with The Buyzaar Mart. Choose Mini Mart or Super Mart under FOCM or FOCO model with full brand support, POS technology & training. Apply at thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/retail-business-franchise-in-lucknow",
  },
  openGraph: {
    title: "Retail Business Franchise Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Start your own retail business franchise in Lucknow with The Buyzaar Mart. Choose Mini Mart or Super Mart under FOCM or FOCO model with full brand support, POS technology & training. Apply at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/lucknow/retail-business-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Business Franchise Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Business Franchise Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Start your own retail business franchise in Lucknow with The Buyzaar Mart. Choose Mini Mart or Super Mart under FOCM or FOCO model with full brand support, POS technology & training. Apply at thebuyzaarmart.com.",
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