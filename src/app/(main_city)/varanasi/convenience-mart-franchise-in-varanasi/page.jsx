import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Mart Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Discover the convenience mart franchise opportunity in Varanasi with The Buyzaar Mart. Compact format, POS billing, brand support, and a proven retail model.",
  keywords: [
    "convenience mart franchise Varanasi",
    "The Buyzaar Mart Varanasi",
    "convenience store franchise UP",
    "small format retail franchise",
    "neighborhood mart franchise",
    "convenience store investment",
    "POS billing convenience store",
    "retail franchise opportunity Varanasi",
    "24x7 mart franchise",
    "mini mart business Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/convenience-mart-franchise-in-varanasi",
  },
  openGraph: {
    title: "Convenience Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Discover the convenience mart franchise opportunity in Varanasi with The Buyzaar Mart. Compact format, POS billing, brand support, and a proven retail model.",
    url: "https://www.thebuyzaarmart.com/varanasi/convenience-mart-franchise-in-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Mart Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Discover the convenience mart franchise opportunity in Varanasi with The Buyzaar Mart. Compact format, POS billing, brand support, and a proven retail model.",
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