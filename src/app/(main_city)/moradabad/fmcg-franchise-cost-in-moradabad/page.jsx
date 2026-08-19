import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FMCG Franchise Cost in Moradabad | The Buyzaar Mart Investment Guide",
  description:
    "Complete breakdown of FMCG franchise cost in Moradabad — franchise fee, interiors, stock, and ongoing expenses with The Buyzaar Mart.",
  keywords: [
    "FMCG franchise cost Moradabad",
    "grocery franchise cost Moradabad",
    "franchise investment Moradabad",
    "The Buyzaar Mart cost breakdown",
    "supermarket franchise cost UP",
    "mini mart franchise price",
    "franchise fee India",
    "franchise setup cost Moradabad",
    "low cost franchise Moradabad",
    "franchise investment under 20 lakh",
    "hyper mart investment cost",
    "FOCM FOCO cost comparison",
    "franchise working capital",
    "retail franchise price Moradabad",
    "franchise ROI Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/fmcg-franchise-cost-in-moradabad",
  },
  openGraph: {
    title: "FMCG Franchise Cost in Moradabad | The Buyzaar Mart Investment Guide",
    description:
      "Complete breakdown of FMCG franchise cost in Moradabad — franchise fee, interiors, stock, and ongoing expenses with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/moradabad/fmcg-franchise-cost-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Franchise Cost in Moradabad | The Buyzaar Mart Investment Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Franchise Cost in Moradabad | The Buyzaar Mart Investment Guide",
    description:
      "Complete breakdown of FMCG franchise cost in Moradabad — franchise fee, interiors, stock, and ongoing expenses with The Buyzaar Mart.",
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