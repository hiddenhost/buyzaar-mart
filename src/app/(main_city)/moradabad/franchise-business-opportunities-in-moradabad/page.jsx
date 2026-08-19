import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business Opportunities in Moradabad | The Buyzaar Mart",
  description:
    "Explore top franchise business opportunities in Moradabad with The Buyzaar Mart. Low investment, proven retail systems, and complete brand support.",
  keywords: [
    "franchise business opportunities moradabad",
    "best franchise moradabad",
    "low investment business moradabad",
    "grocery franchise opportunity moradabad",
    "retail business opportunity UP",
    "buyzaar mart moradabad",
    "supermarket franchise opportunity",
    "small business ideas moradabad",
    "franchise for entrepreneurs moradabad",
    "organized retail moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/franchise-business-opportunities-in-moradabad",
  },
  openGraph: {
    title: "Franchise Business Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Explore top franchise business opportunities in Moradabad with The Buyzaar Mart. Low investment, proven retail systems, and complete brand support.",
    url: "https://www.thebuyzaarmart.com/moradabad/franchise-business-opportunities-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Opportunities in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Explore top franchise business opportunities in Moradabad with The Buyzaar Mart. Low investment, proven retail systems, and complete brand support.",
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