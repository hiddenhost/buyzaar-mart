import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Gurgaon | Own Your Store Today",
  description:
    "Start a Buyzaar Mart franchise in Gurgaon today. FOCM model — you invest, we manage your daily needs store. FSSAI licensed. Call 9217991727 for a free consultation!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/neighbourhood-mart-franchise-in-gurgaon",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Gurgaon | Own Your Store Today",
    description:
      "Start a Buyzaar Mart franchise in Gurgaon today. FOCM model — you invest, we manage your daily needs store. FSSAI licensed. Call 9217991727 for a free consultation!",
    url: "https://www.thebuyzaarmart.com/gurgaon/neighbourhood-mart-franchise-in-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Gurgaon | Own Your Store Today",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Gurgaon | Own Your Store Today",
    description:
      "Start a Buyzaar Mart franchise in Gurgaon today. FOCM model — you invest, we manage your daily needs store. FSSAI licensed. Call 9217991727 for a free consultation!",
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