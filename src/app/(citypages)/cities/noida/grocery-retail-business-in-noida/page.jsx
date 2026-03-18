import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Retail Business in Noida | Start with The Buyzaar Mart",

  description:
    "Launch your grocery retail business in Noida with The Buyzaar Mart. Profitable models, local insights, and full support for high returns in booming sectors. Begin your success story today!",

  keywords:
    "grocery retail business noida, buyzaar mart franchise noida, start grocery business noida, noida retail investment, supermarket franchise noida, grocery store partnership noida, profitable grocery business noida, buyzaar mart partnership, noida retail opportunity, grocery venture noida",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-investment-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Retail Business in Noida | Start with The Buyzaar Mart",
    description: "Launch your grocery retail business in Noida with The Buyzaar Mart. Profitable models, local insights, and full support for high returns in booming sectors. Begin your success story today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-investment-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Retail Business in Noida - Start with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Retail Business in Noida | Start with The Buyzaar Mart",
    description: "Launch your grocery retail business in Noida with The Buyzaar Mart. Profitable models, local insights, and full support for high returns in booming sectors. Begin your success story today!",
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
