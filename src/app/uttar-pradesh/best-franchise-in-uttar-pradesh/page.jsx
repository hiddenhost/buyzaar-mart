import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise in Uttar Pradesh 2026 | The Buyzaar Mart Retail Opportunities",

  description: "Explore the best franchise in Uttar Pradesh with The Buyzaar Mart. Low-risk hypermart & supermart models, investment from ₹15-50 lakhs, full support. Start your profitable retail business.",

  keywords: "franchise business in uttar pradesh, buyzaar mart franchise uttar pradesh, grocery franchise uttar pradesh, fico fofo uttar pradesh, minimart franchise up, supermart investment up, hypermart franchise uttar pradesh, retail franchise uttar pradesh, profitable franchise up, franchise opportunity uttar pradesh",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Franchise in Uttar Pradesh 2026 | The Buyzaar Mart Retail Opportunities",
    description: "Explore the best franchise in Uttar Pradesh with The Buyzaar Mart. Low-risk hypermart & supermart models, investment from ₹15-50 lakhs, full support. Start your profitable retail business.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/best-grocery-franchise-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise in Uttar Pradesh 2026 - The Buyzaar Mart Retail Opportunities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise in Uttar Pradesh 2026 | The Buyzaar Mart Retail Opportunities",
    description: "Explore the best franchise in Uttar Pradesh with The Buyzaar Mart. Low-risk hypermart & supermart models, investment from ₹15-50 lakhs, full support. Start your profitable retail business.",
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
