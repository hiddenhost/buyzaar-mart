import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Noida | Best Investment Opportunity",

  description:
    "Discover Buyzaar Mart franchise in Noida – your gateway to profitable grocery retail. Complete support, prime territories, proven model, and rapid ROI in Noida's booming market. Apply today!",

  keywords:
    "buyzaar mart franchise noida, supermarket franchise noida, franchise opportunity noida, grocery franchise noida, retail franchise noida, profitable franchise noida, supermarket investment noida, business opportunity noida, franchise in sector 62, greater noida franchise",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/buyzaar-mart-franchise-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Buyzaar Mart Franchise in Noida | Best Investment Opportunity",
    description: "Discover Buyzaar Mart franchise in Noida – your gateway to profitable grocery retail. Complete support, prime territories, proven model, and rapid ROI in Noida's booming market. Apply today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/buyzaar-mart-franchise-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Noida | Best Investment Opportunity",
    description: "Discover Buyzaar Mart franchise in Noida – your gateway to profitable grocery retail. Complete support, prime territories, proven model, and rapid ROI in Noida's booming market. Apply today!",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
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
