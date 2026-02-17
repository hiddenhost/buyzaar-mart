import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
export const metadata = {
  title:
    "low investment franchise in Muzaffarnagar 2026 | Start Your Buyzaar Mart Supermarket",

  description:
    "Looking to start a profitable grocery franchise in Muzaffarnagar in 2026? Partner with The Buyzaar Mart and launch a modern supermarket with low investment, high ROI, trusted brand support, and a proven retail business model.",

  keywords:
    "grocery franchise muzaffarnagar 2026, supermarket franchise muzaffarnagar, buyzaar mart franchise, retail franchise opportunity 2026, profitable franchise india 2026, low investment franchise muzaffarnagar, grocery business opportunity, start supermarket business india, buyzaar mart dealership, grocery store franchise india",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "low investment franchise in Muzaffarnagar 2026 | Buyzaar Mart Business Opportunity",

    description:
      "Own a high-growth supermarket franchise in Muzaffarnagar with The Buyzaar Mart. Get complete setup assistance, strong supply chain, marketing support, and excellent return potential in 2026.",

    url:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "low investment franchise in Muzaffarnagar 2026",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title:
      "low investment franchise in Muzaffarnagar 2026 | Buyzaar Mart",

    description:
      "Join The Buyzaar Mart in 2026 and open your own modern grocery store franchise in Muzaffarnagar with expert guidance and strong profit potential.",

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
