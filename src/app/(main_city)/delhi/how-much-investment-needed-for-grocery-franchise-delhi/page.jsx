import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment in Delhi | Buyzaar Mart Cost Guide",
  description:
    "Find out how much investment is needed for a grocery franchise in Delhi with Buyzaar Mart. Explore store formats, costs, and the application process.",
  keywords: [
    "grocery franchise investment Delhi",
    "Buyzaar Mart franchise cost Delhi",
    "supermarket franchise Delhi investment",
    "grocery store franchise Delhi",
    "retail franchise cost India",
    "Buyzaar Mart Delhi franchise",
    "franchise investment breakdown Delhi",
    "organised retail franchise Delhi",
    "grocery business investment India",
    "franchise opportunity Delhi NCR",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/how-much-investment-needed-for-grocery-franchise-delhi",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Delhi | Buyzaar Mart Cost Guide",
    description:
      "Find out how much investment is needed for a grocery franchise in Delhi with Buyzaar Mart. Explore store formats, costs, and the application process.",
    url: "https://www.thebuyzaarmart.com/delhi/how-much-investment-needed-for-grocery-franchise-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "  Grocery Franchise Investment in Delhi | Buyzaar Mart Cost Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Delhi | Buyzaar Mart Cost Guide",
    description:
      "Find out how much investment is needed for a grocery franchise in Delhi with Buyzaar Mart. Explore store formats, costs, and the application process.",
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