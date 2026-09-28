import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Invest in a Grocery Franchise in Mathura | Investor's Guide",
  description:
    "Learn how to invest in a grocery franchise in Mathura — returns, risks, investment structure & involvement models, with The Buyzaar Mart's financial guidance.",
  keywords: [
    "how to invest in grocery franchise Mathura",
    "grocery franchise investment guide",
    "grocery franchise ROI Mathura",
    "grocery franchise returns India",
    "investment risk grocery franchise",
    "grocery franchise vs fixed deposit",
    "grocery franchise vs mutual funds",
    "grocery franchise passive investment",
    "Buyzaar Mart investment guide Mathura",
    "grocery franchise capital planning",
    "grocery franchise due diligence",
    "grocery franchise break even Mathura",
    "grocery franchise financial plan",
    "grocery franchise involvement models",
    "FOCM FOFO FOCO investment Mathura",
    "grocery franchise expansion investment",
    "grocery retail investment India",
    "grocery franchise margin structure",
    "grocery franchise location risk",
    "franchise investment Uttar Pradesh",
    "grocery franchise long term growth",
    "invest in supermarket franchise Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-invest-in-grocery-franchise-mathura",
  },
  openGraph: {
    title: "How to Invest in a Grocery Franchise in Mathura | Investor's Guide",
    description:
      "Learn how to invest in a grocery franchise in Mathura — returns, risks, investment structure & involvement models, with The Buyzaar Mart's financial guidance.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-invest-in-grocery-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Invest in a Grocery Franchise in Mathura | Investor's Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Invest in a Grocery Franchise in Mathura | Investor's Guide",
    description:
      "Learn how to invest in a grocery franchise in Mathura — returns, risks, investment structure & involvement models, with The Buyzaar Mart's financial guidance.",
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