import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise in Muzaffarnagar | The Buyzaar Mart Opportunity 2026",

  description: "Start a profitable retail franchise in Muzaffarnagar with The Buyzaar Mart. Low investment, full support, high returns. Join our proven model today!",

  keywords: "retail franchise muzaffarnagar, buyzaar mart franchise muzaffarnagar, low investment franchise muzaffarnagar, profitable retail business muzaffarnagar, franchise opportunity muzaffarnagar 2026, buyzaar mart opportunity",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Retail Franchise in Muzaffarnagar | The Buyzaar Mart Opportunity 2026",

    description: "Start a profitable retail franchise in Muzaffarnagar with The Buyzaar Mart. Low investment, full support, high returns. Join our proven model today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise in Muzaffarnagar | The Buyzaar Mart Opportunity 2026",

    description: "Start a profitable retail franchise in Muzaffarnagar with The Buyzaar Mart. Low investment, full support, high returns. Join our proven model today!",

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