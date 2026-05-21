import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Payback Period Franchise Store Kanpur | The Buyzaar Mart FOCM & FOCO Models",
  description:
    "Understand the real payback period for a franchise store in Kanpur with The Buyzaar Mart. Explore FOCM and FOCO models, store formats, and what accelerates your investment recovery.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/payback-period-franchise-store-kanpur",
  },
  openGraph: {
    title:
      "Payback Period Franchise Store Kanpur | The Buyzaar Mart FOCM & FOCO Models",
    description:
      "Understand the real payback period for a franchise store in Kanpur with The Buyzaar Mart. Explore FOCM and FOCO models, store formats, and what accelerates your investment recovery.",
    url: "https://www.thebuyzaarmart.com/kanpur/payback-period-franchise-store-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Payback Period Franchise Store Kanpur | The Buyzaar Mart FOCM & FOCO Models",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Payback Period Franchise Store Kanpur | The Buyzaar Mart FOCM & FOCO Models",
    description:
      "Understand the real payback period for a franchise store in Kanpur with The Buyzaar Mart. Explore FOCM and FOCO models, store formats, and what accelerates your investment recovery.",
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