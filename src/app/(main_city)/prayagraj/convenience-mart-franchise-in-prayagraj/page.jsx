import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Mart Franchise in Prayagraj | Buyzaar Mart Mini Mart",
  description:
    "Open a convenience mart franchise in Prayagraj with Buyzaar Mart. Compact Mini Mart format, quick-trip retail focus, full brand & technology support.",
  keywords: [
    "convenience mart franchise prayagraj",
    "buyzaar mart convenience store",
    "quick trip retail franchise",
    "mini mart convenience format",
    "daily essentials store prayagraj",
    "convenience store business UP",
    "FOFO convenience mart",
    "small format retail franchise",
    "neighborhood convenience store",
    "convenience retail opportunity prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/convenience-mart-franchise-in-prayagraj",
  },
  openGraph: {
    title: "Convenience Mart Franchise in Prayagraj | Buyzaar Mart Mini Mart",
    description:
      "Open a convenience mart franchise in Prayagraj with Buyzaar Mart. Compact Mini Mart format, quick-trip retail focus, full brand & technology support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/convenience-mart-franchise-in-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Mart Franchise in Prayagraj | Buyzaar Mart Mini Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Mart Franchise in Prayagraj | Buyzaar Mart Mini Mart",
    description:
      "Open a convenience mart franchise in Prayagraj with Buyzaar Mart. Compact Mini Mart format, quick-trip retail focus, full brand & technology support.",
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