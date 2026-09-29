import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Franchise Investment Opportunity in Mathura — Investor Guide | The Buyzaar Mart",
  description:
    "Evaluate the grocery franchise investment opportunity in Mathura with this investor guide from The Buyzaar Mart — market fit, costs, models, and realistic returns.",
  keywords: [
    "grocery franchise investment opportunity Mathura",
    "franchise investment guide Mathura",
    "grocery franchise Mathura",
    "Buyzaar Mart Mathura",
    "franchise opportunity assessment India",
    "grocery business opportunity Mathura",
    "tier 2 city retail opportunity",
    "low investment franchise opportunity UP",
    "grocery franchise cost Mathura",
    "FMCG franchise opportunity India",
    "grocery franchise Uttar Pradesh",
    "franchise investor guide India",
    "grocery franchise near Vrindavan",
    "FOCM vs FOFO franchise",
    "best franchise opportunity Mathura",
    "neighborhood grocery franchise UP",
    "grocery franchise supply chain India",
    "franchise risk assessment India",
    "grocery retail investment guide",
    "franchise opportunity Braj region",
    "grocery franchise ROI Mathura",
    "how to invest in franchise Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/grocery-franchise-investment-opportunity-mathura",
  },
  openGraph: {
    title: "Grocery Franchise Investment Opportunity in Mathura — Investor Guide | The Buyzaar Mart",
    description:
      "Evaluate the grocery franchise investment opportunity in Mathura with this investor guide from The Buyzaar Mart — market fit, costs, models, and realistic returns.",
    url: "https://www.thebuyzaarmart.com/mathura/grocery-franchise-investment-opportunity-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment Opportunity in Mathura — Investor Guide | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment Opportunity in Mathura — Investor Guide | The Buyzaar Mart",
    description:
      "Evaluate the grocery franchise investment opportunity in Mathura with this investor guide from The Buyzaar Mart — market fit, costs, models, and realistic returns.",
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