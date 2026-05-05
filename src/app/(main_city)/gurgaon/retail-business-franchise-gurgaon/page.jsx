import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Business Franchise in Gurugram | The Buyzaar Mart",
  description:
    "Start a retail business franchise in Gurugram with The Buyzaar Mart. FOCM model — you invest, we manage your store daily. FSSAI licensed. Call 9217991727 today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurugram/retail-business-franchise-in-gurugram",
  },
  openGraph: {
    title: "Retail Business Franchise in Gurugram | The Buyzaar Mart",
    description:
      "Start a retail business franchise in Gurugram with The Buyzaar Mart. FOCM model — you invest, we manage your store daily. FSSAI licensed. Call 9217991727 today!",
    url: "https://www.thebuyzaarmart.com/gurugram/retail-business-franchise-in-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Business Franchise in Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Business Franchise in Gurugram | The Buyzaar Mart",
    description:
      "Start a retail business franchise in Gurugram with The Buyzaar Mart. FOCM model — you invest, we manage your store daily. FSSAI licensed. Call 9217991727 today!",
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