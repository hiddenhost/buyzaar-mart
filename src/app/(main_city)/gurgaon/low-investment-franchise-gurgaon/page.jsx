import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Low Investment Franchise Gurugram | The Buyzaar Mart",
  description:
    "Start a low investment franchise in Gurugram with The Buyzaar Mart. FOCM model — you invest, we manage your store. FSSAI licensed. Call 9217991727 to get started!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurugram/low-investment-franchise-gurugram",
  },
  openGraph: {
    title: "Low Investment Franchise Gurugram | The Buyzaar Mart",
    description:
      "Start a low investment franchise in Gurugram with The Buyzaar Mart. FOCM model — you invest, we manage your store. FSSAI licensed. Call 9217991727 to get started!",
    url: "https://www.thebuyzaarmart.com/gurugram/low-investment-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Franchise Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Investment Franchise Gurugram | The Buyzaar Mart",
    description:
      "Start a low investment franchise in Gurugram with The Buyzaar Mart. FOCM model — you invest, we manage your store. FSSAI licensed. Call 9217991727 to get started!",
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