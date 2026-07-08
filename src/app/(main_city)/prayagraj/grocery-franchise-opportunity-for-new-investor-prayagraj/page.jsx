import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity for New Investors in Prayagraj | Buyzaar Mart",
  description:
    "Discover a grocery franchise opportunity in Prayagraj designed for new investors. Buyzaar Mart offers training, support, and a low-risk path into retail.",
  keywords: [
    "grocery franchise new investor Prayagraj",
    "Buyzaar Mart franchise",
    "first-time investor franchise India",
    "beginner franchise business Prayagraj",
    "low-risk franchise opportunity",
    "grocery franchise training UP",
    "new entrepreneur franchise Prayagraj",
    "first business franchise India",
    "franchise for beginners Prayagraj",
    "retail franchise new investor support",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-opportunity-for-new-investor-prayagraj",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity for New Investors in Prayagraj | Buyzaar Mart",
    description:
      "Discover a grocery franchise opportunity in Prayagraj designed for new investors. Buyzaar Mart offers training, support, and a low-risk path into retail.",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-opportunity-for-new-investor-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity for New Investors in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity for New Investors in Prayagraj | Buyzaar Mart",
    description:
      "Discover a grocery franchise opportunity in Prayagraj designed for new investors. Buyzaar Mart offers training, support, and a low-risk path into retail.",
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