import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment in Varanasi | The Buyzaar Mart",
  description:
    "Looking for a profitable grocery franchise investment in Varanasi? Partner with The Buyzaar Mart and launch your own FMCG retail store with low investment, full support, and high ROI. Enquire now.",
  keywords: [
    "grocery franchise investment Varanasi",
    "FMCG franchise Varanasi",
    "retail franchise opportunity Varanasi",
    "supermarket franchise Varanasi",
    "low investment franchise Varanasi",
    "The Buyzaar Mart Varanasi",
    "grocery store franchise UP",
    "franchise business Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-investment-varanasi",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Varanasi | The Buyzaar Mart",
    description:
      "Looking for a profitable grocery franchise investment in Varanasi? Partner with The Buyzaar Mart and launch your own FMCG retail store with low investment, full support, and high ROI. Enquire now.",
    url: "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-investment-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Varanasi | The Buyzaar Mart",
    description:
      "Looking for a profitable grocery franchise investment in Varanasi? Partner with The Buyzaar Mart and launch your own FMCG retail store with low investment, full support, and high ROI. Enquire now.",
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