import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
import { Key } from "lucide-react";

export const metadata = {
  title: "Daily Needs Store Franchise in Ghaziabad | The Buyzaar Mart",
  description:
    "Own a daily needs store franchise in Ghaziabad with The Buyzaar Mart. FOCM model — you invest, we manage. FSSAI licensed. Call 9217991727 for a free consultation.",

  Keywords:
    "daily needs store franchise in Ghaziabad, grocery store franchise Ghaziabad, supermarket franchise Ghaziabad, convenience store franchise Ghaziabad, FOCM retail franchise Ghaziabad, low investment franchise Ghaziabad, high return franchise Ghaziabad, inventory guarantee franchise Ghaziabad, hyper-local marketing franchise Ghaziabad, retail business opportunity Ghaziabad",  
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/daily-needs-store-franchise-ghaziabad",
  },
  openGraph: {
    title: "Daily Needs Store Franchise in Ghaziabad | The Buyzaar Mart",
    description:
      "Own a daily needs store franchise in Ghaziabad with The Buyzaar Mart. FOCM model — you invest, we manage. FSSAI licensed. Call 9217991727 for a free consultation.",
    url: "https://www.thebuyzaarmart.com/ghaziabad/daily-needs-store-franchise-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Store Franchise in Ghaziabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Store Franchise in Ghaziabad | The Buyzaar Mart",
    description:
      "Own a daily needs store franchise in Ghaziabad with The Buyzaar Mart. FOCM model — you invest, we manage. FSSAI licensed. Call 9217991727 for a free consultation.",
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