import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Mart Franchise in Gurugram | Buyzaar Mart",
  description:
    "Start a neighbourhood mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, complete setup support & fast ROI. Enquire now!",
  keywords: [
    "neighbourhood mart franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "neighbourhood supermarket Gurugram",
    "mini mart franchise India",
    "local grocery franchise",
    "low investment supermarket franchise in Lucknow",
    "convenience store franchise",
    "franchise opportunity Gurugram",
    "community mart business",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/neighbourhood-mart-franchise-gurugram",
  },
  openGraph: {
    title: "Neighbourhood Mart Franchise in Gurugram | Buyzaar Mart",
    description:
      "Start a neighbourhood mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, complete setup support & fast ROI. Enquire now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/neighbourhood-mart-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise in Gurugram | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Mart Franchise in Gurugram | Buyzaar Mart",
    description:
      "Start a neighbourhood mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, complete setup support & fast ROI. Enquire now!",
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