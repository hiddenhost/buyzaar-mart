import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Grocery Franchise in Bareilly | Buyzaar Mart",
  description:
    "Learn how to open a grocery franchise in Bareilly with Buyzaar Mart. Step-by-step process, investment details, and brand support explained. Enquire now!",
  keywords: [
    "how to open grocery franchise Bareilly",
    "Buyzaar Mart franchise process",
    "start grocery store Bareilly",
    "grocery franchise steps UP",
    "retail franchise application Bareilly",
    "grocery business setup Bareilly",
    "franchise investment process",
    "Buyzaar Mart franchise apply",
    "grocery store franchise guide",
    "start supermarket franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/how-to-open-a-grocery-franchise-in-bareilly",
  },
  openGraph: {
    title: "How to Open a Grocery Franchise in Bareilly | Buyzaar Mart",
    description:
      "Learn how to open a grocery franchise in Bareilly with Buyzaar Mart. Step-by-step process, investment details, and brand support explained. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/how-to-open-a-grocery-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Grocery Franchise in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Grocery Franchise in Bareilly | Buyzaar Mart",
    description:
      "Learn how to open a grocery franchise in Bareilly with Buyzaar Mart. Step-by-step process, investment details, and brand support explained. Enquire now!",
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