import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mini Mart Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Start a mini mart franchise in Varanasi with The Buyzaar Mart. Compact retail format, POS billing, brand support, and manageable investment for new entrepreneurs.",
  keywords: [
    "mini mart franchise Varanasi",
    "The Buyzaar Mart Varanasi",
    "compact retail franchise UP",
    "small format mart business",
    "mini supermarket franchise",
    "mini mart investment Varanasi",
    "POS billing mini mart",
    "low space retail franchise",
    "retail business opportunity Varanasi",
    "small mart store franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/mini-mart-franchise-varanasi",
  },
  openGraph: {
    title: "Mini Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a mini mart franchise in Varanasi with The Buyzaar Mart. Compact retail format, POS billing, brand support, and manageable investment for new entrepreneurs.",
    url: "https://www.thebuyzaarmart.com/varanasi/mini-mart-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Mart Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a mini mart franchise in Varanasi with The Buyzaar Mart. Compact retail format, POS billing, brand support, and manageable investment for new entrepreneurs.",
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