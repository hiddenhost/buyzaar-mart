import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Mart Franchise in Mathura | The Buyzaar Mart",
  description:
    "Start an organised mart franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh with POS, SOPs, supply chain, training and an 18-20% margin. Apply now.",
  keywords: [
    "organised mart franchise Mathura",
    "organized mart franchise Mathura",
    "organised retail franchise Mathura",
    "mart franchise Mathura",
    "supermarket franchise Mathura",
    "grocery franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "The Buyzaar Mart",
    "mini mart franchise Mathura",
    "super mart franchise Mathura",
    "hyper mart franchise Mathura",
    "low investment mart franchise",
    "mart franchise under 20 lakh",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "branded mart franchise Mathura",
    "retail franchise Mathura",
    "POS enabled mart franchise",
    "mart franchise with full support",
    "mart franchise with training",
    "franchise owned company managed",
    "organised retail Uttar Pradesh",
    "neighbourhood mart franchise",
    "profitable mart franchise Mathura",
    "how to open an organised mart in Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/organised-mart-franchise-mathura",
  },
  openGraph: {
    title: "Organised Mart Franchise in Mathura | The Buyzaar Mart",
    description:
      "Start an organised mart franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh with POS, SOPs, supply chain, training and an 18-20% margin. Apply now.",
    url: "https://www.thebuyzaarmart.com/mathura/organised-mart-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise in Mathura | The Buyzaar Mart",
    description:
      "Start an organised mart franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh with POS, SOPs, supply chain, training and an 18-20% margin. Apply now.",
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