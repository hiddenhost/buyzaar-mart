import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start a Profitable Retail Business Franchise in Delhi | The Buyzaar Mart",
  description:
    "Looking for the best retail business franchise in Delhi? Partner with The Buyzaar Mart. Explore our FOCO, and FOCM supermarket models with 18-20% margins, high ROI, and full setup support.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/retail-business-franchise-delhi",
  },
  openGraph: {
    title: "Start a Profitable Retail Business Franchise in Delhi | The Buyzaar Mart",
    description:
      "Looking for the best retail business franchise in Delhi? Partner with The Buyzaar Mart. Explore our FOCO, and FOCM supermarket models with 18-20% margins, high ROI, and full setup support.",
    url: "https://www.thebuyzaarmart.com/delhi/retail-business-franchise-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start a Profitable Retail Business Franchise in Delhi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start a Profitable Retail Business Franchise in Delhi | The Buyzaar Mart",
    description:
      "Looking for the best retail business franchise in Delhi? Partner with The Buyzaar Mart. Explore our FOCO, and FOCM supermarket models with 18-20% margins, high ROI, and full setup support.",
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