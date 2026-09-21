import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Store Franchise in Aligarh | Open with The Buyzaar Mart",
  description:
    "Discover how to open a retail store franchise in Aligarh with The Buyzaar Mart. Explore investment options, formats, licenses, margins, and setup steps.",
  keywords: [
    "retail store franchise in Aligarh",
    "open retail franchise Aligarh",
    "retail business opportunity Uttar Pradesh",
    "FMCG retail franchise India",
    "mini mart franchise",
    "super mart franchise",
    "hyper mart franchise",
    "become a franchise partner India",
    "low investment retail franchise",
    "best retail franchise India",
    "The Buyzaar Mart franchise",
    "franchise business Aligarh",
    "organized retail franchise India",
    "own a retail store India",
    "neighborhood retail franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-open-a-retail-store-franchise-in-aligarh",
  },
  openGraph: {
    title: "Retail Store Franchise in Aligarh | Open with The Buyzaar Mart",
    description:
      "Discover how to open a retail store franchise in Aligarh with The Buyzaar Mart. Explore investment options, formats, licenses, margins, and setup steps.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-open-a-retail-store-franchise-in-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise in Aligarh | Open with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Store Franchise in Aligarh | Open with The Buyzaar Mart",
    description:
      "Discover how to open a retail store franchise in Aligarh with The Buyzaar Mart. Explore investment options, formats, licenses, margins, and setup steps.",
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