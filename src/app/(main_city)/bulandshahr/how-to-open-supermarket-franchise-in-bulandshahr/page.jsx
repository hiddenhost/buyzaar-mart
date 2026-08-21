import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Supermarket Franchise in Bulandshahr | Buyzaar Mart Guide",
  description:
    "A complete guide on how to open a supermarket franchise in Bulandshahr with Buyzaar Mart, covering formats, investment, process and support.",
  keywords: [
    "how to open supermarket franchise in bulandshahr",
    "open supermarket bulandshahr",
    "supermarket franchise process uttar pradesh",
    "buyzaar mart supermarket franchise",
    "start supermarket business bulandshahr",
    "mini mart supermarket franchise",
    "super mart supermarket franchise",
    "hyper mart supermarket franchise",
    "supermarket franchise investment",
    "FOCO supermarket franchise",
    "FOCM supermarket franchise",
    "supermarket franchise documentation",
    "supermarket setup process",
    "buyzaar mart supply chain support",
    "POS billing supermarket franchise",
    "supermarket franchise training",
    "supermarket franchise marketing support",
    "buyzaar mart contact number",
    "low investment supermarket franchise",
    "organized retail supermarket bulandshahr",
    "kirana to supermarket upgrade",
    "supermarket franchise eligibility",
    "first time supermarket owner guide",
    "supermarket franchise timeline bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/how-to-open-supermarket-franchise-in-bulandshahr",
  },
  openGraph: {
    title: "How to Open Supermarket Franchise in Bulandshahr | Buyzaar Mart Guide",
    description:
      "A complete guide on how to open a supermarket franchise in Bulandshahr with Buyzaar Mart, covering formats, investment, process and support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/how-to-open-supermarket-franchise-in-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Supermarket Franchise in Bulandshahr | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Supermarket Franchise in Bulandshahr | Buyzaar Mart Guide",
    description:
      "A complete guide on how to open a supermarket franchise in Bulandshahr with Buyzaar Mart, covering formats, investment, process and support.",
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