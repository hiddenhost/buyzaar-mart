import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FMCG Franchise in Moradabad | The Buyzaar Mart Opportunity",
  description:
    "Start an FMCG franchise in Moradabad with The Buyzaar Mart. Proven retail systems, wide product range, strong supply chain, and complete brand support.",
  keywords: [
    "FMCG franchise moradabad",
    "buyzaar mart FMCG franchise",
    "fast moving consumer goods business moradabad",
    "FMCG retail opportunity UP",
    "FMCG store franchise moradabad",
    "grocery FMCG business moradabad",
    "FMCG distribution franchise",
    "packaged goods retail moradabad",
    "FMCG supermarket moradabad",
    "FMCG entrepreneur opportunity",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/fmcg-franchise-moradabad",
  },
  openGraph: {
    title: "FMCG Franchise in Moradabad | The Buyzaar Mart Opportunity",
    description:
      "Start an FMCG franchise in Moradabad with The Buyzaar Mart. Proven retail systems, wide product range, strong supply chain, and complete brand support.",
    url: "https://www.thebuyzaarmart.com/moradabad/fmcg-franchise-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Franchise in Moradabad | The Buyzaar Mart Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Franchise in Moradabad | The Buyzaar Mart Opportunity",
    description:
      "Start an FMCG franchise in Moradabad with The Buyzaar Mart. Proven retail systems, wide product range, strong supply chain, and complete brand support.",
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