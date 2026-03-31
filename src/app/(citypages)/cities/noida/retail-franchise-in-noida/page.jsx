import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise in Noida | The Buyzaar Mart Opportunities",

  description:
    "Looking for a retail franchise in Noida? Join The Buyzaar Mart and build a successful business. Proven model, complete support, high returns. Start today!",

  keywords:
    "retail franchise in noida, the buyzaar mart noida, noida retail franchise, retail business opportunity noida, franchise in noida, buyzaar mart franchise, retail store franchise noida, noida franchise opportunity, business franchise noida, retail investment noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/retail-franchise-in-noida",
  },

  openGraph: {
    title: "Retail Franchise in Noida | The Buyzaar Mart Opportunities",
    description:
      "Looking for a retail franchise in Noida? Join The Buyzaar Mart and build a successful business. Proven model, complete support, high returns. Start today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/retail-franchise-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise in Noida | The Buyzaar Mart Opportunities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise in Noida | The Buyzaar Mart Opportunities",
    description:
      "Looking for a retail franchise in Noida? Join The Buyzaar Mart and build a successful business. Proven model, complete support, high returns. Start today!",
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