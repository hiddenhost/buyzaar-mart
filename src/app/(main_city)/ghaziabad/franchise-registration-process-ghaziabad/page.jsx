import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
import { Key } from "lucide-react";

export const metadata = {
  title: "Franchise Registration Process in Ghaziabad | Buyzaar Mart",
  description:
    "Understand the full franchise registration process in Ghaziabad. Buyzaar Mart guides you through every legal step — FSSAI, GST, trade license & more. Call 9217991727!",
  Keywords:
    "daily needs store franchise in Ghaziabad, grocery store franchise Ghaziabad, supermarket franchise Ghaziabad, convenience store franchise Ghaziabad, FOCM retail franchise Ghaziabad, low investment franchise Ghaziabad, high return franchise Ghaziabad, inventory guarantee franchise Ghaziabad, hyper-local marketing franchise Ghaziabad, retail business opportunity Ghaziabad",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/franchise-registration-process-in-ghaziabad",
  },
  openGraph: {
    title: "Franchise Registration Process in Ghaziabad | Buyzaar Mart",
    description:
      "Understand the full franchise registration process in Ghaziabad. Buyzaar Mart guides you through every legal step — FSSAI, GST, trade license & more. Call 9217991727!",
    url: "https://www.thebuyzaarmart.com/ghaziabad/franchise-registration-process-in-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Registration Process in Ghaziabad | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Registration Process in Ghaziabad | Buyzaar Mart",
    description:
      "Understand the full franchise registration process in Ghaziabad. Buyzaar Mart guides you through every legal step — FSSAI, GST, trade license & more. Call 9217991727!",
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