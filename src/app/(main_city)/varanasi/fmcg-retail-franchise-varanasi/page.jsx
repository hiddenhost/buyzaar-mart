import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Retail Franchise in Varanasi | Price & Investment Details",
  description:
    "Start an FMCG retail franchise in Varanasi with The Buyzaar Mart. Check store formats (Mini Mart ₹15 lakh onwards), total investment price, and how to apply.",
  keywords: [
    "FMCG retail franchise Varanasi",
    "Buyzaar Mart Varanasi",
    "FMCG franchise price India",
    "Mini Mart franchise 15 lakh",
    "grocery franchise Varanasi",
    "retail franchise Uttar Pradesh",
    "Super Mart Hyper Mart price",
    "fast moving consumer goods franchise",
    "low investment FMCG business",
    "FMCG franchise total investment",
    "FMCG franchise Varanasi",
    "FMCG business opportunity Varanasi",
    "FMCG retail opportunity Varanasi",
    "FMCG store franchise Varanasi",
    "FMCG grocery franchise Varanasi",
    "grocery franchise Varanasi",
    "retail franchise Varanasi",
    "supermarket franchise Varanasi",
    "mini mart franchise Varanasi"
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/fmcg-retail-franchise-varanasi",
  },
  openGraph: {
    title: "FMCG Retail Franchise in Varanasi | Price & Investment Details",
    description:
      "Start an FMCG retail franchise in Varanasi with The Buyzaar Mart. Check store formats (Mini Mart ₹15 lakh onwards), total investment price, and how to apply.",
    url: "https://www.thebuyzaarmart.com/varanasi/fmcg-retail-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Retail Franchise in Varanasi | Price & Investment Details",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Retail Franchise in Varanasi | Price & Investment Details",
    description:
      "Start an FMCG retail franchise in Varanasi with The Buyzaar Mart. Check store formats (Mini Mart ₹15 lakh onwards), total investment price, and how to apply.",
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