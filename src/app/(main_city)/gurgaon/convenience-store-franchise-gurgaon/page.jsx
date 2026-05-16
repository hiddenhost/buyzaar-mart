import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Store Franchise in Gurgaon | Buyzaar Mart",
  description:
    "Open a convenience store franchise in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage. FSSAI licensed. Call 9217991727 for a free consultation!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/convenience-store-franchise-gurgaon",
  },
  openGraph: {
    title: "Convenience Store Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Open a convenience store franchise in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage. FSSAI licensed. Call 9217991727 for a free consultation!",
    url: "https://www.thebuyzaarmart.com/gurgaon/convenience-store-franchise-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise in Gurgaon | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Store Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Open a convenience store franchise in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage. FSSAI licensed. Call 9217991727 for a free consultation!",
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