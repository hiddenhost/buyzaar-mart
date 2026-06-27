import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business for Retired Persons in Varanasi | The Buyzaar Mart",
  description:
    "Explore a franchise business for retired persons in Varanasi. The Buyzaar Mart offers manageable operations, brand support, and POS billing for a stable second career.",
  keywords: [
    "franchise business for retired persons Varanasi",
    "retirement business opportunity",
    "The Buyzaar Mart Varanasi",
    "low stress franchise for seniors",
    "grocery franchise after retirement",
    "second career retired professionals",
    "retirement investment Varanasi",
    "retail franchise senior citizens",
    "manageable franchise business",
    "POS billing retail franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/franchise-business-for-retired-person-varanasi",
  },
  openGraph: {
    title: "Franchise Business for Retired Persons in Varanasi | The Buyzaar Mart",
    description:
      "Explore a franchise business for retired persons in Varanasi. The Buyzaar Mart offers manageable operations, brand support, and POS billing for a stable second career.",
    url: "https://www.thebuyzaarmart.com/varanasi/franchise-business-for-retired-person-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business for Retired Persons in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business for Retired Persons in Varanasi | The Buyzaar Mart",
    description:
      "Explore a franchise business for retired persons in Varanasi. The Buyzaar Mart offers manageable operations, brand support, and POS billing for a stable second career.",
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