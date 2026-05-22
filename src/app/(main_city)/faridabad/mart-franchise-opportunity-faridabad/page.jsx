import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mart Franchise Opportunity in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
  description:
    "Looking for a mart franchise opportunity in Faridabad? Join The Buyzaar Mart – India's trusted grocery & supermarket franchise with FOCM/FOCO models, full setup support, POS system, and hassle-free inventory management. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/local-mart-franchise-faridabad",
  },
  openGraph: {
    title:
      "Mart Franchise Opportunity in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Looking for a mart franchise opportunity in Faridabad? Join The Buyzaar Mart – India's trusted grocery & supermarket franchise with FOCM/FOCO models, full setup support, POS system, and hassle-free inventory management. Apply now!",
    url: "https://www.thebuyzaarmart.com/faridabad/local-mart-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mart Franchise Opportunity in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Looking for a mart franchise opportunity in Faridabad? Join The Buyzaar Mart – India's trusted grocery & supermarket franchise with FOCM/FOCO models, full setup support, POS system, and hassle-free inventory management. Apply now!",
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