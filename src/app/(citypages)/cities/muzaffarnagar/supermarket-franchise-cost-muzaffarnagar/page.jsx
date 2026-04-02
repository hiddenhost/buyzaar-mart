import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Cost in Muzaffarnagar | The Buyzaar Mart 2026",

  description: "Detailed supermarket franchise cost in Muzaffarnagar with The Buyzaar Mart 30-60 lakhs investment, 25%+ ROI, full support. Launch your profitable store today!",

  keywords: "supermarket franchise cost muzaffarnagar, buyzaar mart franchise muzaffarnagar, supermarket franchise muzaffarnagar, franchise investment muzaffarnagar, grocery franchise muzaffarnagar, profitable supermarket franchise",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Supermarket Franchise Cost in Muzaffarnagar | The Buyzaar Mart 2026",

    description: "Detailed supermarket franchise cost in Muzaffarnagar with The Buyzaar Mart 30-60 lakhs investment, 25%+ ROI, full support. Launch your profitable store today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Cost in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Cost in Muzaffarnagar | The Buyzaar Mart 2026",

    description: "Detailed supermarket franchise cost in Muzaffarnagar with The Buyzaar Mart 30-60 lakhs investment, 25%+ ROI, full support. Launch your profitable store today!",

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