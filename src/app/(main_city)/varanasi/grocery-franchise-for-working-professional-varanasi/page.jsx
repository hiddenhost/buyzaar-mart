import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise for Working Professionals in Varanasi | The Buyzaar Mart",
  description:
    "Explore a passive grocery franchise investment in Varanasi designed for working professionals. Learn about FOCO ownership, investment details, and how to get started.",
  keywords: [
    "grocery franchise working professionals Varanasi",
    "passive income franchise",
    "FOCO franchise model",
    "Buyzaar Mart Varanasi",
    "grocery franchise investment India",
    "side income grocery business",
    "retail franchise Uttar Pradesh",
    "passive retail investment Varanasi",
    "low involvement franchise",
    "part time franchise business",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-for-working-professional-varanasi",
  },
  openGraph: {
    title: "Grocery Franchise for Working Professionals in Varanasi | The Buyzaar Mart",
    description:
      "Explore a passive grocery franchise investment in Varanasi designed for working professionals. Learn about FOCO ownership, investment details, and how to get started.",
    url: "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-for-working-professional-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise for Working Professionals in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise for Working Professionals in Varanasi | The Buyzaar Mart",
    description:
      "Explore a passive grocery franchise investment in Varanasi designed for working professionals. Learn about FOCO ownership, investment details, and how to get started.",
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