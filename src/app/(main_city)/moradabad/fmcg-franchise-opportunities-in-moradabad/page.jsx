import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FMCG Franchise Opportunities in Moradabad | The Buyzaar Mart",
  description:
    "Discover FMCG franchise opportunities in Moradabad with The Buyzaar Mart — low investment entry, brand support, and a growing organised retail market.",
  keywords: [
    "FMCG franchise opportunities Moradabad",
    "grocery franchise Moradabad",
    "The Buyzaar Mart Moradabad franchise",
    "franchise business Moradabad UP",
    "low investment franchise Moradabad",
    "supermarket franchise Moradabad",
    "mini mart franchise opportunity",
    "retail franchise Uttar Pradesh",
    "best franchise Moradabad 2026",
    "organized grocery franchise UP",
    "daily needs store franchise Moradabad",
    "franchise investment opportunity Moradabad",
    "FOCM FOCO franchise Moradabad",
    "franchise for first time entrepreneurs",
    "grocery store franchise near me Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/fmcg-franchise-opportunities-in-moradabad",
  },
  openGraph: {
    title: "FMCG Franchise Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Discover FMCG franchise opportunities in Moradabad with The Buyzaar Mart — low investment entry, brand support, and a growing organised retail market.",
    url: "https://www.thebuyzaarmart.com/moradabad/fmcg-franchise-opportunities-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Franchise Opportunities in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Franchise Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Discover FMCG franchise opportunities in Moradabad with The Buyzaar Mart — low investment entry, brand support, and a growing organised retail market.",
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