import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Mart Franchise in Prayagraj | The Buyzaar Mart",
  description:
    "Start a daily needs mart franchise in Prayagraj with The Buyzaar Mart. Serve everyday essentials to your local community with full supply chain and operational support.",
  keywords: [
    "daily needs mart franchise Prayagraj",
    "daily essentials store franchise UP",
    "grocery franchise Prayagraj",
    "The Buyzaar Mart franchise",
    "daily needs store business Prayagraj",
    "everyday essentials franchise UP",
    "FMCG daily needs franchise",
    "convenience store franchise Prayagraj",
    "daily grocery business franchise",
    "Mini Mart franchise Prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/daily-needs-mart-franchise-prayagraj",
  },
  openGraph: {
    title: "Daily Needs Mart Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Start a daily needs mart franchise in Prayagraj with The Buyzaar Mart. Serve everyday essentials to your local community with full supply chain and operational support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/daily-needs-mart-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Mart Franchise in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Mart Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Start a daily needs mart franchise in Prayagraj with The Buyzaar Mart. Serve everyday essentials to your local community with full supply chain and operational support.",
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