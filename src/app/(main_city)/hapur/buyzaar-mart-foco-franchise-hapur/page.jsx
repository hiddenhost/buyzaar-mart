import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Buyzaar Mart FOCO Franchise Hapur | Company Operated Store Model",
  description:
    "Explore the Buyzaar Mart FOCO franchise model in Hapur. Learn how the company-operated format works, its benefits, eligibility, and application process.",
  keywords: [
    "buyzaar mart FOCO franchise Hapur",
    "FOCO franchise Hapur",
    "franchise owned company operated Hapur",
    "buyzaar mart Hapur",
    "grocery franchise Hapur",
    "supermarket franchise Hapur",
    "passive investment franchise Hapur",
    "mini mart FOCO Hapur",
    "super mart FOCO Hapur",
    "hyper mart FOCO Hapur",
    "company operated store Hapur",
    "retail investment Hapur",
    "FOCO vs FOCM Hapur",
    "low involvement franchise Hapur",
    "retail franchise Uttar Pradesh",
    "buyzaar mart franchise apply Hapur",
    "passive retail investment Hapur",
    "franchise support Hapur",
    "organised retail investment Hapur",
    "daily needs store franchise Hapur",
    "franchise application process Hapur",
    "retail business opportunity Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-foco-franchise-hapur",
  },
  openGraph: {
    title: "Buyzaar Mart FOCO Franchise Hapur | Company Operated Store Model",
    description:
      "Explore the Buyzaar Mart FOCO franchise model in Hapur. Learn how the company-operated format works, its benefits, eligibility, and application process.",
    url: "https://www.thebuyzaarmart.com/hapur/buyzaar-mart-foco-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Franchise Hapur | Company Operated Store Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCO Franchise Hapur | Company Operated Store Model",
    description:
      "Explore the Buyzaar Mart FOCO franchise model in Hapur. Learn how the company-operated format works, its benefits, eligibility, and application process.",
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