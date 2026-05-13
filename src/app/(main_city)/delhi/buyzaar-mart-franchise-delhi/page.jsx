import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Delhi | Own Your Store Today",
  description:
    "Start a Buyzaar Mart franchise in Delhi. FOCM & FOCO models — you invest, we manage or fully operate your daily needs store. FSSAI licensed. Call 9217991727!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/buyzaar-mart-franchise-in-delhi",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Delhi | Own Your Store Today",
    description:
      "Start a Buyzaar Mart franchise in Delhi. FOCM & FOCO models — you invest, we manage or fully operate your daily needs store. FSSAI licensed. Call 9217991727!",
    url: "https://www.thebuyzaarmart.com/delhi/buyzaar-mart-franchise-in-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Delhi | Own Your Store Today",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Delhi | Own Your Store Today",
    description:
      "Start a Buyzaar Mart franchise in Delhi. FOCM & FOCO models — you invest, we manage or fully operate your daily needs store. FSSAI licensed. Call 9217991727!",
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