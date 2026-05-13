import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Retail Franchise in Gurgaon | Buyzaar Mart",
  description:
    "Learn how to start a retail franchise in Gurgaon step by step. Buyzaar Mart offers FOCM & FOCO models — you invest, we manage or operate. Call 9217991727 today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurugram/how-to-start-retail-franchise-in-gurgaon",
  },
  openGraph: {
    title: "How to Start a Retail Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Learn how to start a retail franchise in Gurgaon step by step. Buyzaar Mart offers FOCM & FOCO models — you invest, we manage or operate. Call 9217991727 today!",
    url: "https://www.thebuyzaarmart.com/gurugram/how-to-start-retail-franchise-in-gurgaon",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Retail Franchise in Gurgaon | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Retail Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Learn how to start a retail franchise in Gurgaon step by step. Buyzaar Mart offers FOCM & FOCO models — you invest, we manage or operate. Call 9217991727 today!",
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