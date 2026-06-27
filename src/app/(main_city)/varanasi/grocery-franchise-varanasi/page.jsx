import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise in Varanasi | Buyzaar Mart Franchise Opportunity",
  description:
    "Looking for a grocery franchise in Varanasi? Discover why Buyzaar Mart is a smart choice — investment, location tips, benefits, and how to apply.",
  keywords: [
    "Buyzaar Mart grocery franchise",
    "grocery store franchise Varanasi",
    "supermarket franchise Varanasi",
    "grocery franchise cost India",
    "grocery franchise opportunities Varanasi",
    "Buyzaar Mart Varanasi",
    "retail grocery franchise Uttar Pradesh",
    "best grocery franchise to invest in",
    "grocery business Varanasi",
    "franchise grocery store near me",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-varanasi",
  },
  openGraph: {
    title: "Grocery Franchise in Varanasi | Buyzaar Mart Franchise Opportunity",
    description:
      "Looking for a grocery franchise in Varanasi? Discover why Buyzaar Mart is a smart choice — investment, location tips, benefits, and how to apply.",
    url: "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Varanasi | Buyzaar Mart Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise in Varanasi | Buyzaar Mart Franchise Opportunity",
    description:
      "Looking for a grocery franchise in Varanasi? Discover why Buyzaar Mart is a smart choice — investment, location tips, benefits, and how to apply.",
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