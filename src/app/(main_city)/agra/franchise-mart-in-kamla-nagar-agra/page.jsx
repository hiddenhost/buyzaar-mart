import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Mart in Kamla Nagar Agra | The Buyzaar Mart",
  description:
    "Looking for a franchise mart in Kamla Nagar, Agra? Discover why The Buyzaar Mart is the most trusted retail franchise opportunity in the region.",
  keywords: [
    "franchise mart in Kamla Nagar Agra",
    "Buyzaar Mart Kamla Nagar",
    "grocery franchise Kamla Nagar Agra",
    "retail franchise Agra",
    "supermarket franchise Kamla Nagar",
    "FMCG franchise Agra",
    "organized retail Agra",
    "franchise opportunity in Agra",
    "mini mart franchise Agra",
    "super mart franchise Agra",
    "hyper mart franchise Agra",
    "grocery store franchise Agra",
    "low investment franchise Agra",
    "best franchise business Agra",
    "franchise business in Agra Uttar Pradesh",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/franchise-mart-in-kamla-nagar-agra",
  },
  openGraph: {
    title: "Franchise Mart in Kamla Nagar Agra | The Buyzaar Mart",
    description:
      "Looking for a franchise mart in Kamla Nagar, Agra? Discover why The Buyzaar Mart is the most trusted retail franchise opportunity in the region.",
    url: "https://www.thebuyzaarmart.com/agra/franchise-mart-in-kamla-nagar-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Mart in Kamla Nagar Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Mart in Kamla Nagar Agra | The Buyzaar Mart",
    description:
      "Looking for a franchise mart in Kamla Nagar, Agra? Discover why The Buyzaar Mart is the most trusted retail franchise opportunity in the region.",
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