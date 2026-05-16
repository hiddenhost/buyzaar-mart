import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
import { Key } from "lucide-react";

export const metadata = {
  title: "Franchise Business Opportunity in Ghaziabad | Buyzaar Mart",
  description:
    "Explore the best franchise business opportunity in Ghaziabad with The Buyzaar Mart. FOCM model — you invest, we manage. FSSAI licensed. Call 9217991727 today!",
  keywords:
    "franchise business opportunity in Ghaziabad, best franchise in Ghaziabad, retail franchise Ghaziabad, grocery franchise Ghaziabad, supermarket franchise Ghaziabad, FOCM franchise Ghaziabad, low investment franchise Ghaziabad, Buyzaar Mart franchise Ghaziabad, daily needs franchise Ghaziabad, business opportunity Ghaziabad",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/franchise-business-opportunity-ghaziabad",
  },
  openGraph: {
    title: "Franchise Business Opportunity in Ghaziabad | Buyzaar Mart",
    description:
      "Explore the best franchise business opportunity in Ghaziabad with The Buyzaar Mart. FOCM model — you invest, we manage. FSSAI licensed. Call 9217991727 today!",
    url: "https://www.thebuyzaarmart.com/ghaziabad/franchise-business-opportunity-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Opportunity in Ghaziabad | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Opportunity in Ghaziabad | Buyzaar Mart",
    description:
      "Explore the best franchise business opportunity in Ghaziabad with The Buyzaar Mart. FOCM model — you invest, we manage. FSSAI licensed. Call 9217991727 today!",
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