import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Cost in Moradabad | The Buyzaar Mart Investment Guide",
  description:
    "Complete grocery franchise cost breakdown for Moradabad with The Buyzaar Mart. Investment starts from approximate ₹15 lakhs, full support included. Get your customized quote now!",
  keywords: [
    "grocery franchise cost moradabad",
    "buyzaar mart franchise cost",
    "supermarket investment moradabad",
    "grocery franchise investment moradabad",
    "retail franchise cost moradabad",
    "franchise opportunity moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/cost-of-grocery-store-franchise-in-moradabad",
  },
  openGraph: {
    title:
      "Grocery Franchise Cost in Moradabad | The Buyzaar Mart Investment Guide",
    description:
      "Complete grocery franchise cost breakdown for Moradabad with The Buyzaar Mart. Investment starts from approximate ₹15 lakhs, full support included. Get your customized quote now!",
    url: "https://www.thebuyzaarmart.com/moradabad/cost-of-grocery-store-franchise-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Cost in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Franchise Cost in Moradabad | The Buyzaar Mart Investment Guide",
    description:
      "Complete grocery franchise cost breakdown for Moradabad with The Buyzaar Mart. Investment starts from approximate ₹15 lakhs, full support included. Get your customized quote now!",
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