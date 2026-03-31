import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Noida | The Buyzaar Mart Opportunity",

  description:
    "Discover the best grocery store franchise in Noida with The Buyzaar Mart. Complete support, proven model, rapid profitability. Start your store today!",

  keywords:
    "hypermart franchise in noida, buyzaar mart noida, hypermarket franchise noida, retail franchise noida, supermarket franchise noida, the buyzaar mart franchise, noida retail business, hypermart business opportunity noida, buyzaar mart hypermart, franchise in noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/grocery-store-franchise-noida",
  },

  openGraph: {
    title: "Grocery Store Franchise Noida | The Buyzaar Mart Opportunity",
    description:
      "Discover the best grocery store franchise in Noida with The Buyzaar Mart. Complete support, proven model, rapid profitability. Start your store today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-store-franchise-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Noida - The Buyzaar Mart Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Noida | The Buyzaar Mart Opportunity",
    description:
      "Discover the best grocery store franchise in Noida with The Buyzaar Mart. Complete support, proven model, rapid profitability. Start your store today!",
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