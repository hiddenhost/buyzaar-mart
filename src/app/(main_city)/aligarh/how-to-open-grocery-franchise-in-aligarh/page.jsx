import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Grocery Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Learn how to open a grocery franchise in Aligarh with The Buyzaar Mart. Explore demand, investment, product categories, licenses, and the complete setup process.",
  keywords: [
    "how to open grocery franchise Aligarh",
    "grocery franchise Aligarh",
    "open grocery store Aligarh",
    "Buyzaar Mart Aligarh",
    "supermarket franchise Aligarh",
    "retail franchise Aligarh",
    "grocery business Aligarh",
    "franchise process Aligarh",
    "how to start grocery store Aligarh",
    "franchise apply Aligarh",
    "franchise investment Aligarh",
    "grocery store licenses Aligarh",
    "kirana to supermarket Aligarh",
    "mini mart franchise Aligarh",
    "super mart franchise Aligarh",
    "hyper mart franchise Aligarh",
    "FMCG retail franchise Aligarh",
    "FOCM FOCO franchise Aligarh",
    "best franchise in Aligarh",
    "franchise opportunity Uttar Pradesh",
    "daily needs store franchise Aligarh",
    "low investment franchise Aligarh",
    "organized grocery retail Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-open-grocery-franchise-in-aligarh",
  },
  openGraph: {
    title: "How to Open a Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to open a grocery franchise in Aligarh with The Buyzaar Mart. Explore demand, investment, product categories, licenses, and the complete setup process.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-open-grocery-franchise-in-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Grocery Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to open a grocery franchise in Aligarh with The Buyzaar Mart. Explore demand, investment, product categories, licenses, and the complete setup process.",
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