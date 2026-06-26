import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Store Franchise in Agra | The Buyzaar Mart",
  description:
    "Open an FMCG store franchise in Agra with The Buyzaar Mart. FOCM model, ₹15 lakh onwards, complete setup & operations support. Agra's fastest-growing retail opportunity.",
  keywords: [
    "grocery franchise Agra",
    "retail franchise Agra",
    "supermarket franchise Agra",
    "franchise business in Agra",
    "daily needs store Agra",
    "FMCG franchise opportunity UP",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/fmcg-store-franchise-in-agra",
  },
  openGraph: {
    title: "FMCG Store Franchise in Agra | The Buyzaar Mart",
    description:
      "Open an FMCG store franchise in Agra with The Buyzaar Mart. FOCM model, ₹15 lakh onwards, complete setup & operations support. Agra's fastest-growing retail opportunity.",
    url: "https://www.thebuyzaarmart.com/agra/fmcg-store-franchise-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Store Franchise in Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Store Franchise in Agra | The Buyzaar Mart",
    description:
      "Open an FMCG store franchise in Agra with The Buyzaar Mart. FOCM model, ₹15 lakh onwards, complete setup & operations support. Agra's fastest-growing retail opportunity.",
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