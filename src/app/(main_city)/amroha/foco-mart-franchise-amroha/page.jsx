import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Mart Franchise in Amroha | The Buyzaar Mart",
  description:
    "Own a company-run Buyzaar Mart in Amroha under the FOCO model. About 10% revenue share, 10-year agreement, full operations support.",
  keywords: [
    "foco mart franchise amroha",
    "foco franchise amroha",
    "franchise owned company operated amroha",
    "foco mart amroha",
    "buyzaar mart foco amroha",
    "buyzaar mart franchise amroha",
    "mart franchise amroha",
    "supermarket franchise amroha",
    "company operated mart amroha",
    "retail mart franchise amroha",
    "grocery mart franchise amroha",
    "passive income franchise amroha",
    "revenue share franchise india",
    "2000 sq ft mart franchise",
    "hands-off mart franchise india",
    "foco supermarket franchise uttar pradesh",
    "organised retail investment amroha",
    "franchise business opportunity amroha",
    "apply buyzaar mart franchise",
    "foco vs focm mart franchise",
    "supermarket investment amroha",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/foco-mart-franchise-amroha",
  },
  openGraph: {
    title: "FOCO Mart Franchise in Amroha | The Buyzaar Mart",
    description:
      "Own a company-run Buyzaar Mart in Amroha under the FOCO model. About 10% revenue share, 10-year agreement, full operations support.",
    url: "https://www.thebuyzaarmart.com/amroha/foco-mart-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Mart Franchise in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Mart Franchise in Amroha | The Buyzaar Mart",
    description:
      "Own a company-run Buyzaar Mart in Amroha under the FOCO model. About 10% revenue share, 10-year agreement, full operations support.",
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