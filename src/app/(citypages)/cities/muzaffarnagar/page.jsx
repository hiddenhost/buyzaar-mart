import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Buyzaar Mart Franchise in Muzaffarnagar | Supermarket Franchise Opportunity",
  description:
    "Open a profitable Buyzaar Mart supermarket franchise in Muzaffarnagar. Investment: ₹15-25 lakhs. Complete training, supply chain support, and marketing assistance. Apply now!",
  keywords: [
    "buyzaar mart franchise muzaffarnagar",
    "supermarket franchise muzaffarnagar",
    "grocery franchise muzaffarnagar",
    "retail franchise opportunity muzaffarnagar",
    "franchise business muzaffarnagar",
    "buyzaar mart dealership muzaffarnagar",
    "supermarket business opportunity muzaffarnagar"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Buyzaar Mart Franchise in Muzaffarnagar | Supermarket Franchise Opportunity",
    description:
      "Open a profitable Buyzaar Mart supermarket franchise in Muzaffarnagar. Investment: ₹15-25 lakhs. Complete training, supply chain support, and marketing assistance.",
    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Muzaffarnagar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Muzaffarnagar | Supermarket Franchise",
    description:
      "Start your profitable supermarket franchise in Muzaffarnagar with complete support from Buyzaar Mart. Apply today!",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return <Content />;
}