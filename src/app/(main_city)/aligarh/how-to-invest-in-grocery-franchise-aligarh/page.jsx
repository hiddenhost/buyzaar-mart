import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Invest in a Grocery Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Learn how to invest in a grocery franchise in Aligarh with The Buyzaar Mart. Explore investment structure, returns, models, and the complete process.",
  keywords: [
    "how to invest in grocery franchise Aligarh",
    "grocery franchise investment Aligarh",
    "invest in franchise Aligarh",
    "Buyzaar Mart investment Aligarh",
    "supermarket investment Aligarh",
    "retail investment Aligarh",
    "franchise investment plan Aligarh",
    "passive investment franchise Aligarh",
    "FOCM FOCO investment Aligarh",
    "franchise returns Aligarh",
    "franchise apply Aligarh",
    "grocery business investment Aligarh",
    "mini mart investment Aligarh",
    "super mart investment Aligarh",
    "hyper mart investment Aligarh",
    "franchise opportunity Uttar Pradesh",
    "best franchise investment Aligarh",
    "daily needs store investment Aligarh",
    "FMCG retail investment Aligarh",
    "low investment franchise Aligarh",
    "organized retail investment Aligarh",
    "franchise partner investment Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-invest-in-grocery-franchise-aligarh",
  },
  openGraph: {
    title: "How to Invest in a Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to invest in a grocery franchise in Aligarh with The Buyzaar Mart. Explore investment structure, returns, models, and the complete process.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-invest-in-grocery-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Invest in a Grocery Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Invest in a Grocery Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to invest in a grocery franchise in Aligarh with The Buyzaar Mart. Explore investment structure, returns, models, and the complete process.",
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