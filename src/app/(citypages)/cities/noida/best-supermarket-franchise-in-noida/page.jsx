import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket Franchise in Noida | The Buyzaar Mart",

  description:
    "Discover the best supermarket franchise in Noida with The Buyzaar Mart. Proven business model, complete training & support. Start your profitable venture today!",

  keywords:
    "best supermarket franchise noida, supermarket franchise noida, buyzaar mart franchise, supermarket business noida, franchise opportunity noida, retail franchise noida, grocery franchise noida, profitable franchise noida, supermarket investment noida, business opportunity noida",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-franchise-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Supermarket Franchise in Noida | The Buyzaar Mart",
    description: "Discover the best supermarket franchise in Noida with The Buyzaar Mart. Proven business model, complete training & support. Start your profitable venture today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-franchise-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart - Best Supermarket Franchise in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Best Supermarket Franchise in Noida | The Buyzaar Mart",
    description: "Discover the best supermarket franchise in Noida with The Buyzaar Mart. Proven business model, complete training & support. Start your profitable venture today!",
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
