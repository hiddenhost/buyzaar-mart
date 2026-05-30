import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mart Franchise Opportunity Lucknow | The Buyzaar Mart – Invest from ₹15 Lakh",
  description:
    "Explore the best mart franchise opportunity in Lucknow with The Buyzaar Mart. Choose Mini Mart or Super Mart under FOCM or FOCO model. Full investment breakdown, brand support & training. Apply now at thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/mart-franchise-in-lucknow",
  },
  openGraph: {
    title:
      "Mart Franchise Opportunity Lucknow | The Buyzaar Mart – Invest from ₹15 Lakh",
    description:
      "Explore the best mart franchise opportunity in Lucknow with The Buyzaar Mart. Choose Mini Mart or Super Mart under FOCM or FOCO model. Full investment breakdown, brand support & training. Apply now at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/lucknow/mart-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity Lucknow | The Buyzaar Mart – Invest from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mart Franchise Opportunity Lucknow | The Buyzaar Mart – Invest from ₹15 Lakh",
    description:
      "Explore the best mart franchise opportunity in Lucknow with The Buyzaar Mart. Choose Mini Mart or Super Mart under FOCM or FOCO model. Full investment breakdown, brand support & training. Apply now at thebuyzaarmart.com.",
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