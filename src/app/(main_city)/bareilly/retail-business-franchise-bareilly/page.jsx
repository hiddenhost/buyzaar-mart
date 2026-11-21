import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Retail Business Franchise in Bareilly – The Buyzaar Mart | Start Mini Mart from 18.5",
  description:
    "Start a retail business franchise in Bareilly with The Buyzaar Mart. Full Mini Mart investment breakdown, FOCM model, 18–20% gross margins & 50+ FMCG brands. Apply now from 18.5!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/retail-business-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "Retail Business Franchise in Bareilly – The Buyzaar Mart | Start Mini Mart from 18.5",
    description:
      "Start a retail business franchise in Bareilly with The Buyzaar Mart. Full Mini Mart investment breakdown, FOCM model, 18–20% gross margins & 50+ FMCG brands. Apply now from 18.5!",
    url:
      "https://www.thebuyzaarmart.com/bareilly/retail-business-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Business Franchise in Bareilly – The Buyzaar Mart | Start Mini Mart from 18.5",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Business Franchise in Bareilly – The Buyzaar Mart | Start Mini Mart from 18.5",
    description:
      "Start a retail business franchise in Bareilly with The Buyzaar Mart. Full Mini Mart investment breakdown, FOCM model, 18–20% gross margins & 50+ FMCG brands. Apply now from 18.5!",
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