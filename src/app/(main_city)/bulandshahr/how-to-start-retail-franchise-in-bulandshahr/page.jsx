import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start Retail Franchise in Bulandshahr | Buyzaar Mart Guide",

  description:
    "A complete guide on how to start a retail franchise in Bulandshahr with Buyzaar Mart, covering formats, models, investment, process and support.",

  keywords: [
    "how to start retail franchise in bulandshahr",
    "start retail business bulandshahr",
    "retail franchise process uttar pradesh",
    "buyzaar mart retail franchise",
    "start supermarket bulandshahr",
    "mini mart retail franchise",
    "super mart retail franchise",
    "hyper mart retail franchise",
    "retail franchise investment bulandshahr",
    "FOCO retail franchise",
    "FOCM retail franchise",
    "retail franchise documentation",
    "retail store setup process",
    "buyzaar mart supply chain support",
    "POS billing retail store",
    "retail franchise training program",
    "retail franchise marketing support",
    "buyzaar mart contact number",
    "low investment retail business",
    "organized retail bulandshahr",
    "kirana to branded store upgrade",
    "retail franchise eligibility",
    "first time retail entrepreneur guide",
    "retail franchise timeline bulandshahr",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/how-to-start-retail-franchise-in-bulandshahr",
  },

  openGraph: {
    title: "How to Start Retail Franchise in Bulandshahr | Buyzaar Mart Guide",
    description:
      "A complete guide on how to start a retail franchise in Bulandshahr with Buyzaar Mart, covering formats, models, investment, process and support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/how-to-start-retail-franchise-in-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start Retail Franchise in Bulandshahr | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Start Retail Franchise in Bulandshahr | Buyzaar Mart Guide",
    description:
      "A complete guide on how to start a retail franchise in Bulandshahr with Buyzaar Mart, covering formats, models, investment, process and support.",
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