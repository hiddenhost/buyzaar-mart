import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Profitable Grocery Franchise in Noida | The Buyzaar Mart",

  description:
    "Start a profitable grocery franchise in Noida with The Buyzaar Mart. Proven business model, full support, high returns. Turn your entrepreneurial dreams into reality!",

  keywords:
    "retail franchise in noida, the buyzaar mart noida, noida retail franchise, retail business opportunity noida, franchise in noida, buyzaar mart franchise, retail store franchise noida, noida franchise opportunity, business franchise noida, retail investment noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/profitable-grocery-franchise-in-noida",
  },

  openGraph: {
    title: "Profitable Grocery Franchise in Noida | The Buyzaar Mart",
    description:
      "Start a profitable grocery franchise in Noida with The Buyzaar Mart. Proven business model, full support, high returns. Turn your entrepreneurial dreams into reality!",
    url: "https://www.thebuyzaarmart.com/cities/noida/profitable-grocery-franchise-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Profitable Grocery Franchise in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Profitable Grocery Franchise in Noida | The Buyzaar Mart",
    description:
      "Start a profitable grocery franchise in Noida with The Buyzaar Mart. Proven business model, full support, high returns. Turn your entrepreneurial dreams into reality!",
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