import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Steps to Open a Franchise Store in Ghaziabad | Buyzaar Mart",
  description:
    "Know the exact steps to open a franchise store in Ghaziabad with The Buyzaar Mart. From enquiry to grand opening in 8-12 weeks. Call 9217991727 to get started!",
  keywords:
    "steps to open a franchise store in Ghaziabad, franchise store in Ghaziabad, open franchise in Ghaziabad, Buyzaar Mart Ghaziabad, daily needs franchise Ghaziabad, grocery franchise Ghaziabad, supermarket franchise Ghaziabad",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/steps-to-open-a-franchise-store-in-ghaziabad",
  },
  openGraph: {
    title: "Steps to Open a Franchise Store in Ghaziabad | Buyzaar Mart",
    description:
      "Know the exact steps to open a franchise store in Ghaziabad with The Buyzaar Mart. From enquiry to grand opening in 8-12 weeks. Call 9217991727 to get started!",
    url: "https://www.thebuyzaarmart.com/ghaziabad/steps-to-open-a-franchise-store-in-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Steps to Open a Franchise Store in Ghaziabad | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steps to Open a Franchise Store in Ghaziabad | Buyzaar Mart",
    description:
      "Know the exact steps to open a franchise store in Ghaziabad with The Buyzaar Mart. From enquiry to grand opening in 8-12 weeks. Call 9217991727 to get started!",
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