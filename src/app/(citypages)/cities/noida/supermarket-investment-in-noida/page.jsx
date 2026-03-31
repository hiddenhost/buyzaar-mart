import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Investment in Noida | The Buyzaar Mart Opportunity",

  description:
    "Invest in a supermarket in Noida through The Buyzaar Mart. Get proven systems, local adaptation, and steady returns from essential goods demand.",

  keywords:
    "supermarket investment in noida, invest in supermarket noida, noida supermarket business, supermarket franchise noida, grocery investment noida, buyzaar mart noida investment, supermarket opportunity noida, retail supermarket noida, noida supermarket franchise, essential goods business noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/supermarket-investment-in-noida",
  },

  openGraph: {
    title: "Supermarket Investment in Noida | The Buyzaar Mart Opportunity",
    description:
      "Invest in a supermarket in Noida through The Buyzaar Mart. Get proven systems, local adaptation, and steady returns from essential goods demand.",
    url: "https://www.thebuyzaarmart.com/cities/noida/supermarket-investment-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Investment in Noida | The Buyzaar Mart Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Supermarket Investment in Noida | The Buyzaar Mart Opportunity",
    description:
      "Invest in a supermarket in Noida through The Buyzaar Mart. Get proven systems, local adaptation, and steady returns from essential goods demand.",
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