import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business Opportunity in Muzaffarnagar 2026 | The Buyzaar Mart Startup Guide",

  description: "Unlock profitable grocery business opportunities in Muzaffarnagar with The Buyzaar Mart. Find startup costs, market insights, profitability tips, and launch steps for success in this thriving UP region. High returns in 2026!",

  keywords: "grocery business muzaffarnagar, buyzaar mart franchise, startup costs muzaffarnagar, grocery startup up, profitable grocery business, muzaffarnagar market insights, grocery launch steps",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Business Opportunity in Muzaffarnagar 2026 | The Buyzaar Mart Startup Guide",

    description: "Unlock profitable grocery business opportunities in Muzaffarnagar with The Buyzaar Mart. Find startup costs, market insights, profitability tips, and launch steps for success in this thriving UP region. High returns in 2026!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Business Opportunity in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Business Opportunity in Muzaffarnagar 2026 | The Buyzaar Mart Startup Guide",

    description: "Unlock profitable grocery business opportunities in Muzaffarnagar with The Buyzaar Mart. Find startup costs, market insights, profitability tips, and launch steps for success in this thriving UP region. High returns in 2026!",

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