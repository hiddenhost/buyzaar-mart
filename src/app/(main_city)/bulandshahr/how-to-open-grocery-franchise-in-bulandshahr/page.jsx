import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Grocery Franchise in Bulandshahr | Buyzaar Mart Guide",
  description:
    "A detailed guide on how to open a grocery franchise in Bulandshahr with Buyzaar Mart, covering formats, models, investment, process and support.",
  keywords: [
    "how to open grocery franchise in bulandshahr",
    "start grocery business bulandshahr",
    "grocery store franchise process",
    "buyzaar mart grocery franchise",
    "open supermarket bulandshahr",
    "mini mart grocery franchise",
    "super mart grocery franchise",
    "hyper mart grocery franchise",
    "grocery franchise investment uttar pradesh",
    "FOCO grocery franchise",
    "FOCM grocery franchise",
    "grocery franchise documentation",
    "grocery store setup process",
    "buyzaar mart supply chain",
    "POS billing grocery store",
    "grocery franchise training program",
    "grocery franchise marketing support",
    "buyzaar mart contact number",
    "low investment grocery business",
    "organized grocery retail bulandshahr",
    "kirana to supermarket upgrade",
    "grocery franchise eligibility",
    "first time grocery entrepreneur guide",
    "grocery franchise timeline bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/how-to-open-grocery-franchise-in-bulandshahr",
  },
  openGraph: {
    title: "How to Open Grocery Franchise in Bulandshahr | Buyzaar Mart Guide",
    description:
      "A detailed guide on how to open a grocery franchise in Bulandshahr with Buyzaar Mart, covering formats, models, investment, process and support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/how-to-open-grocery-franchise-in-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Grocery Franchise in Bulandshahr | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Grocery Franchise in Bulandshahr | Buyzaar Mart Guide",
    description:
      "A detailed guide on how to open a grocery franchise in Bulandshahr with Buyzaar Mart, covering formats, models, investment, process and support.",
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