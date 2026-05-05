import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Retail Franchise in Gurgaon | Buyzaar Mart",
  description:
    "Learn exactly how to open a retail franchise in Gurgaon with The Buyzaar Mart. Step-by-step guide — FOCM model, FSSAI licensed. Call 9217991727 to get started!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/how-to-open-a-retail-franchise-in-gurgaon",
  },
  openGraph: {
    title: "How to Open a Retail Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Learn exactly how to open a retail franchise in Gurgaon with The Buyzaar Mart. Step-by-step guide — FOCM model, FSSAI licensed. Call 9217991727 to get started!",
    url: "https://www.thebuyzaarmart.com/gurgaon/how-to-open-a-retail-franchise-in-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Franchise in Gurgaon | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Retail Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Learn exactly how to open a retail franchise in Gurgaon with The Buyzaar Mart. Step-by-step guide — FOCM model, FSSAI licensed. Call 9217991727 to get started!",
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