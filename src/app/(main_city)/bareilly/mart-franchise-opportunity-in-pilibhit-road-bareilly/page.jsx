import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity in Pilibhit Road, Bareilly | Buyzaar Mart",
  description:
    "Explore a mart franchise opportunity on Pilibhit Road, Bareilly with Buyzaar Mart. Growing locality, brand support & strong footfall potential. Enquire now!",
  keywords: [
    "mart franchise Pilibhit Road",
    "Buyzaar Mart Pilibhit Road Bareilly",
    "franchise opportunity Pilibhit Road",
    "grocery store franchise Bareilly",
    "retail franchise Pilibhit Bypass",
    "supermarket franchise Pilibhit Road",
    "organised retail Bareilly",
    "mart business Pilibhit Road",
    "branded grocery Pilibhit Road Bareilly",
    "franchise investment Bareilly",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/pilibhit-road/mart-franchise-opportunity-in-pilibhit-road-bareilly",
  },
  openGraph: {
    title: "Mart Franchise Opportunity in Pilibhit Road, Bareilly | Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity on Pilibhit Road, Bareilly with Buyzaar Mart. Growing locality, brand support & strong footfall potential. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/pilibhit-road/mart-franchise-opportunity-in-pilibhit-road-bareilly",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Pilibhit Road, Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity in Pilibhit Road, Bareilly | Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity on Pilibhit Road, Bareilly with Buyzaar Mart. Growing locality, brand support & strong footfall potential. Enquire now!",
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