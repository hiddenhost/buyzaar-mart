import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Opportunity in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
  description:
    "Looking for a profitable franchise opportunity in Faridabad? Partner with The Buyzaar Mart and launch your own grocery & supermarket store. FOCM model, full support, low investment. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/franchise-opportunity-faridabad",
  },
  openGraph: {
    title:
      "Franchise Opportunity in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Looking for a profitable franchise opportunity in Faridabad? Partner with The Buyzaar Mart and launch your own grocery & supermarket store. FOCM model, full support, low investment. Apply now!",
    url: "https://www.thebuyzaarmart.com/faridabad/franchise-opportunity-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Opportunity in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Looking for a profitable franchise opportunity in Faridabad? Partner with The Buyzaar Mart and launch your own grocery & supermarket store. FOCM model, full support, low investment. Apply now!",
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