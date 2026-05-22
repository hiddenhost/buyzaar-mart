import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Retail Business Franchise in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
  description:
    "Start a profitable retail business franchise in Faridabad with The Buyzaar Mart. Choose Mini Mart or Hyper Mart formats, get full company support, POS technology & 18–20% profit margins. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/retail-business-franchise-faridabad",
  },
  openGraph: {
    title:
      "Retail Business Franchise in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Start a profitable retail business franchise in Faridabad with The Buyzaar Mart. Choose Mini Mart or Hyper Mart formats, get full company support, POS technology & 18–20% profit margins. Apply now!",
    url: "https://www.thebuyzaarmart.com/faridabad/retail-business-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Business Franchise in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Business Franchise in Faridabad | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Start a profitable retail business franchise in Faridabad with The Buyzaar Mart. Choose Mini Mart or Hyper Mart formats, get full company support, POS technology & 18–20% profit margins. Apply now!",
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