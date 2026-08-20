import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Retail Store Franchise in Hapur | Full Guide",
  description:
    "Learn how to open a retail store franchise in Hapur with The Buyzaar Mart, covering planning, formats, legal setup, staffing, and the complete launch process.",
  keywords: [
    "how to open retail store franchise Hapur",
    "open retail store franchise Hapur",
    "buyzaar mart Hapur",
    "retail store business Hapur",
    "mini mart retail Hapur",
    "super mart retail Hapur",
    "hyper mart retail Hapur",
    "retail store setup Hapur",
    "retail store checklist Hapur",
    "retail store licenses Hapur",
    "retail store location Hapur",
    "retail franchise Uttar Pradesh",
    "buyzaar mart franchise apply Hapur",
    "retail store launch Hapur",
    "organised retail store Hapur",
    "branded retail store Hapur",
    "retail store training support Hapur",
    "daily needs retail store Hapur",
    "retail store franchise timeline Hapur",
    "retail store business plan Hapur",
    "retail store staffing Hapur",
    "retail store franchise process Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-open-a-retail-store-franchise-in-hapur",
  },
  openGraph: {
    title: "How to Open a Retail Store Franchise in Hapur | Full Guide",
    description:
      "Learn how to open a retail store franchise in Hapur with The Buyzaar Mart, covering planning, formats, legal setup, staffing, and the complete launch process.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-open-a-retail-store-franchise-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Store Franchise in Hapur | Full Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Retail Store Franchise in Hapur | Full Guide",
    description:
      "Learn how to open a retail store franchise in Hapur with The Buyzaar Mart, covering planning, formats, legal setup, staffing, and the complete launch process.",
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