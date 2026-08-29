import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Retail Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Learn how to start a retail franchise in Aligarh with The Buyzaar Mart. Explore planning, investment, store formats, licenses, and the full launch process.",
  keywords: [
    "how to start retail franchise Aligarh",
    "retail franchise Aligarh",
    "start retail business Aligarh",
    "Buyzaar Mart Aligarh",
    "supermarket franchise Aligarh",
    "grocery franchise Aligarh",
    "retail business plan Aligarh",
    "franchise process Aligarh",
    "franchise apply Aligarh",
    "franchise investment Aligarh",
    "retail licenses Aligarh",
    "organized retail Aligarh",
    "mini mart franchise Aligarh",
    "super mart franchise Aligarh",
    "hyper mart franchise Aligarh",
    "FMCG retail franchise Aligarh",
    "FOCM FOCO franchise Aligarh",
    "best franchise in Aligarh",
    "franchise opportunity Uttar Pradesh",
    "daily needs store franchise Aligarh",
    "low investment franchise Aligarh",
    "retail investment Aligarh",
    "franchise partner Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-start-retail-franchise-in-aligarh",
  },
  openGraph: {
    title: "How to Start a Retail Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to start a retail franchise in Aligarh with The Buyzaar Mart. Explore planning, investment, store formats, licenses, and the full launch process.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-start-retail-franchise-in-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Retail Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Retail Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Learn how to start a retail franchise in Aligarh with The Buyzaar Mart. Explore planning, investment, store formats, licenses, and the full launch process.",
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