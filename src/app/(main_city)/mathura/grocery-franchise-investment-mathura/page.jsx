import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Franchise Investment in Mathura | The Buyzaar Mart",
  description:
    "Start a grocery franchise in Mathura with The Buyzaar Mart. Investment from ₹15 lakh, FOCM/FOFO models, FSSAI-compliant supply chain, and full launch support.",
  keywords: [
    "grocery franchise investment Mathura",
    "grocery store franchise Mathura",
    "supermarket franchise Mathura",
    "Buyzaar Mart Mathura",
    "grocery business Mathura",
    "low investment grocery franchise",
    "FSSAI grocery franchise India",
    "grocery franchise cost Mathura",
    "FMCG franchise Mathura",
    "grocery franchise Uttar Pradesh",
    "kirana to supermarket franchise",
    "grocery franchise near Vrindavan",
    "FOCM grocery franchise",
    "FOFO grocery franchise India",
    "daily needs store franchise Mathura",
    "neighborhood grocery franchise Mathura",
    "grocery franchise with supply chain",
    "best grocery franchise UP",
    "grocery store investment India",
    "franchise business Braj region",
    "grocery franchise ROI Mathura",
    "how to open grocery store Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/grocery-franchise-investment-mathura",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Mathura | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Mathura with The Buyzaar Mart. Investment from ₹15 lakh, FOCM/FOFO models, FSSAI-compliant supply chain, and full launch support.",
    url: "https://www.thebuyzaarmart.com/mathura/grocery-franchise-investment-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Mathura | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Mathura with The Buyzaar Mart. Investment from ₹15 lakh, FOCM/FOFO models, FSSAI-compliant supply chain, and full launch support.",
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