import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
import { Key } from "lucide-react";

export const metadata = {
  title: "How to Start a Retail Franchise in Ghaziabad | Buyzaar Mart",
  description:
    "Learn exactly how to start a retail franchise in Ghaziabad — step by step. The Buyzaar Mart FOCM model makes it simple. FSSAI licensed. Call 9217991727 today.",

  Keywords:
    "daily needs store franchise in Ghaziabad, grocery store franchise Ghaziabad, supermarket franchise Ghaziabad, convenience store franchise Ghaziabad, FOCM retail franchise Ghaziabad, low investment franchise Ghaziabad, high return franchise Ghaziabad, inventory guarantee franchise Ghaziabad, hyper-local marketing franchise Ghaziabad, retail business opportunity Ghaziabad",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/how-to-start-a-retail-franchise-in-ghaziabad",
  },
  openGraph: {
    title: "How to Start a Retail Franchise in Ghaziabad | Buyzaar Mart",
    description:
      "Learn exactly how to start a retail franchise in Ghaziabad — step by step. The Buyzaar Mart FOCM model makes it simple. FSSAI licensed. Call 9217991727 today.",
    url: "https://www.thebuyzaarmart.com/ghaziabad/how-to-start-a-retail-franchise-in-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Retail Franchise in Ghaziabad | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Retail Franchise in Ghaziabad | Buyzaar Mart",
    description:
      "Learn exactly how to start a retail franchise in Ghaziabad — step by step. The Buyzaar Mart FOCM model makes it simple. FSSAI licensed. Call 9217991727 today.",
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