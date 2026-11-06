import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Buyzaar Mart Retail Partner in Amroha | Supermarket Franchise Partner",
  description:
    "Become a Buyzaar Mart retail partner in Amroha. FOCM and FOCO models, POS, training and full support. Total investment starts from ₹15 lakh. Get a reply within 24 hours.",
  keywords: [
    "buyzaar mart retail partner amroha",
    "buyzaar mart retail partner",
    "become retail partner amroha",
    "retail partnership supermarket amroha",
    "buyzaar mart franchise amroha",
    "the buyzaar mart",
    "supermarket franchise in amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "retail partner franchise uttar pradesh",
    "buyzaar mart partnership",
    "neighbourhood supermarket partner",
    "supermarket franchise uttar pradesh",
    "FOCM franchise amroha",
    "FOCO franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "grocery franchise 15 lakh",
    "low investment supermarket franchise",
    "franchise business opportunity amroha",
    "organised retail franchise amroha",
    "supermarket franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-retail-partner-amroha",
  },
  openGraph: {
    title:
      "Buyzaar Mart Retail Partner in Amroha | Supermarket Franchise Partner",
    description:
      "Become a Buyzaar Mart retail partner in Amroha. FOCM and FOCO models, POS, training and full support. Total investment starts from ₹15 lakh. Get a reply within 24 hours.",
    url: "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-retail-partner-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Partner in Amroha | Supermarket Franchise Partner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buyzaar Mart Retail Partner in Amroha | Supermarket Franchise Partner",
    description:
      "Become a Buyzaar Mart retail partner in Amroha. FOCM and FOCO models, POS, training and full support. Total investment starts from ₹15 lakh. Get a reply within 24 hours.",
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