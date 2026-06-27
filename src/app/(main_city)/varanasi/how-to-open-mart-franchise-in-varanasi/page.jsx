import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Mart Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Looking to how to open a mart franchise in Varanasi? Discover location tips, investment details, POS setup, and step-by-step guidance with The Buyzaar Mart.",
  keywords: [
    "mart franchise in Varanasi",
    "open grocery franchise Varanasi",
    "The Buyzaar Mart franchise",
    "retail franchise Varanasi",
    "supermarket franchise Varanasi",
    "POS billing franchise",
    "grocery store franchise UP",
    "kirana to mart franchise",
    "Varanasi retail business",
    "franchise opportunity Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/how-to-open-mart-franchise-in-varanasi",
  },
  openGraph: {
    title: "How to Open a Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Looking to how to open a mart franchise in Varanasi? Discover location tips, investment details, POS setup, and step-by-step guidance with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/varanasi/how-to-open-mart-franchise-in-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Mart Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Looking to how to open a mart franchise in Varanasi? Discover location tips, investment details, POS setup, and step-by-step guidance with The Buyzaar Mart.",
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