import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mart Franchise Opportunity in Bareilly – The Buyzaar Mart | Mini Mart from 18.5",
  description:
    "Explore the best mart franchise opportunity in Bareilly with The Buyzaar Mart. Full Mini Mart investment breakdown, FOCM model, 18–20% margins & 50+ FMCG brands. Apply now at 18.5!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/mart-franchise-opportunity-in-bareilly",
  },
  openGraph: {
    title:
      "Mart Franchise Opportunity in Bareilly – The Buyzaar Mart | Mini Mart from 18.5",
    description:
      "Explore the best mart franchise opportunity in Bareilly with The Buyzaar Mart. Full Mini Mart investment breakdown, FOCM model, 18–20% margins & 50+ FMCG brands. Apply now at 18.5!",
    url: "https://www.thebuyzaarmart.com/bareilly/mart-franchise-opportunity-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Bareilly – The Buyzaar Mart | Mini Mart from 18.5",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mart Franchise Opportunity in Bareilly – The Buyzaar Mart | Mini Mart from 18.5",
    description:
      "Explore the best mart franchise opportunity in Bareilly with The Buyzaar Mart. Full Mini Mart investment breakdown, FOCM model, 18–20% margins & 50+ FMCG brands. Apply now at 18.5!",
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