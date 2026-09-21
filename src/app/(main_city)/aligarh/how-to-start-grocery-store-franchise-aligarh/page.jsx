import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise in Aligarh | Start with The Buyzaar Mart",
  description:
    "Start a grocery store franchise in Aligarh with The Buyzaar Mart. Explore investment, store formats, licenses, profit margins & step-by-step setup process.",
  keywords: [
    "grocery store franchise in Aligarh",
    "supermarket franchise Aligarh",
    "FMCG retail franchise India",
    "low investment grocery franchise",
    "best grocery franchise in India",
    "mini mart franchise",
    "super mart franchise",
    "hyper mart franchise",
    "franchise business Aligarh",
    "grocery shop business plan",
    "neighborhood grocery store franchise",
    "The Buyzaar Mart franchise",
    "retail business ideas Aligarh",
    "franchise opportunities Uttar Pradesh",
    "kirana store franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/how-to-start-grocery-store-franchise-aligarh",
  },
  openGraph: {
    title: "Grocery Store Franchise in Aligarh | Start with The Buyzaar Mart",
    description:
      "Start a grocery store franchise in Aligarh with The Buyzaar Mart. Explore investment, store formats, licenses, profit margins & step-by-step setup process.",
    url: "https://www.thebuyzaarmart.com/aligarh/how-to-start-grocery-store-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise in Aligarh | Start with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise in Aligarh | Start with The Buyzaar Mart",
    description:
      "Start a grocery store franchise in Aligarh with The Buyzaar Mart. Explore investment, store formats, licenses, profit margins & step-by-step setup process.",
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