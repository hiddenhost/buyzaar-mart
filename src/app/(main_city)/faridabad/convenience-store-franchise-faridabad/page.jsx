import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Store Franchise Faridabad | The Buyzaar Mart",
  description:
    "Start your convenience store franchise in Faridabad with The Buyzaar Mart from ₹15 Lakh. POS system, supply chain support, training & ongoing operations support.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/convenience-store-franchise-faridabad",
  },
  openGraph: {
    title: "Convenience Store Franchise Faridabad | The Buyzaar Mart",
    description:
      "Start your convenience store franchise in Faridabad with The Buyzaar Mart from ₹15 Lakh. POS system, supply chain support, training & ongoing operations support.",
    url: "https://www.thebuyzaarmart.com/faridabad/convenience-store-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise Faridabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Store Franchise Faridabad | The Buyzaar Mart",
    description:
      "Start your convenience store franchise in Faridabad with The Buyzaar Mart from ₹15 Lakh. POS system, supply chain support, training & ongoing operations support.",
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